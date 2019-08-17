import i18n from 'i18n-js'

import en from 'locales/en.json'
import ro from 'locales/ro.json'

i18n.defaultLocale = 'ro'
i18n.locale = 'ro'
i18n.fallbacks = true
i18n.translations = { ro, en }

export default i18n
