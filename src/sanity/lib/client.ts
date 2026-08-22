import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Read-optimized client with CDN disabled to avoid stale data after writes/deletes
export const readClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
})

// Write-optimized client without CDN
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Legacy client for backward compatibility (write-focused)
export const client = writeClient
