"use client"

import { useState } from "react"
import { Heart, Bookmark, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const SAMPLE_ITEMS = [
  {
    id: 1,
    title: "Modern Architecture",
    image: "/assets/imgs/home/modern-architecture-cityscape.png",
    author: "Sarah Chen",
    likes: 234,
  },
  {
    id: 2,
    title: "Minimalist Interior",
    image: "/assets/imgs/home/minimalist-interior.png",
    author: "Alex Rivera",
    likes: 567,
  },
  {
    id: 3,
    title: "Nature Photography",
    image: "/assets/imgs/home/serene-forest-stream.png",
    author: "Emma Wilson",
    likes: 892,
  },
  {
    id: 4,
    title: "Abstract Art",
    image: "/assets/imgs/home/abstract-colorful-explosion.png",
    author: "Marcus Lee",
    likes: 445,
  },
  {
    id: 5,
    title: "Food Styling",
    image: "/assets/imgs/home/food-styling-photography.jpg",
    author: "Julia Martinez",
    likes: 678,
  },
  {
    id: 6,
    title: "Urban Exploration",
    image: "/assets/imgs/home/urban-city-photography.jpg",
    author: "David Kim",
    likes: 321,
  },
  {
    id: 7,
    title: "Fashion Design",
    image: "/assets/imgs/home/fashion-design-editorial.jpg",
    author: "Sophie Anderson",
    likes: 756,
  },
  {
    id: 8,
    title: "Product Design",
    image: "/assets/imgs/home/minimal-product-design.png",
    author: "Ryan Park",
    likes: 543,
  },
  {
    id: 9,
    title: "Illustration Art",
    image: "/assets/imgs/home/digital-illustration-art.png",
    author: "Mia Thompson",
    likes: 912,
  },
  {
    id: 10,
    title: "Travel Photography",
    image: "/assets/imgs/home/travel-photography-collection.png",
    author: "Chris Johnson",
    likes: 634,
  },
  {
    id: 11,
    title: "Typography Design",
    image: "/assets/imgs/home/typography-poster.png",
    author: "Nina Patel",
    likes: 489,
  },
  {
    id: 12,
    title: "Botanical Art",
    image: "/assets/imgs/home/botanical-plant-photography.jpg",
    author: "Oliver Brown",
    likes: 723,
  },
]

export function TrendingIdeas() {
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set())
  const [savedItems, setSavedItems] = useState<Set<number>>(new Set())

  const toggleLike = (id: number) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const toggleSave = (id: number) => {
    setSavedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4">
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-bold mb-2">Trending Ideas</h3>
          <p className="text-muted-foreground">Discover what's inspiring creators today</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {SAMPLE_ITEMS.map((item) => (
            <Card
              key={item.id}
              className="group relative break-inside-avoid overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 rounded-full bg-background/90 hover:bg-background"
                    onClick={() => toggleSave(item.id)}
                  >
                    <Bookmark className={`h-4 w-4 ${savedItems.has(item.id) ? "fill-current text-primary" : ""}`} />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 rounded-full bg-background/90 hover:bg-background"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <p className="font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-white/80">{item.author}</p>
                    </div>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 rounded-full bg-background/90 hover:bg-background"
                      onClick={() => toggleLike(item.id)}
                    >
                      <Heart className={`h-4 w-4 ${likedItems.has(item.id) ? "fill-current text-accent" : ""}`} />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            Load More
          </Button>
        </div>
      </div>
    </section>
  )
}
