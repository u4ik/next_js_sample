// The Link tag that is provided from NextJS, allows us to have routing within our app.
// Name the href value to be the same name as the component that you wish to load.
import Link from 'next/link'

import styles from './Header.module.css'

export default function Header({ title }) {
    return (
        <div>
            <h1 className={styles.title}>{title ? title : "Default Title"}</h1>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/schedule'>
                        <a >Schedule</a>
                    </Link>
                </li>

                <li>
                    <Link href='/testpage'>
                        <a >test</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}