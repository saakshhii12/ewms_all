import type { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  label: string
  value: string | number
  hint?: string
  icon: LucideIcon
}

export function StatsCard({ label, value, hint, icon: Icon }: StatsCardProps) {
  return (
    <div className="rounded-xl border border-ewm-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-ewm-slate-600">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-ewm-slate-900">{value}</p>
          {hint ? <p className="mt-1 text-xs text-ewm-slate-600">{hint}</p> : null}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ewm-teal-50 text-ewm-teal-600">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      </div>
    </div>
  )
}
