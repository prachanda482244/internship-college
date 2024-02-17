import { Link, NavLink } from "react-router-dom"
import NavList from "./NavList"
import { useState } from "react"

const NavItem = ({ item }) => {
    const [showList, setShowList] = useState(false)
    const handleMouseEnter = () => {
        setShowList(true)
    }
    const handleMouseLeave = () => {
        setShowList(false)
    }
    return (
        <li
            className="px-10 py-2 text-2xl text-blue-800 w-80 hover:text-red-500 cursor-pointer tracking-wider  "
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={handleMouseLeave}
        >
            {item.title} {item.childrens ? <span>&gt;</span> : null}
            <div
                onMouseLeave={() => setShowList(false)}

                className="absolute pl-10 top-0 w-full  left-60">

                {
                    item && item.childrens && item.childrens.length > 0 && showList ? (<NavList list={item.childrens} />) : null
                }
            </div>
        </li>


    )
}

export default NavItem
