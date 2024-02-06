import { type SchemaTypeDefinition } from 'sanity'
import { textContent } from './schemas/textContent'
import { page } from './schemas/page'
import { contentListItem } from './schemas/contentListItem'
import { pageIntro } from './schemas/pageIntro'
import { cmsLink } from './schemas/atomic/link'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    textContent,
    page,
    contentListItem,
    pageIntro,
    cmsLink
  ],
}
