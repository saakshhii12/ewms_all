import { publicMaterialPath } from '@/lib/materials'
import type { Material, Submission } from '@/types/submission'

export const externalLinks = {
  greenScoreEvaluator:
    'https://green-score-evaluator.lovable.app/?classId=21d65eaa-5232-43c3-acc7-86c614444d90&assignmentId=b038ae38-fa88-4fe4-aa68-5743369f94db&submissionId=7516650d-8c1a-93ef-e809-595b69fad453&classId=21d65eaa-5232-43c3-acc7-86c614444d90&assignmentId=b038ae38-fa88-4fe4-aa68-5743369f94db&submissionId=1e79ce9b-bf89-11a0-f5df-317b631e6c0c',
  rajasthanInsights:
    'https://rajasthan-ewaste-insights.lovable.app/?classId=21d65eaa-5232-43c3-acc7-86c614444d90&assignmentId=af0c7168-a442-4478-bc67-14f05a6c63e2&submissionId=389cb330-e79d-8fed-7884-df188e53977e',
  eprComplianceCalculator:
    'https://dashboard-six-beryl-53.vercel.app/?classId=21d65eaa-5232-43c3-acc7-86c614444d90&assignmentId=4ad95427-e322-4b13-8e82-e863747e037a&submissionId=a1f18c63-e967-3abd-ad28-81e44ce9de07',
} as const

const submitted = (
  name: string,
  type: Material['type'],
  path: string,
): Material => ({
  name,
  type,
  path,
  status: 'SUBMITTED',
  isReference: false,
})

const external = (name: string, externalUrl: string): Material => ({
  name,
  type: 'LINK',
  status: 'EXTERNAL LINK',
  isReference: false,
  externalUrl,
})

