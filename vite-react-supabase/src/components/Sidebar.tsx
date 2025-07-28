interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'user-verification', label: 'User Verification' },
    { id: 'user-management', label: 'User Management' },
    { id: 'reports', label: 'Reports & Analytics' },
    { id: 'settings', label: 'Settings' },
  ]

  return (
    <div className="w-80 bg-blue-200 h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-blue-300">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-800">Proactive</span>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 py-6">
        <div className="px-6 mb-4">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Menu</h3>
        </div>
        
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full text-left px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-blue-800 text-white'
                  : 'text-gray-700 hover:bg-blue-300 hover:text-gray-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
