import { useMemo, useState } from 'react'
import { Header } from '@/components/Header'
import { SearchBar } from '@/components/SearchBar'
import { FilterBar } from '@/components/FilterBar'
import { SubmissionCard } from '@/components/SubmissionCard'
import { submissions } from '@/data/submissions'
import { filterSubmissions } from '@/lib/submissions'

export function AllSubmissions() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All categories')
  const categories = useMemo(
    () => ['All categories', ...new Set(submissions.map((item) => item.category))],
    [],
  )

  const filtered = useMemo(
    () => filterSubmissions(submissions, query, category),
    [query, category],
  )

  return (
    <>
      <Header
        title="All Submissions"
        subtitle={`${submissions.length} verified academic records with mapped files and links`}
      />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchBar value={query} onChange={setQuery} />
          <FilterBar
            label="Category"
            value={category}
            onChange={setCategory}
            options={categories.map((value) => ({ value, label: value }))}
          />
        </div>
        <p className="mt-4 text-sm text-ewm-slate-600">
          Showing {filtered.length} of {submissions.length} records
        </p>
        {filtered.length === 0 ? (
          <p className="mt-6 rounded-xl border border-dashed border-ewm-slate-200 bg-white px-6 py-12 text-center text-sm text-ewm-slate-600">
            No records match this search and category.
          </p>
        ) : (
          <ul className="mt-5 grid gap-5 xl:grid-cols-2">
            {filtered.map((submission) => (
              <li key={submission.id}>
                <SubmissionCard submission={submission} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  )
}
