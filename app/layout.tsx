import { ReactNode } from "react";
import Nav from "@/app/components/layout/nav/page"; // Correct import (from components)
import Footer from "@/app/components/layout/footer/page"; // Correct import (from components)
import "@/app/styles/layout.css"; // Import your styles

// The layout component for the entire app
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Welcome to our app! Discover our amazing features and services." />
            <meta name="author" content="Your Name" />
            <meta name="robots" content="index, follow" />

            {/* OpenGraph for Social Sharing */}
            <meta property="og:title" content="Your App Title" />
            <meta property="og:description" content="Welcome to our app! Discover our amazing features and services." />
            <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
            <meta property="og:url" content="https://yourwebsite.com" />
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Your App Title" />
            <meta name="twitter:description" content="Welcome to our app! Discover our amazing features and services." />
            <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />

            {/* Title */}
            <title>Your App Title</title>

            {/* Tailwind CSS (Already Included in your project) */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-4pZIQJsLq3xr8jsKluE1FV5YHIp3jUYZ5MslaJUe+x78ZrR4IU3P0Qd4zCNRjUhY" crossOrigin="anonymous" />
        </head>
        <body>
        <div className="layout">
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>

        {/* Bootstrap JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-pp9mrrohv1IS8ov+5AA9x4OJYjYuNuW9p0I4Dtm6kJx7zZ18eK3P0Yp1c9ty6HeL" crossOrigin="anonymous"></script>
        </body>
        </html>
    );
}
