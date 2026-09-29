import { NavLink } from 'react-router-dom'
import {
  BookOpenText,
  LayoutDashboard,
  Files,
  ClipboardList,
  Globe,
  Info,
  Leaf,
  Library,
} from 'lucide-react'

type NavItem = {
  to: string
  label: string
  icon: typeof LayoutDashboard
  end?: boolean
}

const navItems: NavItem[] = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/submissions', label: 'All Submissions', icon: Library },
  { to: '/assignments', label: 'Assignments', icon: ClipboardList },
  { to: '/case-studies', label: 'Case Studies', icon: BookOpenText },
  { to: '/online-dashboards', label: 'Online Dashboards', icon: Globe },
  { to: '/files', label: 'Files', icon: Files },
  { to: '/about', label: 'About', icon: Info },
]

export function Sidebar() {
  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-ewm-slate-200 bg-white/95 backdrop-blur md:h-full md:w-64 md:border-b-0 md:border-r">
      <div className="flex items-center gap-3 px-4 py-4 md:border-b md:border-ewm-slate-200 md:px-5 md:py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ewm-teal-500 to-ewm-teal-700 text-white shadow-sm shadow-ewm-teal-100">
          <Leaf className="h-5 w-5" aria-hidden />
        </div>
        <div>
          <p className="text-sm font-semibold text-ewm-slate-900">EWM Submission Hub</p>
          <p className="text-xs text-ewm-slate-600">Academic portfolio</p>
        </div>
      </div>
      <nav
        className="flex gap-1 overflow-x-auto border-t border-ewm-slate-100 px-3 py-2 md:flex-1 md:flex-col md:overflow-visible md:border-0 md:p-3"
        aria-label="Main navigation"
      >
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              [
                'flex shrink-0 items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors md:gap-3',
                isActive
                  ? 'bg-ewm-teal-50 text-ewm-teal-700 ring-1 ring-inset ring-ewm-teal-100'
                  : 'text-ewm-slate-600 hover:bg-ewm-slate-100 hover:text-ewm-slate-900',
              ].join(' ')
            }
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="hidden border-t border-ewm-slate-200 px-5 py-4 md:block">
        <p className="text-xs text-ewm-slate-600">Vidyalankar Institute of Technology</p>
        <p className="text-xs font-medium text-ewm-slate-800">TE CMPN C · EWM</p>
      </div>
    </aside>
  )
}
