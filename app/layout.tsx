import type { Metadata } from "next";

import "./globals.scss";

export const metadata: Metadata = {
    title: "EV Voltedge",
    description: "The future of driving is now",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en-us" id="root-app">
            <body>
                {children}
            </body>
        </html>
    );
}
