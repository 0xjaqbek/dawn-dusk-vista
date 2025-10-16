import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  links: Array<{
    path: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  onLogout?: () => void;
}

export default function MobileMenu({ links, onLogout }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={cn(
          'p-2 rounded-lg transition-colors',
          'text-foreground hover:bg-muted',
          'focus:outline-none focus:ring-2 focus:ring-primary'
        )}
        aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-card border-b border-border shadow-lg z-50 animate-slide-up">
            <nav className="container py-4">
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-lg',
                        'text-foreground hover:bg-muted transition-colors'
                      )}
                    >
                      {link.icon && (
                        <span className="text-muted-foreground">
                          {link.icon}
                        </span>
                      )}
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  </li>
                ))}
                
                {onLogout && (
                  <li className="pt-2 border-t border-border">
                    <button
                      onClick={() => {
                        onLogout();
                        closeMenu();
                      }}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-3 rounded-lg',
                        'text-critical hover:bg-critical/10 transition-colors'
                      )}
                    >
                      <span className="font-medium">Wyloguj</span>
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
