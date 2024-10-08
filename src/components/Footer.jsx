import Logo from './Logo'
import { animateScroll } from 'react-scroll'
import { IoIosArrowUp } from 'react-icons/io'
import about from '../data/about.json'
import version from '../version.js'
import { FaGithub } from 'react-icons/fa6'
import { API_BASE_URL } from '../data/constants.js'

const Footer = () => {
    return (
        <footer className="bg-white pt-10 md:pt-14 lg:pt-5 pb-5 relative">
            <div className="container">
                <div className="text-center lg:text-left lg:flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <Logo chain={false} className={'pr-4'} />
                        <p>
                            {about.name} - <a href={API_BASE_URL} target="_blank">Free URL Shortener</a>
                            <a
                                href="https://github.com/MaxSmile/2ul.top"
                                target="_blank"
                            >
                                <FaGithub className="inline ml-2" />&nbsp;<span 
                                    className="text-xs text-gray-500 hover:underline">
                                    v.{version}</span>
                            </a>
                        </p>
                    </div>

                    <p className="text-gray-500 mt-4 lg:mt-0">
                        &copy;2012-{new Date().getFullYear()}{' '}
                        <a
                            href="https://vasilkoff.com"
                            target="_blank"
                            className="hover:underline"
                        >
                            Vasilkoff Ltd - Web Development and Design
                        </a>
                    </p>
                </div>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={() => animateScroll.scrollToTop()}
                className="absolute left-1/2 -top-[35px] -translate-x-1/2 bg-white w-14 md:w-[70px] h-14 md:h-[70px] rounded-full text-center shadow-scroll-top"
            >
                <IoIosArrowUp className="inline text-2xl" />
            </button>
        </footer>
    )
}

export default Footer
