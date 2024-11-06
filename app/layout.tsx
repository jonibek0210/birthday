import type { Metadata } from "next";
import { Kablammo, Caveat } from 'next/font/google'
import "./globals.css";

const kablammo = Kablammo({
    subsets: ['latin'],
    variable: '--font-kablammo',
    display: 'swap',
})

const caveat = Caveat({
    subsets: ['latin'],
    variable: '--font-caveat',
    display: 'swap',
})

export const metadata: Metadata = {
    title: "С днём рождения Ариана",
    description: "Приглашаем вас на первый День Рождения Арианы! Ждем 11 ноября в 18:00 в ресторане 'Шохсарой' для веселья и угощений",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body
                className={`${kablammo.variable} ${caveat.variable} antialiased`}
                style={{ background: "#fff" }}
            >
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
