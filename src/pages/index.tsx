import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`bg-secondry70 min-h-screen ${inter.className}`}
    >
      <p>Monoppy</p>
    </main>
  )
}
