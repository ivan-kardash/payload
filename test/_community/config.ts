import { buildConfigWithDefaults } from '../buildConfigWithDefaults'
import { MenuGlobal } from './globals/Menu'

export default buildConfigWithDefaults({
  // ...extend config here
  collections: [],
  globals: [MenuGlobal],
  graphQL: {
    schemaOutputFile: './test/_community/schema.graphql',
  },
  localization: {
    defaultLocale: 'en',
    locales: ['en', 'by'],
    fallback: true,
  },
  onInit: async (payload) => {
    await payload.updateGlobal({
      slug: 'menu',
      locale: 'en',
      data: {
        globalText: { someText: 'Some global text in English' },
      },
    })
    await payload.updateGlobal({
      slug: 'menu',
      locale: 'by',
      data: {
        globalText: { someText: 'Нейкий глабальный тэксту па-беларуску' },
      },
    })
  },
})
