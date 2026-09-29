import { Search } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search by assignment title…',
}: SearchBarProps) {
  return (
    <label className="relative block w-full max-w-md">
      <span className="sr-only">Search</span>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ewm-slate-600"
        aria-hidden
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-ewm-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-ewm-slate-900 shadow-sm outline-none transition focus:border-ewm-teal-500 focus:ring-2 focus:ring-ewm-teal-100"
      />
    </label>
  )
}
