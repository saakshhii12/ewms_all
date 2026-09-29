export type MaterialFolder = 'pdf' | 'docx' | 'xlsx' | 'pptx' | 'images'

export function publicMaterialPath(folder: MaterialFolder, filename: string) {
  return `/materials/${folder}/${filename.split('/').map(encodeURIComponent).join('/')}`
}
