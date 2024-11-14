import { Home, LayoutDashboard } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-16">
          <div className="flex items-center">
            <ul className="flex space-x-4 mb-0">
              <li>
                <a
                  href="/"
                  className="text-foreground hover:text-primary flex items-center px-3 py-2 rounded-md text-sm font-medium"
                >
                  <Home className="w-4 h-4 mr-2" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="text-foreground hover:text-primary flex items-center px-3 py-2 rounded-md text-sm font-medium"
                >
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  <span>Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
