import { client } from '@/sanity/lib/client'
import { POSTS_QUERY, POST_QUERY, POSTS_BY_SECTION_QUERY, TEAM_MEMBERS_QUERY, SLIDES_QUERY, CONTACT_INFO_QUERY } from '@/sanity/lib/queries'

// Posts
export async function getAllPosts() {
  return await client.fetch(POSTS_QUERY)
}

export async function getPostBySlug(slug: string) {
  return await client.fetch(POST_QUERY, { slug })
}

export async function getPostsBySection(section: string) {
  return await client.fetch(POSTS_BY_SECTION_QUERY, { section })
}

// Team Members
export async function getTeamMembers() {
  return await client.fetch(TEAM_MEMBERS_QUERY)
}

// Slideshow
export async function getSlides() {
  return await client.fetch(SLIDES_QUERY)
}

// Contact Info
export async function getContactInfo() {
  return await client.fetch(CONTACT_INFO_QUERY)
}
