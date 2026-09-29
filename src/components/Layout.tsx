import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/Sidebar'

export function Layout() {
  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}
