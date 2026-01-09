import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto w-full 'max-w-7xl' p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          
          {/* Brand Logo Section */}
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              {/* Reference to your local image in the public folder */}
              <img 
                src="/swiggy2.png.jpg" 
                className="h-10 me-3 object-contain" 
                alt="Swiggy Logo" 
              />
             <span className="self-center text-2xl font-black tracking-tight text-orange-600">
  SWIGGY
</span>
            </a>
            <p className="mt-4 text-gray-400 text-sm max-w-xs leading-relaxed">
              Order from your favorite restaurants and track them in real-time.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-black text-gray-900 uppercase italic">Company</h2>
              <ul className="text-gray-500 font-medium space-y-4">
                <li><a href="#" className="hover:text-orange-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Swiggy One</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-black text-gray-900 uppercase italic">Contact</h2>
              <ul className="text-gray-500 font-medium space-y-4">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Help & Support</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Partner with us</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Ride with us</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-black text-gray-900 uppercase italic">Legal</h2>
              <ul className="text-gray-500 font-medium space-y-4">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-100 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center font-medium">
            © 2026 <a href="/" className="hover:text-orange-600">Swiggy™</a>. All Rights Reserved.
          </span>
          
          {/* Social Icons */}
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            <SocialIcon d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" />
            <SocialIcon d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" />
            <SocialIcon d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ d }) => (
  <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d={d} clipRule="evenodd" />
    </svg>
  </a>
)

export default Footer