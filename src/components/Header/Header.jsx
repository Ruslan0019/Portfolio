import Link from "next/link";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-darkGray shadow-2xl pt-2 pb-3 border-b-2 border-border md:pt-3 md:pb-6">
        <div className="px-6 lg:px-8 xl:px-165 ">
          <nav className="flex justify-between items-center">
            <Link
              href={`/`}
              title="Home"
              alt="Home"
              className=" text-[#F5F5F0] text-3xl md:text-45px font-bold font-MAZIUS-Italic italic transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased"
            >
              Afanasiev Ruslan
            </Link>
            <Link
              href={`/contact
                `}
              title="Home"
              alt="Home"
              className=" text-[#F5F5F0] text-3xl md:text-45px font-bold font-MAZIUS-Italic italic transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
