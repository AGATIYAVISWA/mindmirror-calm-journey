
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Brain, Lightbulb, MessageCircle, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/journal', icon: BookOpen, label: 'Journal' },
    { path: '/emotions', icon: Brain, label: 'Emotions' },
    { path: '/tips', icon: Lightbulb, label: 'Tips' },
    { path: '/chatbot', icon: MessageCircle, label: 'Chatbot' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 smooth-transition hover:scale-105 hover-glow">
            <div className="w-10 h-10 bg-gradient-to-r from-vibrant-purple via-coral-pink to-electric-blue rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-vibrant-purple to-coral-pink bg-clip-text text-transparent">
              MindMirror
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl smooth-transition hover-glow ${
                  location.pathname === path
                    ? 'bg-gradient-to-r from-vibrant-purple/20 to-coral-pink/20 text-vibrant-purple shadow-lg'
                    : 'hover:bg-gradient-to-r hover:from-vibrant-purple/10 hover:to-coral-pink/10 text-gray-600 hover:text-vibrant-purple'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl hover:bg-gradient-to-r hover:from-vibrant-purple/10 hover:to-coral-pink/10 smooth-transition hover-glow"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile menu */}
          <div className="md:hidden fixed bottom-6 left-4 right-4 glass-card rounded-2xl p-3 stunning-shadow">
            <div className="flex justify-around">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex flex-col items-center p-3 rounded-xl smooth-transition ${
                    location.pathname === path
                      ? 'bg-gradient-to-r from-vibrant-purple/20 to-coral-pink/20 text-vibrant-purple'
                      : 'text-gray-600 hover:text-vibrant-purple hover:bg-gradient-to-r hover:from-vibrant-purple/10 hover:to-coral-pink/10'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-xs mt-1 font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
