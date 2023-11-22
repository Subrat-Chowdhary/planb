import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@radix-ui/themes/styles.css';
import './globals.css'
import { Theme, ThemePanel } from '@radix-ui/themes';
import Navbar from '@/components/NavbarRoute';
import { ThemeProvider } from '@/components/theme-provider';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apibuilder Next App',
  description: 'Subrat Schowdhary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Theme accentColor='amber' className='p-2'>
              <Navbar/>
              {children}
            </Theme>
          </ThemeProvider>
          {/* <Theme accentColor='amber' appearance='dark'> */}
          {/* </Theme> */}
        </body>      
    </html>
  )
}
