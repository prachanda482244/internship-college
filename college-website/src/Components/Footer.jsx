import { CiFacebook, CiTwitter, CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    const footerLinks = [
        " ENROL NOW",
        "FEES",
        "PROSPECTUS",
        "LEARNING",
        "EMPLOYMENT",
        "TERM DATES",
        "POLICIES",
        "CHILD SAFETY",
        "CONTACT US",
        "COMPLAINTS FORM",
    ]
    const icons = [
        {
            id: 1,
            name: <CiFacebook />,
        }, {
            id: 2,
            name: <CiTwitter />,
        },
        {
            id: 3,
            name: <FaLinkedinIn />,
        },
        {
            id: 4,
            name: <FaInstagram />,
        }


    ]
    return (
        <footer className="p-10 md:p-28 bg-[#1a2d59] text-slate-100 font-semibold">
            <div className="flex flex-col gap-20 ">
                <div className="flex flex-col gap-3 ">
                    <h1 className="tracking-widest text-2xl hidden md:block uppercase">Quick Links</h1>
                    <ul className="flex items-center flex-col md:flex-row  gap-4">
                        {footerLinks.map((link, i) => (
                            <li className="hover:underline font-light underline-offset-8 cursor-pointer" key={i}>{link}</li>
                        ))}

                    </ul>
                </div>

                <div className="flex items-center md:items-start flex-col gap-3 ">
                    <h1 className="tracking-widest text-2xl uppercase">Follow us</h1>
                    <ul className="flex  items-center gap-6">
                        {icons.map((icon) => (
                            <li className="text-xl bg-white p-2 hover:bg-slate-500 rounded-full text-blue-900" key={icon.id}>{icon.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row  items-center  gap-2">
                    <p className=" md:w-1/3  text-slate-500">
                        The care, safety and wellbeing of all children and vulnerable people is a core and fundamental responsibility for our community.
                    </p>
                    <p className="md:w-1/3 text-slate-500">
                        We acknowledge the Traditional Owners of the land on which our College resides and pay our respects to their Elders, past, present and future.
                    </p>
                    <span className="text-sm md:w-1/2">
                        © Salesian College Chadstone 2024 | Terms & Privacy | Website by IGNITE</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
