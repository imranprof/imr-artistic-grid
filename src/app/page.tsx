import HomeArtGallery from "@/components/gallery/HomeArtGallery";
import PopularSearchIdeas from "@/components/search/PopularSearchIdeas";
import gallery from "@/content/gallery/gallery.json"

const galleryData = gallery.gallery
export default function Home() {
  
  return (
    <main>
      <PopularSearchIdeas />
      <div className="container">
        <HomeArtGallery galleryData={galleryData}/>
      </div>
    </main>
  );
}
