import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"
import { LinkButton } from "../ui/custom/link-button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background py-20 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Discover Your Next Idea
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl">
            Get inspired by millions of creative ideas
          </h2>
          <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl">
            Explore curated collections of images, designs, and inspiration from creators around the world. Save your
            favorites and create your own boards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <LinkButton href={"/explore"} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/50 w-full sm:w-auto">
              Start Exploring
            </LinkButton>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
