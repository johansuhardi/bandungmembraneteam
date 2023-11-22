import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from "@/app/components/Footer/Footer"

import Navbar from "@/app/Utilities/Navbar/Navbar"
import TombolKembali from "@/app/components/TombolKembali/TombolKembali"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BMTBandung Membrane team',
  description: 'Created by M. Abdul Qodir Jailani',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      className={inter.className}>
        {children}
        <Navbar />
        <TombolKembali />
        <Footer />
        </body>
    </html>
  )
}
