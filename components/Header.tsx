'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    return (
	<header className="nav ">
	    <h1 className="branding px-6">oddish1</h1>
	    <nav className="nav-button-container">
		<NavLink href="/" label="home" pathname={pathname} />
		<NavLink href="/about" label="about" pathname={pathname} />
		<NavLink href="/blog" label="blog" pathname={pathname} />
		<NavLink href="/gallery" label="gallery" pathname={pathname} />
		<NavLink href="/development" label="development" pathname={pathname} />
		<NavLink href="/inspiration" label="inspiration" pathname={pathname} />
	    </nav>
	</header>
    );
}

function NavLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
    const isActive = pathname === href;

    return (
	<Link
	    href={href}
	    className={` ${
		isActive ? 'nav-button nav-button-active' : 'nav-button'
	    }`}
	>
	    {isActive ? `>${label}<` : label}
	</Link>
    );
}
