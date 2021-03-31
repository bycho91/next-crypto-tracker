import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full bg-[#f3f4ed] h-[80px] flex items-center">
      <div className="container max-w-[1440px] flex justify-between mx-auto items-center">
        <div className="logo">
          <Link href="/">
            <a>
              <h1 className="text-5xl text-[#424642] tracking-tighter font-bold">
                Crypto<span className="text-[#c06014] font-normal">DB</span>
              </h1>
            </a>
          </Link>
        </div>

        <div className="links flex justify-between w-1/5 text-[#424642] text-xl font-bold">
          <Link href="/">
            <a className="hover:text-[#c06014]">Home</a>
          </Link>
          <Link href="https://github.com/">
            <a className="hover:text-[#c06014]" target="__blank">
              Github
            </a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-[#c06014]">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
