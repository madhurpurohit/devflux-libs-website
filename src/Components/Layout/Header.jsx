import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReactMenuOpen, setIsReactMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close react submenu when main menu is closed
    if (isOpen) {
      setIsReactMenuOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsReactMenuOpen(false);
  };

  const navItems = [
    { name: "home", href: "/" },
    { name: "html", href: "/html" },
    { name: "css", href: "/css" },
    { name: "tailwindcss", href: "/tailwindcss" },
    { name: "javascript", href: "/javascript" },
    {
      name: "react",
      href: "/react",
      subItems: [
        { name: "Core React", href: "/react" },
        { name: "React Router", href: "/react/router" },
        { name: "Axios", href: "/react/axios" },
        { name: "ReactQuery", href: "/react/reactquery" },
        { name: "ReduxToolkit", href: "/react/rtk" },
      ],
    },
    { name: "Git", href: "/git" },
  ];

  return (
    <>
      {/* Main Navigation Bar (Header) */}
      <header className="fixed top-0 right-0 left-0 z-50 bg-white/80 shadow-sm backdrop-blur-md dark:bg-black/20">
        <div className="mx-auto flex max-w-[1460px] items-center justify-between p-6">
          {/* Logo/Brand Name */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-slate-900 dark:text-white"
          >
            DevFlux Libs
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.name} className="group relative">
                  <NavLink
                    to={item.href}
                    className="flex items-center gap-1 font-medium tracking-widest text-slate-800 uppercase transition-colors duration-300 hover:text-slate-900 dark:text-white dark:hover:text-gray-300"
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </NavLink>
                  {/* Dropdown Menu */}
                  <div className="invisible absolute top-full left-1/2 -translate-x-1/2 scale-95 transform pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
                    <div className="w-48 rounded-lg border border-slate-900/10 bg-white/80 p-2 shadow-lg backdrop-blur-lg dark:border-white/20 dark:bg-slate-900/75">
                      {item.subItems.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.href}
                          className="block w-full rounded-md px-4 py-2 text-left text-sm font-medium text-slate-800 transition-colors hover:bg-slate-900/10 dark:text-white dark:hover:bg-white/20"
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="font-medium tracking-widest text-slate-800 uppercase transition-colors duration-300 hover:text-slate-900 dark:text-white dark:hover:text-gray-300"
                >
                  {item.name}
                </NavLink>
              ),
            )}
          </nav>
        </div>
      </header>

      {/* --- Mobile Menu (Sidebar) --- */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-[100] text-slate-900 focus:outline-none lg:hidden dark:text-white"
        aria-label="Toggle menu"
      >
        {!isOpen ? <Menu size={30} /> : <X size={30} />}
      </button>

      {/* Overlay effect */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 transform transition-transform duration-500 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} border-l border-slate-900/10 bg-white shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-white/10`}
      >
        {/* Added h-full and overflow-y-auto to make the content scrollable */}
        <div className="h-full overflow-y-auto p-6 pt-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
            Menu
          </h2>
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.name}>
                  <button
                    onClick={() => setIsReactMenuOpen(!isReactMenuOpen)}
                    className="flex w-full transform items-center justify-between rounded-lg p-4 text-[15px] font-medium tracking-widest text-slate-800 uppercase transition-all duration-200 ease-in-out hover:translate-x-2 hover:bg-slate-900/10 sm:text-lg dark:text-white dark:hover:bg-white/20"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${isReactMenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isReactMenuOpen && (
                    <div className="flex flex-col space-y-2 pt-2 pl-6">
                      {item.subItems.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.href}
                          onClick={closeMobileMenu}
                          className="transform rounded-lg p-3 text-sm font-medium tracking-wider text-slate-700/80 uppercase transition-all duration-200 ease-in-out hover:translate-x-2 hover:bg-slate-900/10 dark:text-white/80 dark:hover:bg-white/20"
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className="transform rounded-lg p-4 text-[15px] font-medium tracking-widest text-slate-800 uppercase transition-all duration-200 ease-in-out hover:translate-x-2 hover:bg-slate-900/10 sm:text-lg dark:text-white dark:hover:bg-white/20"
                >
                  {item.name}
                </NavLink>
              ),
            )}
          </nav>
        </div>
      </aside>
    </>
  );
};
