import { useState } from "react";
import {
  FaCaretDown,
  FaHome,
  FaCog,
  FaQuestionCircle,
  FaUser,
  FaCommentAlt,
  FaLock,
  FaAddressBook,
  FaGlobeAsia,
  FaSignOutAlt,
  FaEnvelope,
  FaExclamationCircle,
  FaArrowLeft,
} from "react-icons/fa";

export default function DropdownMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <nav className=" z-20  transform ">
      <div className="cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
        <svg
          className="w-4 h-4 md:w-6 md:h-6 transform transition-transform duration-300 hover:scale-110 will-change-transform antialiased"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.405 2.09h26.703M2.405 20.87h26.703M2.405 11.48h26.703"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showMenu && (
        <>
          <div className="absolute  left-[-325px] md:left-[-375px] top-7 w-[366px] md:w-[400px] bg-[#363636] rounded-3xl overflow-hidden transition-all duration-300">
            {activeMenu === "main" && (
              <ul className="p-3 space-y-1 z-50">
                <MenuItem icon={<FaHome />} label="Home" />
                <MenuItem
                  icon={<FaCog />}
                  label="Settings & privacy"
                  rightIcon
                  onClick={() => setActiveMenu("settings")}
                />
                <MenuItem
                  icon={<FaQuestionCircle />}
                  label="Help & support"
                  rightIcon
                  onClick={() => setActiveMenu("help")}
                />
                <MenuItem icon={<FaUser />} label="About us" />
                <MenuItem icon={<FaCommentAlt />} label="Feedback" />
              </ul>
            )}

            {activeMenu === "settings" && (
              <ul className="p-3 space-y-1">
                <BackButton
                  onClick={() => setActiveMenu("main")}
                  label="Settings & privacy"
                />
                <MenuItem icon={<FaUser />} label="Personal info" />
                <MenuItem icon={<FaLock />} label="Password" />
                <MenuItem icon={<FaAddressBook />} label="Activity log" />
                <MenuItem icon={<FaGlobeAsia />} label="Languages" />
                <MenuItem icon={<FaSignOutAlt />} label="Log out" />
              </ul>
            )}

            {activeMenu === "help" && (
              <ul className="p-3 space-y-1">
                <BackButton
                  onClick={() => setActiveMenu("main")}
                  label="Help & support"
                />
                <MenuItem icon={<FaQuestionCircle />} label="Help centre" />
                <MenuItem icon={<FaEnvelope />} label="Support Inbox" />
                <MenuItem icon={<FaCommentAlt />} label="Send feedback" />
                <MenuItem
                  icon={<FaExclamationCircle />}
                  label="Report problem"
                />
              </ul>
            )}
          </div>
        </>
      )}
    </nav>
  );
}

function MenuItem({ icon, label, rightIcon, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="flex items-center w-full px-3 py-2 text-[#F5F5F0] rounded-md hover:bg-[#3A3B3C] transition"
      >
        <div className="w-10 h-10 bg-white/10 flex justify-center items-center rounded-full mr-3">
          {icon}
        </div>
        <span className="flex-grow text-left">{label}</span>
        {rightIcon && <FaCaretDown size={20} />}
      </button>
    </li>
  );
}

function BackButton({ onClick, label }) {
  return (
    <li
      className="flex items-center px-3 py-2 text-[#F5F5F0] text-lg font-medium cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft className="mr-3" />
      {label}
    </li>
  );
}
