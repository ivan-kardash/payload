import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

export const usersSlug = 'users'

export const UsersCollection: CollectionConfig = {
  fields: [{ type: 'upload', relationTo: 'media', name: 'logo' }],
  auth: true,
  slug: usersSlug,
}
