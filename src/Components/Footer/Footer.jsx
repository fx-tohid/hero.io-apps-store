import { Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#061B2E] text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className="w-10" src="/src/assets/logo.png" alt="" />
            <span className="font-semibold tracking-wide">
              HERO.IO
            </span>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <p className="text-sm mb-3 opacity-80">Social Links</p>
            <div className="flex justify-center md:justify-end gap-4">
              <div className="w-8 h-8 rounded-full bg-white text-[#061B2E] flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <Twitter size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-[#061B2E] flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <Linkedin size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-[#061B2E] flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <Facebook size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6"></div>

        {/* Bottom Text */}
        <p className="text-center text-sm opacity-80">
          Copyright © 2025 - All right reserved
        </p>

      </div>
    </footer>
  );
};

export default Footer;