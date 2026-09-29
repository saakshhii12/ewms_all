import { cpSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

const src = resolve('public/materials')
const dest = resolve('dist/materials')

const expected = [
  'pdf/25102C2005_ewms.pdf',
  'pdf/1000137950.pdf',
  'pdf/Reduced_Hydrogen_Decrepitation_Patent_Diagrams.pdf',
  'pdf/E_Waste.pdf',
  'docx/EWEM_AAP_CMPN_V_2026-27_AK.docx',
  'docx/EWM companies.docx',
  'docx/Miro_Workshop_Execution_Report-1.docx',
  'docx/Comparison Table_25102C2005.docx',
  'docx/Vishakha_Gite_Japan_Recycling_Case_Study.docx',
  'xlsx/Rajasthan EWaste Tracker.xlsx',
  'xlsx/25102C2005_carbonfootprint.xlsx',
  'xlsx/LEED_v5_BDC_11_Building_Unique_Scorecard.xlsx',
  'pptx/Rajasthan_EWaste_Deck (1).pptx',
  'pptx/25102C2005.pptx',
  'images/0509fec420568dc32dc8ef8076644f08573049834a14428921d3fd68394feb3a (1).png',
  'images/IMG-20260909-WA0048.jpg',
  'images/IMG-20260909-WA0047.jpg',
]

if (!existsSync(src)) {
  throw new Error('public/materials is missing')
}

cpSync(src, dest, { recursive: true })

const missing = expected.filter((relativePath) => {
  const filePath = join(dest, relativePath)
  return !existsSync(filePath) || statSync(filePath).size === 0
})

if (missing.length > 0) {
  throw new Error(`Missing material files in dist/materials:\n${missing.join('\n')}`)
}

const copied = readdirSync(dest, { recursive: true }).filter((name) => {
  const filePath = join(dest, String(name))
  return existsSync(filePath) && statSync(filePath).isFile() && !String(name).endsWith('.gitkeep')
})

console.log(`Copied ${copied.length} academic material files to dist/materials`)
