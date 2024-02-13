import NavItem from "./NavItem"

const NavList = ({ list = [] }) => {
    return (
        <ul className="flex flex-col  ml-16 h-[550px]  gap-4 p-5 text-lg font-semibold uppercase ">
            {
                list && list.length ? list.map((listItem, index) => (<NavItem key={index} item={listItem} />)) : null
            }
        </ul>
    )
}

export default NavList
