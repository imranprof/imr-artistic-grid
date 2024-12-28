import Logo from "@/components/elements/logo/Logo"


const MainHeader = () => {
  return (
    <header>
      <div className="container">
        <div className="header_nav h-[100px] flex items-center">
          <Logo />
        </div>
      </div>
    </header>
  )
}

export default MainHeader