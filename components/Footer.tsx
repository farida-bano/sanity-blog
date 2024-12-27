// components/Footer.tsx
"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Site Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/recipes" className="hover:text-gray-400 transition">
                  Recipes
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <form onSubmit={handleSubscription}>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 w-full mb-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-full w-full hover:bg-yellow-600 transition"
              >
                Subscribe
              </button>
              {message && (
                <p
                  className={`mt-2 text-sm ${
                    message.includes('Thank you')
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">&copy; 2024 Cooking Blog. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
