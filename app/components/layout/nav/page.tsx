// app/components/nav.tsx
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/" className="nav-link active" aria-current="page">Home</Link>

                    </li>
                    <li className="nav-item">
                        <Link href="/pages/about" className="nav-link">Biography</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/pages/blog" className="nav-link">Blog</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link href="/pages/portfolio" className="nav-link dropdown-toggle" role="button"
                              data-bs-toggle="dropdown" aria-expanded="false">
                            Portfolio
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link href="/pages/about" className="dropdown-item">a</Link></li>
                            <li><Link href="/pages/about" className="dropdown-item">a</Link></li>
                            <li><Link href="/pages/about" className="dropdown-item">a</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link href="/pages/gallery" className="nav-link">Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/pages/testimonials" className="nav-link">Testimonials</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/pages/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}
