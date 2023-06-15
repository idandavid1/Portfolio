import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Idan David portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" sizes="50x50" href="app/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
