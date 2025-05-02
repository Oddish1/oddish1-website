'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    return (
	<header className="sticky top-0 z-50 bg-black border-4 border-purple text-white columns-2 p-6 m-6 rounded-4xl">
	    <h1 className="text-6xl font-digitalDisco px-6">oddish1</h1>
	    <nav className="flex text-m gap-6 align-middle p-4">
		<NavLink href="/" label="home" pathname={pathname} />
		<NavLink href="/about" label="about" pathname={pathname} />
		<NavLink href="/blog" label="blog" pathname={pathname} />
		<NavLink href="/gallery" label="gallery" pathname={pathname} />
		<NavLink href="/development" label="development" pathname={pathname} />
	    </nav>
	</header>
    );
}

function NavLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
    const isActive = pathname === href;

    return (
	<Link
	    href={href}
	    className={`font-dogica cursor-pointer hover:text-blue hover:scale-110 transition-75 ${
		isActive ? 'text-blue' : 'text-red'
	    }`}
	>
	    {isActive ? `>${label}<` : label}
	</Link>
    );
}
