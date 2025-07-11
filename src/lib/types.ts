export interface Course {
  id: string
  title: string
  instructor: string
  imageUrl: string
  progress?: number // 0-100, if enrolled
  isEnrolled: boolean
  isFavorite: boolean
  category: string
}
