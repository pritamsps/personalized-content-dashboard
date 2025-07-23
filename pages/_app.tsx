import {Provider} from 'react-redux';
import { AppProps } from 'next/app';
import {store} from '../store/store';
import "../styles/global.css"
import AppContent from '@/components/AppContent'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppContent Component={Component} pageProps={pageProps} />
    </Provider>
  )
}