import { useMemo, useState } from 'react'
import { FilterBar } from '@/components/FilterBar'
import { Header } from '@/components/Header'
import { SearchBar } from '@/components/SearchBar'
import { StatsCard } from '@/components/StatsCard'
import { SubmissionCard } from '@/components/SubmissionCard'
import {
  assignments,
  linkedMaterials,
  submissions,
  submittedMaterials,
} from '@/data/submissions'
import { filterSubmissions } from '@/lib/submissions'
import { ExternalLink, FileCheck2, GraduationCap, ListChecks } from 'lucide-react'

export function Dashboard() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All categories')
  const categories = useMemo(
    () => ['All categories', ...new Set(submissions.map((item) => item.category))],
    [],
  )
  const results = useMemo(
    () => filterSubmissions(submissions, query, category),
    [query, category],
  )
  const isFiltering = Boolean(query.trim()) || category !== 'All categories'
  const visibleSubmissions = isFiltering ? results : assignments.slice(-4).reverse()

  return (
    <>
      <Header
        title="Dashboard"
        subtitle="Verified E-Waste and Environmental Management academic portfolio"
      />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ewm-teal-800 via-ewm-teal-700 to-ewm-teal-600 p-6 text-white shadow-lg shadow-ewm-teal-100 sm:p-8">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border-[36px] border-white/5" />
          <div className="relative max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-ewm-teal-100">
              <GraduationCap className="h-5 w-5" aria-hidden />
              Vidyalankar Institute of Technology
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Vishakha Raju Gite
            </h2>
            <p className="mt-2 text-sm text-ewm-teal-50">
              Roll No. 25102C2005 · TE CMPN C
            </p>
            <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                <p className="text-xs text-ewm-teal-100">Subject</p>
                <p className="mt-1 font-medium">E-Waste and Environmental Management</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                <p className="text-xs text-ewm-teal-100">Faculty</p>
                <p className="mt-1 font-medium">Dr. Aniket Kundu</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            label="Total assignments"
            value={assignments.length}
            hint="Verified faculty titles"
            icon={ListChecks}
          />
          <StatsCard
            label="Submitted materials"
            value={submittedMaterials.length}
            hint="Verified files in this project"
            icon={FileCheck2}
          />
          <StatsCard
            label="External links"
            value={linkedMaterials.length}
            hint="Verified URLs from links.txt"
            icon={ExternalLink}
          />
          <StatsCard
            label="Academic records"
            value={submissions.length}
            hint="Assignments and case studies"
            icon={GraduationCap}
          />
        </div>

        <section className="mt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ewm-teal-700">
                Portfolio explorer
              </p>
              <h2 className="mt-1 text-xl font-semibold text-ewm-slate-900">
                {isFiltering ? `${results.length} matching records` : 'Recent submissions'}
              </h2>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
              <SearchBar value={query} onChange={setQuery} />
              <FilterBar
                label="Category"
                value={category}
                options={categories.map((value) => ({ value, label: value }))}
                onChange={setCategory}
              />
            </div>
          </div>

          {visibleSubmissions.length ? (
            <div className="mt-5 grid gap-5 xl:grid-cols-2">
              {visibleSubmissions.map((submission) => (
                <SubmissionCard key={submission.id} submission={submission} />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-ewm-slate-200 bg-white p-10 text-center text-sm text-ewm-slate-600">
              No records match this search and category.
            </div>
          )}
        </section>
      </main>
    </>
  )
}
