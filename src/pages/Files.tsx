import { Header } from '@/components/Header'
import { submissions } from '@/data/submissions'
import { Download, ExternalLink, FileCheck2, TriangleAlert } from 'lucide-react'

const files = submissions.flatMap((submission) =>
  submission.materials
    .filter((material) => material.type !== 'LINK')
    .map((material) => ({ ...material, submissionTitle: submission.title })),
)

export function Files() {
  return (
    <>
      <Header
        title="Files"
        subtitle="Verified file mapping; missing files remain clearly identified"
      />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-ewm-slate-200 bg-white p-5 shadow-sm">
            <FileCheck2 className="h-5 w-5 text-ewm-teal-700" aria-hidden />
            <p className="mt-3 text-2xl font-semibold text-ewm-slate-900">
              {files.filter((file) => file.status === 'SUBMITTED').length}
            </p>
            <p className="text-sm text-ewm-slate-600">Submitted files mapped</p>
          </div>
          <div className="rounded-2xl border border-ewm-slate-200 bg-white p-5 shadow-sm">
            <TriangleAlert className="h-5 w-5 text-amber-700" aria-hidden />
            <p className="mt-3 text-2xl font-semibold text-ewm-slate-900">
              {files.filter((file) => file.status === 'MISSING').length}
            </p>
            <p className="text-sm text-ewm-slate-600">Expected files unavailable</p>
          </div>
        </div>

        <ul className="mt-6 space-y-3">
          {files.map((file) => (
            <li
              key={`${file.submissionTitle}-${file.name}`}
              className="flex flex-col gap-4 rounded-xl border border-ewm-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="break-words text-sm font-semibold text-ewm-slate-900">
                    {file.name}
                  </p>
                  <span
                    className={[
                      'rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide',
                      file.status === 'MISSING'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800',
                    ].join(' ')}
                  >
                    {file.status}
                  </span>
                </div>
                <p className="mt-1 text-xs text-ewm-slate-500">
                  {file.type} · {file.submissionTitle}
                </p>
                {file.status === 'MISSING' ? (
                  <p className="mt-1 text-xs text-amber-800">
                    Material unavailable in current project folder
                  </p>
                ) : null}
              </div>
              {file.path ? (
                <div className="flex shrink-0 flex-wrap gap-2">
                  <a
                    href={file.path}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-ewm-teal-700 px-3 py-2 text-xs font-semibold text-white hover:bg-ewm-teal-800"
                  >
                    Open <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                  <a
                    href={file.path}
                    download={file.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-ewm-slate-200 px-3 py-2 text-xs font-semibold text-ewm-slate-700 hover:text-ewm-teal-700"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden /> Download
                  </a>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
