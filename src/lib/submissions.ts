import type { Submission } from '@/types/submission'

export function matchesSubmissionSearch(submission: Submission, rawQuery: string) {
  const query = rawQuery.trim().toLocaleLowerCase()
  if (!query) return true

  const searchable = [
    submission.title,
    submission.category,
    ...submission.tags,
    ...submission.materials.flatMap((material) => [
      material.name,
      material.type,
      material.status,
    ]),
  ]

  return searchable.some((value) => value.toLocaleLowerCase().includes(query))
}

export function filterSubmissions(
  submissions: Submission[],
  query: string,
  category: string,
) {
  return submissions.filter(
    (submission) =>
      (category === 'All categories' || submission.category === category) &&
      matchesSubmissionSearch(submission, query),
  )
}

export function formatDueDate(dueDate?: string) {
  if (!dueDate) return 'Not provided'

  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Kolkata',
  }).format(new Date(dueDate))
}
