import '../styles/globals.css'
import Link from 'next/link'
import {Nav, A} from '../components/nav/nav'

function MyApp({ Component, pageProps }) {
    return (
        <div>
            {/*<Nav>*/}
            {/*    <Link href="/"><A>Home</A></Link>*/}
            {/*    <Link href="/burgerBuilder"><A>Burger</A></Link>*/}
            {/*    <Link href="/components-review/button/button"><A>Buttons</A></Link>*/}
            {/*    <Link href="/components-review/button-ghost/button"><A>GhostButtons</A></Link>*/}
            {/*    <Link href="/components-review/button-round/button"><A>RoundedButton</A></Link>*/}
            {/*</Nav>*/}
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
