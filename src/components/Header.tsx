import type { ReactNode } from 'react'

interface HeaderProps {
  title: string
  subtitle?: string
  actions?: ReactNode
}

export function Header({ title, subtitle, actions }: HeaderProps) {
  return (
    <header className="flex flex-col gap-4 border-b border-ewm-slate-200 bg-white/85 px-4 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-ewm-slate-900 sm:text-2xl">{title}</h1>
        {subtitle ? (
          <p className="mt-1 text-sm text-ewm-slate-600">{subtitle}</p>
        ) : null}
      </div>
      {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
    </header>
  )
}
