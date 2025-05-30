'use client'
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import Logo from "@/components/elements/logo/Logo"
import Modal from "@/components/elements/modal/Modal"
import { LoginForm, SignupForm } from "@/components/auth/AuthForms"
import { Search } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import UserMenu from "../menu/UserMenu"

const MainHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const {user, logoutUser} = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 300;
      setIsSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <header className={cn("w-full", isSticky && "!fixed top-0 z-40 transition-all bg-white h-[80px] shadow-sm")}>
        <div className="container mx-auto px-4">
          <div className={cn(
            "header_nav flex items-center justify-between",
            isSticky ? "h-[80px]" : "h-[100px]"
          )}>
            {/* Logo */}
            <div className="flex-shrink-0 mr-4">
              <Logo />
            </div>
            
            {/* Search bar - takes only needed space */}
            <div className="hidden md:block flex-grow max-w-md mx-4">
              <form onSubmit={handleSearch} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-gray-100 pl-9 pr-3 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
            
            
            {
              user ? <UserMenu user={user} onLogout={logoutUser}/> :             
              
              <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowLoginModal(true)}
                className="px-3 py-2 text-gray-700 hover:text-gray-900 font-medium text-sm whitespace-nowrap"
              >
                Log in
              </button>
              <button
                onClick={() => setShowSignupModal(true)}
                className="px-3 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-medium text-sm whitespace-nowrap"
              >
                Sign up
              </button>
            </div>
            }
          </div>
        </div>
        
        {/* Mobile search bar - only visible on small screens */}
        <div className="md:hidden px-4 pb-3">
          <form onSubmit={handleSearch} className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 pl-9 pr-3 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      </header>

      <Modal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        title="Welcome back!"
      >
        <LoginForm setShowLoginModal={setShowLoginModal}/>
        <p className="text-center mt-4 text-sm text-gray-600">
          Not on IMR Art yet?{' '}
          <button
            className="text-red-500 hover:text-red-600 font-medium"
            onClick={() => {
              setShowLoginModal(false);
              setShowSignupModal(true);
            }}
          >
            Sign up
          </button>
        </p>
      </Modal>

      <Modal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        title="Welcome to IMR Art"
      >
        <SignupForm setShowSignupModal={setShowSignupModal}/>
        <p className="text-center mt-4 text-sm text-gray-600">
          Already a member?{' '}
          <button
            className="text-red-500 hover:text-red-600 font-medium"
            onClick={() => {
              setShowSignupModal(false);
              setShowLoginModal(true);
            }}
          >
            Log in
          </button>
        </p>
      </Modal>
    </>
  )
}

export default MainHeader