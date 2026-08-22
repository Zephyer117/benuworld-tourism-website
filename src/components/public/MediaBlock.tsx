"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { isVideoFile, youtubeOrVimeoEmbed } from "@/lib/utils";

export default function MediaBlock({
  src,
  video,
  alt = "",
  className = "",
  controls = true,
  autoPlay = false,
}: {
  src?: string;
  video?: string;
  alt?: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
}) {
  const embed = video ? youtubeOrVimeoEmbed(video) : src ? youtubeOrVimeoEmbed(src) : null;
  const fileVideo = video && isVideoFile(video) ? video : src && isVideoFile(src) ? src : "";

  if (embed) {
    return (
      <div className={`relative overflow-hidden bg-black ${className}`}>
        <iframe
          src={`${embed}${autoPlay ? "?autoplay=1&mute=1&loop=1" : ""}`}
          title={alt || "Video"}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (fileVideo) {
    return (
      <video
        src={fileVideo}
        className={`h-full w-full object-cover ${className}`}
        controls={controls}
        playsInline
        muted={autoPlay}
        autoPlay={autoPlay}
        loop={autoPlay}
        preload="metadata"
      />
    );
  }

  if (src) {
    return <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} loading="lazy" decoding="async" />;
  }

  return <div className={`hero-mesh ${className}`} />;
}

export function MediaStack({
  image,
  video,
  gallery = [],
  alt = "",
  hrefFor,
}: {
  image?: string;
  video?: string;
  gallery?: string[];
  alt?: string;
  hrefFor?: (url: string) => string | undefined;
}) {
  const extras = gallery.filter((url) => url && url !== image);
  const hasVideo = Boolean(video);
  const hasImage = Boolean(image);

  const wrap = (url: string | undefined, node: ReactNode, className: string, key?: string) => {
    const href = url ? hrefFor?.(url) : "";
    if (!href) {
      return (
        <div key={key} className={className}>
          {node}
        </div>
      );
    }
    return (
      <Link key={key} href={href} className={`${className} block hover:opacity-95`}>
        {node}
      </Link>
    );
  };

  return (
    <div className="space-y-4">
      {hasVideo ? (
        wrap(
          image,
          <MediaBlock src={image} video={video} alt={alt} className="h-full aspect-video relative" />,
          "aspect-video rounded-2xl overflow-hidden shadow-xl bg-black",
        )
      ) : null}
      {hasImage ? (
        wrap(
          image,
          <img src={image} alt={alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />,
          "aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-100",
        )
      ) : null}
      {!hasVideo && !hasImage ? <div className="aspect-video rounded-2xl hero-mesh" /> : null}
      {extras.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {extras.map((url) =>
            wrap(
              url,
              <MediaBlock src={url} video={isVideoFile(url) || youtubeOrVimeoEmbed(url) ? url : undefined} alt={alt} className="h-full relative" />,
              "aspect-video rounded-xl overflow-hidden bg-black",
              url,
            ),
          )}
        </div>
      ) : null}
    </div>
  );
}
