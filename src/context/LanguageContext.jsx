import { createContext, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { translations } from '../data/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  // Detect Hindi if pathname is '/in' or starts with '/in/'
  const isHindi = location.pathname === '/in' || location.pathname.startsWith('/in/')
  const lang = isHindi ? 'hi' : 'en'
  const t = translations[lang] || translations.en

  // Generates localized path according to current language
  const getLocalizedPath = (path) => {
    if (!path) return isHindi ? '/in' : '/'
    // Strip existing /in prefix if present for clean normalization
    const cleanPath = path === '/in' ? '/' : path.startsWith('/in/') ? path.slice(3) : path

    if (isHindi) {
      if (cleanPath === '/') return '/in'
      return `/in${cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath}`
    } else {
      return cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath
    }
  }

  // Switches language between English ('en') and Hindi ('hi')
  const switchLanguage = (targetLang) => {
    const currentPath = location.pathname
    const cleanPath = currentPath === '/in' ? '/' : currentPath.startsWith('/in/') ? currentPath.slice(3) : currentPath

    if (targetLang === 'hi') {
      const nextPath = cleanPath === '/' ? '/in' : `/in${cleanPath}`
      navigate(nextPath)
    } else {
      navigate(cleanPath || '/')
    }
  }

  return (
    <LanguageContext.Provider value={{ isHindi, lang, t, getLocalizedPath, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    // Fallback if rendered outside provider
    return {
      isHindi: false,
      lang: 'en',
      t: translations.en,
      getLocalizedPath: (p) => p,
      switchLanguage: () => {},
    }
  }
  return context
}
