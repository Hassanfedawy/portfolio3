// components/Footer.js

export default function Footer() {
    return (
      <footer className="bg-gray-300 text-black py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo or Brand */}
          <div className="text-lg font-semibold">
            YourBrand
          </div>
  
          {/* Links */}
          <div className="flex space-x-6">
            <a href="#Home" className="hover:text-orange-500 transition">Home</a>
            <a href="#About" className="hover:text-orange-500 transition">About</a>
            <a href="#Services" className="hover:text-orange-500 transition">Services</a>
            <a href="#Contact" className="hover:text-orange-500 transition">Contact</a>
          </div>
  
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.3 2a4.48 4.48 0 00-4.49 4.48v.56A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.326v21.348C0 23.41.59 24 1.326 24h11.495V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.462.099 2.794.142v3.24h-1.917c-1.5 0-1.79.714-1.79 1.76v2.31h3.58l-.467 3.622h-3.113V24h6.105c.734 0 1.326-.59 1.326-1.326V1.326C24 .59 23.41 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H17.9v-5.615c0-1.338-.026-3.06-1.865-3.06-1.867 0-2.154 1.455-2.154 2.956v5.719h-2.553V9h2.451v1.561h.036c.341-.646 1.175-1.324 2.418-1.324 2.584 0 3.061 1.7 3.061 3.917v6.298zM5.337 7.433c-.828 0-1.5-.673-1.5-1.5s.672-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm1.276 13.019H4.06V9h2.553v11.452zM22.225 0H1.771C.791 0 0 .774 0 1.728v20.543C0 23.227.791 24 1.771 24h20.451c.979 0 1.775-.774 1.775-1.728V1.728C24 .774 23.204 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-4 text-center text-black text-sm">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </footer>
    );
  }
  