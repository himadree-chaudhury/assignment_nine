import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
  FaStarHalfAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="mt-10">
      <div className=" bg-black">
        <div className="max-w-screen-2xl p-4 mx-auto  text-white">
          <div className="flex justify-center items-center gap-5 text-3xl py-5">
            <a
              href="https://www.facebook.com/himadree.chaudhury"
              target="blank"
            >
              <FaFacebookF />
            </a>
            <a href="https://x.com/himchy2003" target="blank">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/him_adree_/" target="blank">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@webdev2065" target="blank">
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/himadree-chaudhury/"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/himadree-chaudhury" target="blank">
              <FaGithub />
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 py-5">
            <p className="flex items-center text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </p>
            <h1 className="flex items-center gap-5">
              4.4 rating | 243,593 reviews
              <span className="flex items-center">
                <IoMdStar /> Trustpilot
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-2  md:grid-cols-4 gap-5 font-bold py-5">
            <div className="grid space-y-5">
              <Link>Help Center</Link>
              <Link>Privacy & Cookies Statement</Link>
              <Link>About EcoQuest</Link>
            </div>
            <div className="grid space-y-5">
              <Link>Careers</Link>
              <Link>Sitemap</Link>
              <Link>Supplier Sign Up</Link>
            </div>
            <div className="grid space-y-5">
              <Link>Travel Agents</Link>
              <Link>Become An Affiliate</Link>
              <Link>News</Link>
            </div>
            <div className="space-y-5">
              <Link>Ecoquest Blog</Link>
            </div>
          </div>
          <hr className="text-gray-300" />
          <div className="py-5">
            <div className="flex flex-col lg:flex-row gap-5 items-start justify-between lg:items-center">
              <div className="flex gap-2.5">
                <button className="cursor-pointer">
                  <div className="flex max-w-38 h-9 px-2 gap-1.5 rounded-lg items-center justify-center bg-black text-white dark:text-black dark:bg-white sm:h-11">
                    <svg
                      viewBox="30 336.7 120.9 129.2"
                      className="w-4 sm:w-5.5"
                    >
                      <path
                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                        fill="#FFD400"
                      />
                      <path
                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                        fill="#FF3333"
                      />
                      <path
                        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                        fill="#48FF48"
                      />
                      <path
                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                        fill="#3BCCFF"
                      />
                    </svg>
                    <div>
                      <div className="text-[.4rem] sm:text-[.75rem] text-left">
                        GET IT ON
                      </div>
                      <div className="text-xs font-semibold font-sans -mt-1 sm:text-lg">
                        Google Play
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer">
                  <div className="flex max-w-38 h-9 px-2 gap-1.5 rounded-lg items-center justify-center bg-black text-white dark:text-black dark:bg-white sm:gap-2 sm:h-11">
                    <svg viewBox="0 0 384 512" className="w-4 sm:w-5.5">
                      <path
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <div className="text-[.4rem] sm:text-[.75rem] text-left">
                        Download on the
                      </div>
                      <div className="text-sm font-semibold font-sans -mt-1 sm:text-xl">
                        App Store
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-5 font-bold text-sm leading-tight">
                <Link>Terms & Conditions</Link>
                <Link>How EcoQuest Works</Link>
                <Link>Cookie Constant</Link>
                <h1>&copy; 1997-2025 EcoQuest, Inc</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
