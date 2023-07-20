import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My First NextJS APP',
  description: 'First NextJS APP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <header>
          <nav>
            <a href="/">Home </a>
            <a href="/about"> About </a>
            <a href="/dashboard"> Dashboard </a>
            <a href="/dashboard/addItem"> Add-Item </a>
            <a href="/dashboard/manageItem"> Manage-Item </a>
          </nav>
        </header>

        {children}

        <footer>
          This website is developed by Emon
        </footer>
        
      </body>
    </html>
  )
}
