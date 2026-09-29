import { Header } from '@/components/Header'
import { SubmissionCard } from '@/components/SubmissionCard'
import { caseStudies } from '@/data/submissions'

export function CaseStudies() {
  return (
    <>
      <Header
        title="Case Studies"
        subtitle="Research-based work maintained separately from faculty assignments"
      />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="grid gap-5 xl:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <SubmissionCard key={caseStudy.id} submission={caseStudy} />
          ))}
        </div>
      </main>
    </>
  )
}
