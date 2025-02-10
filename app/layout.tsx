import { ReactNode } from "react";
import Nav from "@/app/components/layout/nav/page";
import Footer from "@/app/components/layout/footer/page";
import "@/app/styles/layout.css";
import type { Metadata } from "next";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
/*
import "bootstrap/dist/js/bootstrap.bundle.min.js";
*/

export const metadata: Metadata = {
    title: "Mack Hoost",
    description: "Created by Mack Hoost",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <title>hello world!</title>
        </head>

        <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
