import './globals.css'
import { Roboto } from 'next/font/google'

const roboto =  Roboto({ subsets: ['latin'], weight:["300","500","700","900"], })

export const metadata = {
  title: 'My First NextJS APP',
  description: 'First NextJS APP',
}

const  RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>

        {children}

      </body>
    </html>
  )
}
export default RootLayout;