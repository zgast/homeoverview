import '../styles/globals.css'
import '../styles/style.module.css'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />

}

export default MyApp
