import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My First NextJS APP',
  description: 'First NextJS APP',
}

const  RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}

      </body>
    </html>
  )
}
export default RootLayout;