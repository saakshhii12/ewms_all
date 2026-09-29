export type MaterialType = 'PDF' | 'DOCX' | 'XLSX' | 'PPTX' | 'IMAGE' | 'LINK'

export type MaterialStatus = 'SUBMITTED' | 'REFERENCE' | 'EXTERNAL LINK' | 'MISSING'

export type SubmissionStatus = 'SUBMITTED' | 'PARTIAL' | 'MISSING'

export type SubmissionCategory =
  | 'Assignment'
  | 'Class Activity'
  | 'Presentation / Assignment'
  | 'Assignment / Dashboard'
  | 'Assignment / Patent Activity'
  | 'Comparative Study'
  | 'Pitch Deck / Assignment'
  | 'Campaign / Class Activity'
  | 'Green Building / Assignment'
  | 'Case Study'

export interface Material {
  name: string
  type: MaterialType
  path?: string
  status: MaterialStatus
  isReference: boolean
  externalUrl?: string
}

export interface Submission {
  id: string
  /** Exact faculty title; filenames must never replace this value. */
  title: string
  category: SubmissionCategory
  /** ISO 8601 local date-time where verified. */
  dueDate?: string
  /** null means the assignment was explicitly marked "No points". */
  marks?: number | null
  description?: string
  materials: Material[]
  status: SubmissionStatus
  tags: string[]
}
