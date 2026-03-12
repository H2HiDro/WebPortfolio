import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Về tôi', href: '#about' },
    { name: 'Chuyên môn', href: '#expertise' },
    { name: 'Quy trình', href: '#process' },
    { name: 'Dự án', href: '#case-study' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a56db]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-white tracking-wider">
            HH
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-orange-300 transition-colors font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors tracking-wide shadow-lg"
            >
              LIÊN HỆ
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a56db] border-t border-white/20">
          <nav className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white hover:text-orange-300 transition-colors font-medium tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors tracking-wide text-center shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              LIÊN HỆ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}