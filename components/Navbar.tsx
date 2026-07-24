import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="ArcticFix"
            width={55}
            height={55}
          />

          <div>
            <h1 className="font-bold text-xl text-blue-700">
              ArcticFix
            </h1>

            <p className="text-xs text-gray-500">
              Engineering Solutions
            </p>

          </div>
        </div>

        <nav className="hidden md:flex gap-8 font-medium">

  <a href="#">Home</a>

  <a href="#about">About</a>

  <a href="#services">Services</a>

  <a href="#projects">Projects</a>

  <a href="#contact">Contact</a>

</nav>

      </div>
    </header>
  );
}