import { useState } from 'react';
import logo from '../../assets/logo.png'
import Sidebar from '../Sidebar'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { motion } from 'framer-motion';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <div>

            <nav className="flex items-center relative overflow-hidden z-10 bg-white p-5 justify-between">
                <div className='text-lg uppercase text-blue-800 font-bold'>
                    <motion.div
                        initial={{ y: -500, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        onClick={() => setOpenNav(!openNav)} className='flex  items-center gap-4'>
                        {
                            !openNav ?
                                <GiHamburgerMenu className='h-10 w-10 cursor-pointer' />
                                :
                                <RxCross1 className='h-10 w-10 cursor-pointer' />
                        }
                        {!openNav ? 'Menu' : 'Close'}
                    </motion.div>
                </div>
                <div>
                    <img src={logo} alt="logo" width={230} />
                </div>
                <div>
                    <h1 className="text-lg font-semibold tracking-widest uppercase text-red-500">Book a tour</h1>
                </div>
            </nav>
            <Sidebar open={openNav} />
        </div>

    )
}

export default Navbar
