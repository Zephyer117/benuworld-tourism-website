import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import teamMember from './teamMember'
import slide from './slide'
import contactInfo from './contactInfo'
import mediaItem from './mediaItem'
import service from './service'
import inboundRoute from './inboundRoute'
import inquiry from './inquiry'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, teamMember, slide, contactInfo, mediaItem, service, inboundRoute, inquiry, siteSettings],
}
