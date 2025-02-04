// app/components/nav.tsx
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/pages/about">Biography</Link></li>
                <li><Link href="/pages/blog">Blog</Link></li>
                <li><Link href="/pages/contact">Contact</Link></li>
                <li><Link href="/pages/gallery">Gallery</Link></li>
                <li><Link href="/pages/portfolio">Portfolio</Link></li>
                <li><Link href="/pages/testimonials">Testimonials</Link></li>
            </ul>
        </nav>
    );
}
