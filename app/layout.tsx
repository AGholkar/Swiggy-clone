'use client'
import React from "react"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"
import Sidebar from "./components/sidebar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100 flex flex-col min-h-screen">
        <Header />

        {/* The Wrapper */}
        <div className="flex flex-row flex-1 overflow-hidden">
          
          {/* Sidebar Area: shrink-0 is vital so it doesn't get squashed */}
          <aside className="w-16 md:w-64 bg-white border-r shrink-0">
            <Sidebar />
          </aside>

          {/* Page Area: min-w-0 prevents content from pushing under/over the sidebar */}
          <main className="flex-1 min-w-0 overflow-y-auto p-4 md:p-6">
            {children}
          </main>
          
        </div>

        <Footer />
      </body>
    </html>
  )
}