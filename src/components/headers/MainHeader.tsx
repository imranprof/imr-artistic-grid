'use client'
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import Logo from "@/components/elements/logo/Logo"
import Modal from "@/components/elements/modal/Modal"
import { LoginForm, SignupForm } from "@/components/auth/AuthForms"
import { Search } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import UserMenu from "../menu/UserMenu"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

const MainHeader = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { user, logoutUser, isAuthenticated, loading } = useAuth();


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };


  return (
    <>
      <header className={cn("sticky top-0 z-50 w-full border-b bg-background")}>
        <div className="container mx-auto px-4">
          <div className={cn(
            "header_nav flex items-center justify-between h-20"
          )}>
            {/* Logo */}
            <div className="flex-shrink-0 mr-4 flex items-center">
              <Link href={"/"}><Logo /></Link>
              <Link
                href="/explore"
                className={cn(buttonVariants({ variant: "ghost" }), "rounded-full min-w-[60px] h-12 text-[16px] font-bold")}
              >
                Explore
              </Link>
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
              loading ? (
                <div className="flex items-center  space-x-2 min-w-[150px]">
                  <Skeleton className="h-[35px] w-[35px] rounded-full" />
                  <Skeleton className="h-[30px] w-[70px] rounded-full" />
                </div>
              ) : (
                isAuthenticated ? <div className="min-w-[150px] flex justify-start"><UserMenu user={user} onLogout={logoutUser} /></div> :

                  <div className="flex items-center space-x-2 min-w-[150px]">
                    <button
                      onClick={() => setShowLoginModal(true)}
                      className="px-3 py-2  bg-gray-200 rounded-full hover:bg-gray-300 font-medium text-sm whitespace-nowrap"
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
              )
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
        <LoginForm setShowLoginModal={setShowLoginModal} />
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
        <SignupForm setShowSignupModal={setShowSignupModal} />
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