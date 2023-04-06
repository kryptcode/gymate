import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { UserIcon, Bars3Icon, ChartBarIcon, PresentationChartBarIcon, PlusIcon } from '@heroicons/react/24/outline'

const styles = {
    navLinks: 'hover:text-[#ff0336] font-bold '
}

const Header = () => {
  return (
    <div className='sticky top-0 z-30 h-[15vh] flex justify-center bg-black text-white '>
        <div className='w-[94%] mx-auto flex justify-between items-center '>
            <div>
                <img src={logo} alt="" />
            </div>

            <div className='hidden md:flex space-x-4'>
                <div className={styles.navLinks}><Link to='/'>Home</Link></div>
                <div className={styles.navLinks}><Link to='/'>About</Link></div>
                <div className={styles.navLinks}><Link to='/'>Gallery</Link></div>
                <div className={styles.navLinks}><Link to='/'>Schedule</Link></div>
                <div className={styles.navLinks}><Link to='/'>Blog</Link></div>
                <div className={styles.navLinks}><Link to='/'>Pricing</Link></div>
                <div className={styles.navLinks}><Link to='/'>Classes</Link></div>
                <div className={styles.navLinks}><Link to='/'>Contact</Link></div>
            </div>

            

            <div className='flex items-center space-x-4'>
                <div className='md:hidden'>
                    <Bars3Icon className='h-6 hover:text-[#ff0336] cursor-pointer' />
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
    </div>
  )
}

export default Header