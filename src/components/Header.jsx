import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { UserIcon, Bars3Icon, ChartBarIcon, PresentationChartBarIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const styles = {
    navLinks: 'hover:text-[#ff0336] font-bold '
}

const Header = () => {
    const [modal, setModal] = useState(false)


  return (
    <div className={`${modal ? 'h-screen space-y-16 justify-start pt-8' : 'h-[15vh] justify-center'} sticky top-0  z-30 flex flex-col  bg-black text-white `}>
        <div className='w-[94%] mx-auto flex justify-between items-center '>
            <div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>

            <div className='hidden md:flex space-x-4'>
                <div className={styles.navLinks}><Link to='/'>Home</Link></div>
                <div className={styles.navLinks}><Link to='/about'>About</Link></div>
                <div className={styles.navLinks}><Link to='/blog'>Blog</Link></div>
                <div className={styles.navLinks}><Link to='/pricing'>Pricing</Link></div>
                <div className={styles.navLinks}><Link to='/classes'>Classes</Link></div>
                <div className={styles.navLinks}><Link to='/contact'>Contact</Link></div>
            </div>

            

            <div className='flex items-center space-x-4'>
                <div className='md:hidden'>
                    <Bars3Icon className='h-6 hover:text-[#ff0336] cursor-pointer' onClick={() => setModal(!modal)} />
                </div>
                <UserIcon className='h-7 font-bold hover:text-[#ff0336] cursor-pointer' />
                <PresentationChartBarIcon className='h-7 hover:text-[#ff0336] cursor-pointer' />
                <div className='hidden md:flex border-2 border-gray-700 cursor-pointer rounded-md items-center p-1 space-x-2'>
                    <div className='bg-[#ff0336] p-1 rounded-md cursor-pointer'>
                    <PlusIcon className='h-5 hover:animate-spin' />
                    </div>
                    <div className='py-1.5 px-3 font-semibold text-sm'>
                        JOIN CLASS NOW
                    </div>
                </div>
            </div> 

        </div>

        {
            modal && (
                <div className='text-center text-3xl font-semibold space-y-6 '>
                    <div className={styles.navLinks}><Link to='/'>Home</Link></div>
                    <div className={styles.navLinks}><Link to='/about'>About</Link></div>
                    <div className={styles.navLinks}><Link to='/blog'>Blog</Link></div>
                    <div className={styles.navLinks}><Link to='/pricing'>Pricing</Link></div>
                    <div className={styles.navLinks}><Link to='/classes'>Classes</Link></div>
                    <div className={styles.navLinks}><Link to='/contact'>Contact</Link></div>
                </div>
            )
        }
    </div>
  )
}

export default Header