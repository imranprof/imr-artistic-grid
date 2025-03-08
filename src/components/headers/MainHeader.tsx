'use client'
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import Logo from "@/components/elements/logo/Logo"
import Modal from "@/components/elements/modal/Modal"
import { LoginForm, SignupForm } from "@/components/auth/AuthForms"

const MainHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 300;
      setIsSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={cn("w-full", isSticky && "!fixed top-0 z-40 transition-all bg-white h-[80px] shadow-sm")}>
        <div className="container">
          <div className="header_nav h-[100px] flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowLoginModal(true)}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                Log in
              </button>
              <button
                onClick={() => setShowSignupModal(true)}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-medium"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>

      <Modal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        title="Welcome back!"
      >
        <LoginForm />
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
        <SignupForm />
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