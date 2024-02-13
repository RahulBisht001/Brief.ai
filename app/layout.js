import {Lexend, Poppins} from "next/font/google";
import "./globals.css";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Lexend",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Poppins",
});

export const metadata = {
    title: "AI text summarizer",
    description: "Generate crisp short summery of provided text",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${lexend.variable}`}>{children}</body>
        </html>
    );
}
