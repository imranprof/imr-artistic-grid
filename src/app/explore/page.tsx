import HomeArtGallery from "@/components/gallery/HomeArtGallery"
import PopularSearchIdeas from "@/components/search/PopularSearchIdeas"
import gallery from "@/content/gallery/gallery.json"


const galleryData = gallery.gallery
const Explore = () => {
  return (
    <div>
      <PopularSearchIdeas />
      <div className="container">
        <HomeArtGallery galleryData={galleryData} />
      </div>
    </div>
  )
}

export default Explore