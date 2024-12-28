import Image from "next/image"

const Logo = () => {
  return (
    <div className="logo_wrapper">
      <Image alt="logo" src="/assets/imgs/logo/logo_dark.png"
      width={598}
      height={363}
      className="h-auto w-auto"
      />
    </div>
  )
}

export default Logo