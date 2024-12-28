import Image from "next/image"

const Logo = () => {
  return (
    <div className="logo_wrapper h-full flex items-center">
      <Image alt="logo" src="/assets/imgs/logo/logo_dark.png"
      width={598}
      height={363}
      className="h-auto w-auto max-h-full"
      priority
      />
    </div>
  )
}

export default Logo