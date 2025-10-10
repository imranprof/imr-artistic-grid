import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function GallerySkeletonLoader() {
  // Create an array of skeleton items with varying heights
  const skeletonItems = [
    { id: 1, height: "h-80" },
    { id: 2, height: "h-96" },
    { id: 3, height: "h-72" },
    { id: 4, height: "h-[400px]" },
    { id: 5, height: "h-80" },
    { id: 6, height: "h-72" },
    { id: 7, height: "h-96" },
    { id: 8, height: "h-80" },
  ]

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {skeletonItems.map((item) => (
            <Card key={item.id} className="mb-4 break-inside-avoid overflow-hidden">
              {/* Image skeleton */}
              <Skeleton className={`w-full ${item.height} rounded-none`} />

              <CardHeader className="space-y-3">
                {/* Title skeleton */}
                <Skeleton className="h-6 w-3/4" />

                {/* Description skeleton */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </CardHeader>

              <CardContent>
                {/* Tags skeleton */}
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-5 w-28" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
