import HomeArtGallery from "@/components/gallery/HomeArtGallery"
import PopularSearchIdeas from "@/components/search/PopularSearchIdeas"

const Explore = () => {
  return (
    <div>
      <PopularSearchIdeas />
      <div className="container">
        <HomeArtGallery />
      </div>
    </div>
  )
}

export default Explore