export const assignments: Submission[] = [
  {
    id: 'assignment-zero-check-aap',
    title: 'Assignment Zero_Check AAP',
    category: 'Assignment',
    dueDate: '2026-07-31T23:59:00+05:30',
    marks: null,
    materials: [
      submitted(
        'EWEM_AAP_CMPN_V_2026-27_AK.docx',
        'DOCX',
        publicMaterialPath('docx', 'EWEM_AAP_CMPN_V_2026-27_AK.docx'),
      ),
    ],
    status: 'SUBMITTED',
    tags: ['AAP', 'academic activity plan'],
  },
  {
    id: 'toxic-chemicals-any-5',
    title: 'Toxic Chemicals_Any 5',
    category: 'Assignment',
    dueDate: '2026-07-24T13:30:00+05:30',
    marks: 5,
    materials: [
      submitted(
        '25102C2005_ewms.pdf',
        'PDF',
        publicMaterialPath('pdf', '25102C2005_ewms.pdf'),
      ),
    ],
    status: 'SUBMITTED',
    tags: ['toxic chemicals', 'PDF'],
  },
  {
    id: 'class-activity-map-of-e-waste',
    title: 'Assignment 2_Submit the Class Activity_Map of e waste',
    category: 'Class Activity',
    dueDate: '2026-07-28T15:00:00+05:30',
    marks: 5,
    materials: [
      submitted(
        '0509fec420568dc32dc8ef8076644f08573049834a14428921d3fd68394feb3a (1).png',
        'IMAGE',
        publicMaterialPath(
          'images',
          '0509fec420568dc32dc8ef8076644f08573049834a14428921d3fd68394feb3a (1).png',
        ),
      ),
    ],
    status: 'SUBMITTED',
    tags: ['e waste map', 'class activity', 'image'],
  },
  {
    id: 'e-waste-tracker',
    title: 'Assignment 1_E waste Traker',
    category: 'Assignment / Dashboard',
    dueDate: '2026-08-02T23:59:00+05:30',
    marks: 10,
    materials: [
      submitted(
        'Rajasthan EWaste Tracker.xlsx',
        'XLSX',
        publicMaterialPath('xlsx', 'Rajasthan EWaste Tracker.xlsx'),
      ),
      external('Rajasthan E-Waste Insights', externalLinks.rajasthanInsights),
    ],
    status: 'SUBMITTED',
    tags: ['Rajasthan', 'e-waste tracker', 'dashboard', 'Excel'],
  },
  {
    id: 'india-vs-world-data-task',
    title: 'E waste India Vs World Data Task_Class Activity',
    category: 'Class Activity',
    dueDate: '2026-08-04T11:00:00+05:30',
    marks: 5,
    materials: [
      submitted(
        '1000137950.pdf',
        'PDF',
        publicMaterialPath('pdf', '1000137950.pdf'),
      ),
    ],
    status: 'SUBMITTED',
    tags: ['India', 'world', 'e-waste data'],
  },
  {
    id: 'carbon-footprint-task',
    title: 'Carbon Footprint Task_Excel activity Task',
    category: 'Assignment',
    dueDate: '2026-08-11T22:00:00+05:30',
    marks: 10,
    materials: [
      submitted(
        '25102C2005_carbonfootprint.xlsx',
        'XLSX',
        publicMaterialPath('xlsx', '25102C2005_carbonfootprint.xlsx'),
      ),
    ],
    status: 'SUBMITTED',
    tags: ['carbon footprint', 'Excel'],
  },
  {
    id: 'state-tracker-presentation',
    title: 'TE CMPN C PPT_State tracker submission Folder',
    category: 'Presentation / Assignment',
    dueDate: '2026-08-12T23:59:00+05:30',
    marks: 10,
    materials: [
      submitted(
        'Rajasthan_EWaste_Deck (1).pptx',
        'PPTX',
        publicMaterialPath('pptx', 'Rajasthan_EWaste_Deck (1).pptx'),
      ),
      submitted(
        'EWM companies.docx',
        'DOCX',
        publicMaterialPath('docx', 'EWM companies.docx'),
      ),
    ],
    status: 'SUBMITTED',
    tags: ['Rajasthan', 'state tracker', 'presentation', 'companies'],
  },
  {
    id: 'recovery-process-design-patent',
    title: 'E Waste Recovery Process_Modification for Design Patent',
    category: 'Assignment / Patent Activity',
    dueDate: '2026-08-19T22:00:00+05:30',
    marks: 5,
    materials: [
      submitted(
        'Reduced_Hydrogen_Decrepitation_Patent_Diagrams.pdf',
        'PDF',
        publicMaterialPath(
          'pdf',
          'Reduced_Hydrogen_Decrepitation_Patent_Diagrams.pdf',
        ),
      ),
    ],
    status: 'SUBMITTED',
    tags: ['recovery process', 'design patent', 'hydrogen decrepitation'],
  },
  {
    id: 'indian-companies-e-waste-rules',
    title: 'Indian Companies Following E waste Rules_Comparative Study',
    category: 'Comparative Study',
    dueDate: '2026-09-02T22:00:00+05:30',
    marks: 15,
    materials: [
      submitted('E_Waste.pdf', 'PDF', publicMaterialPath('pdf', 'E_Waste.pdf')),
      submitted(
        'Miro_Workshop_Execution_Report-1.docx',
        'DOCX',
        publicMaterialPath('docx', 'Miro_Workshop_Execution_Report-1.docx'),
      ),
      external(
        'E-Waste EPR Compliance Calculator',
        externalLinks.eprComplianceCalculator,
      ),
    ],
    status: 'SUBMITTED',
    tags: ['Indian companies', 'e-waste rules', 'EPR', 'comparative study'],
  },
  {
    id: 'novel-idea-pitch-deck',
    title: 'Novel Idea_E waste_Pitch Deck Submit Folder_CMPN C',
    category: 'Pitch Deck / Assignment',
    dueDate: '2026-09-06T22:00:00+05:30',
    marks: 10,
    materials: [
      submitted(
        '25102C2005.pptx',
        'PPTX',
        publicMaterialPath('pptx', '25102C2005.pptx'),
      ),
      submitted(
        'Comparison Table_25102C2005.docx',
        'DOCX',
        publicMaterialPath('docx', 'Comparison Table_25102C2005.docx'),
      ),
    ],
    status: 'SUBMITTED',
    tags: ['novel idea', 'pitch deck', 'comparison table'],
  },
  {
    id: 'campus-e-waste-campaign',
    title: 'Campaign For E Waste in Campus_Class Activity',
    category: 'Campaign / Class Activity',
    dueDate: '2026-09-09T22:00:00+05:30',
    marks: 10,
    materials: [
      submitted(
        'IMG-20260909-WA0048.jpg',
        'IMAGE',
        publicMaterialPath('images', 'IMG-20260909-WA0048.jpg'),
      ),
      submitted(
        'IMG-20260909-WA0047.jpg',
        'IMAGE',
        publicMaterialPath('images', 'IMG-20260909-WA0047.jpg'),
      ),
    ],
    status: 'SUBMITTED',
    tags: ['campus campaign', 'class activity', 'images'],
  },
  {
    id: 'leed-green-buildings',
    title: 'LEED Certification of Green Buildings in India',
    category: 'Green Building / Assignment',
    dueDate: '2026-09-28T23:59:00+05:30',
    marks: 10,
    materials: [
      submitted(
        'LEED_v5_BDC_11_Building_Unique_Scorecard.xlsx',
        'XLSX',
        publicMaterialPath('xlsx', 'LEED_v5_BDC_11_Building_Unique_Scorecard.xlsx'),
      ),
      external('Green Score Evaluator', externalLinks.greenScoreEvaluator),
    ],
    status: 'SUBMITTED',
    tags: ['LEED', 'green building', 'scorecard', 'evaluator'],
  },
]

export const caseStudies: Submission[] = [
  {
    id: 'japan-recycling-case-study',
    title: 'Why Japan Recycles More Than Most Countries: Lessons for India',
    category: 'Case Study',
    materials: [
      submitted(
        'Vishakha_Gite_Japan_Recycling_Case_Study.docx',
        'DOCX',
        publicMaterialPath('docx', 'Vishakha_Gite_Japan_Recycling_Case_Study.docx'),
      ),
    ],
    status: 'SUBMITTED',
    tags: ['Japan', 'recycling', 'India', 'case study'],
  },
]

export const submissions: Submission[] = [...assignments, ...caseStudies]

export const submittedMaterials = submissions.flatMap((submission) =>
  submission.materials.filter((material) => material.status === 'SUBMITTED'),
)

export const linkedMaterials = submissions.flatMap((submission) =>
  submission.materials.filter((material) => material.status === 'EXTERNAL LINK'),
)

export const missingMaterials = submissions.flatMap((submission) =>
  submission.materials.filter((material) => material.status === 'MISSING'),
)
