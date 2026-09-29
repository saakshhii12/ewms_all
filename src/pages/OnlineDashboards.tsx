import { Header } from '@/components/Header'
import { linkedMaterials, submissions } from '@/data/submissions'
import { ExternalLink } from 'lucide-react'

export function OnlineDashboards() {
  const dashboards = submissions.flatMap((submission) =>
    submission.materials
      .filter((material) => material.status === 'EXTERNAL LINK')
      .map((material) => ({ ...material, submissionTitle: submission.title })),
  )

  return (
    <>
      <Header
        title="Online Dashboards"
        subtitle={`${linkedMaterials.length} verified external URLs extracted from links.txt`}
      />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {dashboards.map((dashboard) => (
            <article
              key={dashboard.name}
              className="flex flex-col rounded-2xl border border-ewm-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ewm-teal-50 text-ewm-teal-700">
                <ExternalLink className="h-5 w-5" aria-hidden />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-ewm-teal-700">
                External link
              </p>
              <h2 className="mt-1 text-lg font-semibold text-ewm-slate-900">{dashboard.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-ewm-slate-600">
                Linked to: {dashboard.submissionTitle}
              </p>
              <a
                href={dashboard.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-ewm-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ewm-teal-800"
              >
                Open Dashboard <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
