import { NextRequest, NextResponse } from "next/server";
import { generateId, youtubeOrVimeoEmbed } from "@/lib/utils";
import { getMedia, saveMedia } from "@/lib/data";
import { notifyLive } from "@/lib/live-bus";
import { client } from "@/sanity/lib/client";
import type { MediaItem, MediaKind } from "@/lib/types";

export const dynamic = "force-dynamic";

function kindFromMime(type: string): MediaKind {
  if (type.startsWith("video/")) return "video";
  if (type.startsWith("image/")) return "image";
  return "document";
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("file");
  const youtube = String(form.get("youtube") || "");
  const featured = String(form.get("featured") || "") === "true";
  const caption = String(form.get("caption") || "");
  const section = String(form.get("section") || "");
  const addToLibrary = String(form.get("library") || "true") !== "false";

  if (youtube) {
    const embed = youtubeOrVimeoEmbed(youtube);
    if (!embed) {
      return NextResponse.json({ error: "Not a YouTube or Vimeo URL" }, { status: 400 });
    }
    const item: MediaItem = {
      id: generateId(),
      name: caption || "Video link",
      type: "video",
      url: youtube,
      embedUrl: embed,
      size: "embed",
      uploadedAt: new Date().toISOString(),
      featured,
      caption,
      section: section || undefined,
    };
    if (addToLibrary) {
      const media = await getMedia();
      await saveMedia([item, ...media]);
      notifyLive("media");
    }
    return NextResponse.json(item, { status: 201 });
  }

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  try {
    // Upload to Sanity assets
    const bytes = Buffer.from(await file.arrayBuffer());
    const asset = await client.assets.upload("file", bytes, {
      filename: file.name,
      contentType: file.type,
    });

    const item: MediaItem = {
      id: generateId(),
      name: file.name,
      type: kindFromMime(file.type),
      url: asset.url,
      sanityAssetId: asset._id,
      sanityAssetRef: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
      },
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      uploadedAt: new Date().toISOString(),
      featured,
      caption: caption || file.name,
      section: section || undefined,
    };

    if (addToLibrary) {
      const media = await getMedia();
      await saveMedia([item, ...media]);
      notifyLive("media");
    }
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error("Failed to upload to Sanity:", error);
    return NextResponse.json(
      { error: "Failed to upload file. Please check your Sanity configuration." },
      { status: 500 }
    );
  }
}
