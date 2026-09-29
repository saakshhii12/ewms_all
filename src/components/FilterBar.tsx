interface FilterOption {
  value: string
  label: string
}

interface FilterBarProps {
  label: string
  value: string
  options: FilterOption[]
  onChange: (value: string) => void
}

export function FilterBar({ label, value, options, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-ewm-slate-600">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-ewm-slate-200 bg-white px-3 py-2 text-sm text-ewm-slate-900 shadow-sm outline-none focus:border-ewm-teal-500 focus:ring-2 focus:ring-ewm-teal-100"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
