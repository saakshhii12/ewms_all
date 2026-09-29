import type { Material, Submission } from '@/types/submission'
import { formatDueDate } from '@/lib/submissions'
import {
  Download,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  Image,
  Presentation,
  TriangleAlert,
} from 'lucide-react'

interface SubmissionCardProps {
  submission: Submission
}

const icons = {
  PDF: FileText,
  DOCX: FileText,
  XLSX: FileSpreadsheet,
  PPTX: Presentation,
  IMAGE: Image,
  LINK: ExternalLink,
} as const

function MaterialRow({ material }: { material: Material }) {
  const Icon = material.status === 'MISSING' ? TriangleAlert : icons[material.type]
  const isPreviewable = material.type === 'PDF' || material.type === 'IMAGE'

  return (
    <li className="rounded-xl border border-ewm-slate-200 bg-ewm-slate-50/70 p-3">
      <div className="flex items-start gap-3">
        <span
          className={[
            'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
            material.status === 'MISSING'
              ? 'bg-amber-50 text-amber-700'
              : 'bg-white text-ewm-teal-700 shadow-sm',
          ].join(' ')}
        >
          <Icon className="h-4 w-4" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="break-words text-sm font-medium text-ewm-slate-800">{material.name}</p>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold tracking-wide text-ewm-slate-500">
              {material.type}
            </span>
            <span
              className={[
                'rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide',
                material.status === 'MISSING'
                  ? 'bg-amber-100 text-amber-800'
                  : material.status === 'EXTERNAL LINK'
                    ? 'bg-sky-100 text-sky-800'
                    : material.status === 'REFERENCE'
                      ? 'bg-violet-100 text-violet-800'
                      : 'bg-emerald-100 text-emerald-800',
              ].join(' ')}
            >
              {material.isReference ? 'REFERENCE MATERIAL' : material.status}
            </span>
          </div>
          {material.status === 'MISSING' ? (
            <p className="mt-2 text-xs text-amber-800">
              Material unavailable in current project folder
            </p>
          ) : null}
          {material.externalUrl ? (
            <a
              href={material.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-ewm-teal-700 px-3 py-2 text-xs font-semibold text-white transition hover:bg-ewm-teal-800"
            >
              Open Dashboard <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          ) : null}
          {material.path ? (
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={material.path}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-ewm-teal-700 px-3 py-2 text-xs font-semibold text-white transition hover:bg-ewm-teal-800"
              >
                {isPreviewable
                  ? material.type === 'PDF'
                    ? 'View PDF'
                    : 'View Image'
                  : 'Open / Download'}
                {isPreviewable ? <ExternalLink className="h-3.5 w-3.5" aria-hidden /> : null}
              </a>
              {isPreviewable ? (
                <a
                  href={material.path}
                  download={material.name}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-ewm-slate-200 bg-white px-3 py-2 text-xs font-semibold text-ewm-slate-700 transition hover:border-ewm-teal-200 hover:text-ewm-teal-700"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden /> Download
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </li>
  )
}

export function SubmissionCard({ submission }: SubmissionCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-ewm-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ewm-teal-700">
            {submission.category}
          </p>
          <h2 className="mt-2 text-base font-semibold leading-snug text-ewm-slate-900">
            {submission.title}
          </h2>
        </div>
        <span
          className={[
            'shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide',
            submission.status === 'SUBMITTED'
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-amber-100 text-amber-800',
          ].join(' ')}
        >
          {submission.status}
        </span>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-ewm-teal-25 p-3 text-sm">
        <div>
          <dt className="text-xs text-ewm-slate-500">Due</dt>
          <dd className="mt-0.5 font-medium text-ewm-slate-800">
            {formatDueDate(submission.dueDate)}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-ewm-slate-500">Marks</dt>
          <dd className="mt-0.5 font-medium text-ewm-slate-800">
            {submission.marks === null
              ? 'No points'
              : submission.marks === undefined
                ? 'Not provided'
                : submission.marks}
          </dd>
        </div>
      </dl>
      <div className="mt-5 flex-1">
        <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-ewm-slate-500">
          Materials
        </h3>
        <ul className="mt-3 space-y-2">
          {submission.materials.map((material) => (
            <MaterialRow key={`${submission.id}-${material.name}`} material={material} />
          ))}
        </ul>
      </div>
    </article>
  )
}
