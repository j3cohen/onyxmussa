'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Instagram, Linkedin, Film } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const portfolioItems = [
  { title: 'Lighting', videoUrl: 'https://www.youtube.com/embed/moAfqFo3f00' },
  { title: 'Assistant Camera and Drone', videoUrl: 'https://www.youtube.com/embed/ULjGbYWbJDU' },
  { title: 'Camera', videoUrl: 'https://www.instagram.com/p/CzMeq4rPI6Z/embed' },
  { title: 'Drone', videoUrl: 'https://www.youtube.com/embed/HeZck91SBIY' },
  { title: 'General Production 1', videoUrl: 'https://www.youtube.com/embed/sc8DXDWRKac' },
  { title: 'General Production 2', videoUrl: 'https://www.youtube.com/embed/hklSInDi5Rc' },
]

export function Page() {
  const [isClient, setIsClient] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    setIsClient(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col w-full">
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Onyx Mussa</h1>
          <ul className="flex space-x-4">
            <li><Button variant="link" asChild><a href="#portfolio">Portfolio</a></Button></li>
            <li><Button variant="link" asChild><a href="#contact">Contact</a></Button></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow w-full">
        <section className="h-screen relative overflow-hidden w-full">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://drive.google.com/uc?export=download&id=1J8FMuuNqnrNKUdFAUxWhgA3BEngJtpjE"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <h2 className="text-4xl md:text-6xl font-bold text-center text-white">Capturing Moments, Creating Stories</h2>
          </div>
        </section>

        <section id="portfolio" className="py-16 px-4 w-full">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <iframe
                      src={item.videoUrl}
                      className="w-full aspect-video"
                      allowFullScreen
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4 bg-gray-800 text-white w-full">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
            <div className="max-w-md mx-auto text-center">
              <p className="mb-4 text-lg">Email: onyx.mussa@example.com</p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" asChild className="bg-white hover:bg-gray-200">
                  <Link href="https://www.instagram.com/dronievroom/?locale=nl&hl=ar" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-6 h-6 text-gray-800" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="bg-white hover:bg-gray-200">
                  <Link href="https://www.imdb.com/name/nm14193771/" target="_blank" rel="noopener noreferrer">
                    <Film className="w-6 h-6 text-gray-800" />
                    <span className="sr-only">IMDB</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="bg-white hover:bg-gray-200">
                  <Link href="https://www.linkedin.com/in/onyx-mussa/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 text-gray-800" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}