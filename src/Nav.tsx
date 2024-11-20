import { Home, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-16">
          <div className="flex items-center">
            <ul className="flex space-x-4 mb-0">
              <li>
                <Link
                  to="/"
                  className="text-foreground hover:text-primary flex items-center px-3 py-2 rounded-md text-sm font-medium"
                >
                  <Home className="w-4 h-4 mr-2" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-foreground hover:text-primary flex items-center px-3 py-2 rounded-md text-sm font-medium"
                >
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  <span>Dashboard</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
