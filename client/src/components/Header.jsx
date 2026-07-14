import React, { useEffect, useState } from 'react'
import { Link, useLocation,useNavigate } from "react-router-dom"
import { assets } from "../assets/data"
import Navbar from './Navbar'
import { useUser, useClerk, UserButton } from "@clerk/clerk-react"

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const [active, setActive] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const location = useLocation()
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate()

  const BookingIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-scroll-text-icon lucide-scroll-text"
    >
      <path d="M15 12h-5" />
      <path d="M15 8h-5" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2z" />
    </svg>
  )

  const isHomePage = location.pathname.endsWith('/')

  const toggleMenu = () => setMenuOpened(prev => !prev)

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 10)

      if (window.scrollY > 10) {
        setMenuOpened(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [location.pathname])

  return (
    <header
      className={`${active ? "bg-white shadow-sm py-2" : "py-3"} ${!isHomePage && "bg-white"} fixed top-0 w-full left-0 right-0 z-50 transition-all duration-200`}
    >
      <div className='max-padd-container'>

        {/* CONTAINER */}
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <div className="flex flex-1">
            <Link to={"/"}>
              <img
                src={assets.logoImg}
                alt="logoImg"
                width={88}
                className="h-7"
              />
              <span className="text-textColor uppercase text-xs font-extrabold tracking-[6px] relative bottom-1">
                Shreenu Car Rentals
              </span>
            </Link>
          </div>

          {/* NAVBAR */}
          <Navbar
            setMenuOpened={setMenuOpened}
            containerStyles={
              menuOpened
                ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 rounded-xl z-5"
                : "hidden lg:flex gap-x-5 xl:gap-x-1 text-sm font-semibold p-1"
            }
          />

          {/* Buttons & SearchBar */}
          <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">

            {/* SearchBar */}
            <div className="relative hidden xl:flex items-center">

              <div
                className={`transition-all duration-300 ease-in-out ring-1 ring-slate-900/10 bg-white rounded-full overflow-hidden ${
                  showSearch
                    ? "w-[266px] opacity-100 px-4 py-2"
                    : "w-11 opacity-0 px-0 py-0"
                }`}
              >
                <input
                  type="text"
                  placeholder="Type here.."
                  className="w-full text-sm outline-none pr-10 placeholder:text-grey-400"
                />
              </div>

              <div
                onClick={() => setShowSearch(prev => !prev)}
                className="absolute right-0 ring-1 ring-slate-900/10 bg-white p-[8px] rounded-full cursor-pointer z-10"
              >
                <img src={assets.search} alt="" />
              </div>

            </div>

            {/* Mobile Menu Button */}
            {menuOpened ? (
              <img
                onClick={() => setMenuOpened(false)}
                src={assets.close}
                alt=""
                className="lg:hidden cursor-pointer text-xl"
              />
            ) : (
              <img
                onClick={() => setMenuOpened(true)}
                src={assets.menu}
                alt=""
                className="lg:hidden cursor-pointer text-xl"
              />
            )}

            <div className='group'>
              {user ? (
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label='my Bookings'
                      labelIcon={<BookingIcon />}
                      onClick={() => navigate('/my-bookings')}
                    />
                  </UserButton.MenuItems>
                  </UserButton>
              ) : (
                <button
                  onClick={openSignIn}
                  className='btn-solid bg-black flexcenter gap-2 rounded-full text-sm font-semibold text-white group-hover:bg-gray-800 transition-colors duration-300'
                >
                  login
                  <img src={assets.user} alt="userIcon" className='invert' />
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header