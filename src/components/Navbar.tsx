
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 smooth-transition hover:scale-105">
            <div className="w-8 h-8 bg-gradient-to-r from-calm-blue to-soft-lavender rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-semibold text-primary-foreground">MindMirror</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg smooth-transition ${
                  location.pathname === path
                    ? 'bg-calm-blue/20 text-primary-foreground'
                    : 'hover:bg-calm-blue/10 text-muted-foreground hover:text-primary-foreground'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-calm-blue/10 smooth-transition"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu */}
          <div className="md:hidden fixed bottom-4 left-4 right-4 glass-card rounded-2xl p-2">
            <div className="flex justify-around">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex flex-col items-center p-2 rounded-lg smooth-transition ${
                    location.pathname === path
                      ? 'bg-calm-blue/20 text-primary-foreground'
                      : 'text-muted-foreground hover:text-primary-foreground'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-xs mt-1">{label}</span>
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
