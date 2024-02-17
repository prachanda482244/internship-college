import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Hero = () => {

    const imageUrls = [
        "https://images.wondershare.com/virtulook/articles/random-background-generator-13.jpg",

        "https://images.unsplash.com/photo-1475115996703-5200b5adbc09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNDA3NTl8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1452215199360-c16ba37005fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwxNDA3NTl8fGVufDB8fHx8fA%3D%3D"

    ]
    return (
        <div className="relative">
            <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} >
                {
                    imageUrls.map((url) => (
                        <div key={url} className=" min-h-[80vh]" >
                            <img
                                style={{
                                    backgroundImage: `url(${url}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}

                                className="w-full h-[80vh] opacity-80"
                            />
                        </div>
                    ))
                }
            </Carousel >
            <div className="absolute w-[100vw] top-0">
                <div className="flex p-5 text-4xl  max-w-[80vw] mx-auto text-white  justify-between">
                    <div>
                        <h1 className="font-semibold">-salesian College</h1>
                    </div>
                    <div className="flex items-center gap-5">
                        <IoCallOutline />
                        <CiLocationOn />
                        <CiSearch />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero

