import { Header } from '@/components/Header'
import { GraduationCap, User } from 'lucide-react'

export function About() {
  return (
    <>
      <Header title="About" subtitle="EWM Submission Hub — academic portfolio" />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-2xl space-y-6">
          <section className="rounded-xl border border-ewm-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-ewm-teal-600" aria-hidden />
              <h2 className="text-lg font-semibold text-ewm-slate-900">Student details</h2>
            </div>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-ewm-slate-600">Name</dt>
                <dd className="font-medium text-ewm-slate-900">Vishakha Raju Gite</dd>
              </div>
              <div>
                <dt className="text-ewm-slate-600">Roll number</dt>
                <dd className="font-medium text-ewm-slate-900">25102C2005</dd>
              </div>
              <div>
                <dt className="text-ewm-slate-600">Class &amp; Division</dt>
                <dd className="font-medium text-ewm-slate-900">TE CMPN C</dd>
              </div>
              <div>
                <dt className="text-ewm-slate-600">College</dt>
                <dd className="font-medium text-ewm-slate-900">Vidyalankar Institute of Technology</dd>
              </div>
            </dl>
          </section>
          <section className="rounded-xl border border-ewm-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-ewm-teal-600" aria-hidden />
              <h2 className="text-lg font-semibold text-ewm-slate-900">Course</h2>
            </div>
            <dl className="mt-4 grid gap-3 text-sm">
              <div>
                <dt className="text-ewm-slate-600">Subject</dt>
                <dd className="font-medium text-ewm-slate-900">
                  E-Waste and Environmental Management
                </dd>
              </div>
              <div>
                <dt className="text-ewm-slate-600">Faculty</dt>
                <dd className="font-medium text-ewm-slate-900">Dr. Aniket Kundu</dd>
              </div>
            </dl>
          </section>
          <div className="rounded-xl border border-ewm-teal-100 bg-ewm-teal-50 p-5 text-sm leading-6 text-ewm-teal-800">
            This hub organizes verified coursework submissions for faculty review. Faculty titles
            remain exactly as provided in Microsoft Teams, while filenames appear only under their
            mapped academic record.
          </div>
        </div>
      </main>
    </>
  )
}
