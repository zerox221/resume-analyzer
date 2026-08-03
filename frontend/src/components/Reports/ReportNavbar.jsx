import { Menu, X } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { path } from "framer-motion/client";

const ReportNavbar = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Overview",
      path: `/report/${id}/overview`,
    },
    {
      name: "Questions",
      path: `/report/${id}/questions`,
    },
    {
      name: "Skill Gap",
      path: `/report/${id}/skillgap`,
    },
    {
      name : 'Dasboard',
      path:'/'
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center py-4 px-7 bg-white border-b">
        <div className="text-xl md:text-xl font-bold text-[#1f2937]">
          Resume Analyzer
        </div>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {links.map((item) => (
            <NavLink key={item.name} to={item.path}>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="md:hidden z-50"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
              onClick={() => setOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-xl overflow-hidden md:hidden z-50"
            >
              {links.map((item, index) => (
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
                    className="block px-5 py-4 border-b last:border-none hover:bg-indigo-50 transition-colors"
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

export default ReportNavbar;