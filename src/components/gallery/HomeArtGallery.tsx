import Image from "next/image"

type Props = {
  galleryData : {
    id: number;
    path: string;
  }[]
}

const HomeArtGallery = ({galleryData}: Props) => {
  console.log('----------',galleryData)
  return (
    <div>
      <div className="gallery_wrapper grid grid-cols-3">
        {galleryData.map((item)=>(
          <Image key={item.id} alt="img" src={item.path}
          width={500}
          height={800}
          className="w-auto h-auto"
          priority
          />
        ))}
      </div>
    </div>
  )
}

export default HomeArtGallery