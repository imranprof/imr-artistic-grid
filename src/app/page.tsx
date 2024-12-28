import HomeArtGallery from "@/components/gallery/HomeArtGallery";
import gallery from "@/content/gallery/gallery.json"

const galleryData = gallery.gallery
export default function Home() {
  
  console.log(gallery)
  return (
    <main className="container">
      <HomeArtGallery galleryData={galleryData}/>
    </main>
  );
}
