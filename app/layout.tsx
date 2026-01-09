import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "./Components/header"
import Footer from "./Components/footer"
import Sidebar from "./Components/sidebar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Swiggy CRM",
  description: "Swiggy Admin Dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* Top Header */}
        <Header />

        {/* Sidebar + Page Content */}
        <div className="flex min-h-screen bg-gray-100">

          {/* Sidebar */}
          <Sidebar />

          {/* Main Page Content */}
          <main className="flex-1 p-6">
            {children}
          </main>

        </div>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  )
}
