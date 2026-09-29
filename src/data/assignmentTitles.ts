/**
 * Exact assignment titles from faculty (Microsoft Teams).
 * Used for search and display — do not paraphrase or replace with filenames.
 */
export const FACULTY_ASSIGNMENT_TITLES = [
  'Assignment Zero_Check AAP',
  'Toxic Chemicals_Any 5',
  'Assignment 2_Submit the Class Activity_Map of e waste',
  'Assignment 1_E waste Traker',
  'E waste India Vs World Data Task_Class Activity',
  'Carbon Footprint Task_Excel activity Task',
  'TE CMPN C PPT_State tracker submission Folder',
  'E Waste Recovery Process_Modification for Design Patent',
  'Indian Companies Following E waste Rules_Comparative Study',
  'Novel Idea_E waste_Pitch Deck Submit Folder_CMPN C',
  'Campaign For E Waste in Campus_Class Activity',
  'LEED Certification of Green Buildings in India',
] as const

export type FacultyAssignmentTitle = (typeof FACULTY_ASSIGNMENT_TITLES)[number]
