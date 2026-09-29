import { useMemo, useState } from 'react'
import { Header } from '@/components/Header'
import { SearchBar } from '@/components/SearchBar'
import { SubmissionCard } from '@/components/SubmissionCard'
import { assignments } from '@/data/submissions'
import { matchesSubmissionSearch } from '@/lib/submissions'

export function Assignments() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return assignments.filter((submission) => matchesSubmissionSearch(submission, query))
  }, [query])

  return (
    <>
      <Header
        title="Assignments"
        subtitle="Exact Microsoft Teams titles with verified submitted materials"
      />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <SearchBar value={query} onChange={setQuery} />
        <p className="mt-4 text-sm text-ewm-slate-600">
          {filtered.length} of {assignments.length} assignments
        </p>
        <ul className="mt-5 grid gap-5 xl:grid-cols-2">
          {filtered.map((submission) => (
            <li key={submission.id}>
              <SubmissionCard submission={submission} />
            </li>
          ))}
        </ul>
        {filtered.length === 0 ? (
          <p className="mt-6 rounded-xl border border-dashed border-ewm-slate-200 bg-white p-10 text-center text-sm text-ewm-slate-600">
            No assignments match your search.
          </p>
        ) : null}
      </main>
    </>
  )
}
