import { sideBarMenu } from "../constants"
import NavList from "./navbar/NavList"
import { motion } from 'framer-motion'
const Sidebar = ({ open }) => {
    const variants = {
        open: { height: '100vh', opacity: 1 },
        closed: {
            height: 0,
            opacity: 0.1
        }
    };
    return (
        <motion.div
            variants={variants}
            initial="closed"
            animate={open ? "open" : 'closed'}
            transition={{ duration: 0.5, }
            }

            className="bg-gray-100  relative" >
            {
                open ?
                    <NavList list={sideBarMenu} />
                    : null
            }
        </motion.div >
    )
}

export default Sidebar
