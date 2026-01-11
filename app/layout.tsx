'use client'
import React from "react"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"
import Sidebar from "./components/sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100 flex flex-col min-h-screen">
        <Header />

        {/* Outer wrapper: keeps sidebar and content side-by-side even on mobile */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Sidebar: Narrower on mobile (w-20), standard on desktop (md:w-64) */}
          <aside className="w-20 md:w-64 bg-white border-r shrink-0">
            <Sidebar />
          </aside>

          {/* Main Content: Takes the remaining space */}
          <main className="flex-1 min-w-0 overflow-y-auto p-2 md:p-6">
            {children}
          </main>
          
        </div>

        <Footer />
      </body>
    </html>
  )
}