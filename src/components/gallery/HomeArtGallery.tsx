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
    <div className="">
      <div className="gallery_wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {galleryData.map((item)=>(
          <div key={item.id} className="group relative flex justify-center items-center cursor-pointer break-inside-avoid bg-white p-4 rounded-xl">
            <Image  alt="img" src={item.path}
            width={400}
            height={0}

            className="rounded-xl w-full h-auto"
            style={{objectFit:"cover"}}
            priority
            />
            <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-20 rounded-xl transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeArtGallery