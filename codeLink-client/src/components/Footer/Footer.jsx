import "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {/* Section 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <Link to="about" className="hover:text-emerald-500 transition-all duration-300 ease-in-out">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="careers" className="hover:text-emerald-500 transition-all duration-300 ease-in-out">
                Careers
              </Link>
            </li>
            <li className="mb-2">
              <Link to="blog" className="hover:text-emerald-500 transition-all duration-300 ease-in-out">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2">
              <Link to="faq" className="hover:text-emerald-500 transition-all duration-300 ease-in-out">
                FAQs
              </Link>
            </li>
            <li className="mb-2">
              <Link to="contact" className="hover:text-emerald-500 transition-all duration-300 ease-in-out">
                Contact Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="help" className="hover:text-emerald-500 transition-all duration-300 ease-in-out">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#facebook" className="hover:text-emerald-500 transition-all duration-300 ease-in-out">
                Facebook
              </a>
            </li>
            <li>
              <a href="#twitter" className="hover:text-emerald-500 transition-all duration-300 ease-in-out">
                Twitter
              </a>
            </li>
            <li>
              <a href="#instagram" className="hover:text-emerald-500 transition-all duration-300 ease-in-out">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded mb-4 text-black"
            />
            <button
              type="submit"
              className="bg-emerald-400 text-gray-800 px-4 py-2 rounded hover:bg-emerald-500 transition-all duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} CodeLink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
