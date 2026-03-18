import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, CreditCard, Activity, 
  Settings, LogOut, Bell, Search, Menu, X
} from 'lucide-react';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Customers', path: '/customers', icon: Users },
    { name: 'Risk Engine', path: '/risk', icon: Activity },
    { name: 'Payments', path: '/payments', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-paper flex font-sans text-ink">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white border-r border-line flex flex-col
        transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-line flex justify-between items-center">
          <Link to="/" className="font-display font-bold text-2xl tracking-tighter text-ink hover:opacity-80 transition-opacity">RETAINIQ</Link>
          <button 
            className="lg:hidden p-2 text-ink-muted hover:text-ink"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.name}
                to={item.path} 
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors font-medium ${
                  isActive 
                    ? 'bg-paper text-brand' 
                    : 'text-ink-muted hover:text-ink hover:bg-paper'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-line space-y-1">
          <Link 
            to="/settings" 
            onClick={() => setIsSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors font-medium ${
              location.pathname === '/settings' ? 'bg-paper text-brand' : 'text-ink-muted hover:text-ink hover:bg-paper'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
          <Link to="/" className="flex items-center gap-3 px-4 py-2.5 text-ink-muted hover:text-ink hover:bg-paper rounded-lg transition-colors font-medium">
            <LogOut className="w-5 h-5" />
            <span>Log out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-line flex items-center justify-between px-4 lg:px-8 shrink-0">
          <div className="flex items-center gap-4 flex-1 lg:w-96 lg:flex-none">
            <button 
              className="lg:hidden p-2 text-ink-muted hover:text-ink"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
              <input 
                type="text" 
                placeholder="Search customers, metrics..." 
                className="w-full pl-9 pr-4 py-1.5 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <button className="relative p-2 text-ink-muted hover:text-ink transition-colors cursor-pointer hidden sm:block">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 sm:pl-6 sm:border-l border-line">
              <div className="w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center font-medium text-sm shrink-0">
                JD
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-medium">Jane Doe</div>
                <div className="text-xs text-ink-muted">Admin</div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
};
