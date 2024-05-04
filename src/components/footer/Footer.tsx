const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full sm:w-1/2 md:w-1/3 px-4">
            <h1 className="self-center text-2xl text-primary font-semibold whitespace-nowrap">
              Job<span className="text-[#eb7f13]">Hunt</span>
            </h1>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6"></div>
          </div>
          <div className="w-full sm:w-1/2 md:w-2/3 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full sm:w-1/2 md:w-1/3 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-[20%] px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <a href="#" className="text-blueGray-500 hover:text-blueGray-800">
                Amirkhoda
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
