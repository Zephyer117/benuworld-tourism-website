import { defineQuery } from 'next-sanity'

export const POSTS_QUERY = defineQuery(/* groq */ `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  content,
  body,
  section,
  status,
  author,
  image,
  imageUrl,
  "imageSrc": image.asset->url,
  video,
  gallery,
  views,
  publishedAt,
  _createdAt,
  _updatedAt
}`)
export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]`)
export const POSTS_BY_SECTION_QUERY = defineQuery(`*[_type == "post" && section == $section && status == "published"] | order(publishedAt desc)`)
export const TEAM_MEMBERS_QUERY = defineQuery(/* groq */ `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  email,
  bio,
  image,
  imageUrl,
  "imageSrc": image.asset->url,
  featured,
  status,
  order
}`)
export const SLIDES_QUERY = defineQuery(/* groq */ `*[_type == "slide"] | order(order asc) {
  _id,
  title,
  subtitle,
  description,
  image,
  imageUrl,
  "imageSrc": image.asset->url,
  video,
  ctaText,
  ctaLink,
  active,
  order
}`)
export const CONTACT_INFO_QUERY = defineQuery(`*[_type == "contactInfo" && active == true] | order(order asc)`)
