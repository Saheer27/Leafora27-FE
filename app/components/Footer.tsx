import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-green-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h1 className="text-2xl font-bold">Leafora27</h1>
          <p className="text-gray-300 mt-2">
            Experience nature, comfort, and peace — all in one place.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>📍 Kochi, Kerala, India</p>
          <p>
            <Link href="tel:+917736627497">📞 +91 7736627497</Link>
          </p>
          <p>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=saheerchowki@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ✉ saheerchowki@gmail.com
            </Link>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <Link
              href="https://github.com/Saheer27"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/saheer27/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://instagram.com/saheer_chowki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-300 mt-6 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Leafora27 Resort. All rights reserved.
      </div>
    </footer>
  );
}
