import { useEffect } from 'react'
import { useAppSelector } from '@/hooks'
import type { AppProps } from 'next/app'

const AppContent = ({ Component, pageProps }: AppProps) => {
  const darkMode = useAppSelector((state) => state.preferences.darkMode)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return <Component {...pageProps} />
}

export default AppContent
