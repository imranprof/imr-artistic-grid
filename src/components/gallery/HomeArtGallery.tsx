import Image from "next/image"

type Props = {
  galleryData : {
    id: number;
    path: string;
    title: string;
    description: string;
    hashtags: string[];
  }[]
}

const HomeArtGallery = ({galleryData}: Props) => {
  return (
    <div className="p-4">
      <div className="gallery_wrapper columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {galleryData.map((item)=>(
          <div 
            key={item.id} 
            className="group relative flex flex-col cursor-pointer mb-6 break-inside-avoid bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative">
              <Image 
                alt={item.title} 
                src={item.path}
                width={400}
                height={0}
                className="w-full h-auto rounded-xl"
                style={{
                  objectFit: "cover",
                  display: "block"
                }}
                priority
              />
              <div className="absolute rounded-xl w-full h-full bg-black opacity-0 group-hover:opacity-20 transition-all duration-300 top-0"/>
            </div>
            
            <div className="p-3">
              <h3 className="font-medium text-sm truncate">{item.title}</h3>
              <p className="text-xs text-gray-500 line-clamp-2 mt-1">{item.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {item.hashtags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs text-blue-600 hover:text-blue-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeArtGallery