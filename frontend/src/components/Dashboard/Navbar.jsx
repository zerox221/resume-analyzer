import React, { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { userContext } from "../../context/UserContext";
import { path } from "framer-motion/client";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {user} = useContext(userContext);

  const navItems = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "History",
      path: "/history",
    },
    {
      name : "Setting",
      path : "/setting"
    }
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#f8f9ff]/90 backdrop-blur-md border-b border-gray-200">
        <div className="h-16 px-5 flex items-center justify-between">

          <h1 className="text-lg md:text-xl font-bold text-[#1f2937]">
            Resume Analyzer
          </h1>

          <div className="hidden md:flex items-center gap-3">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="h-10 w-10 bg-gray-400 rounded-full">
              <img className="h-full w-full" src={user?.profile}/>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.25,
              }}
              className="fixed top-16 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 md:hidden"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-5 py-4 transition ${
                        isActive
                          ? "text-indigo-600 font-semibold bg-indigo-50"
                          : "text-gray-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;