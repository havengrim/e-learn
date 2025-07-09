import { Play } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface CourseCardProps {
  title: string
  description: string
  progress: number
  totalLessons: number
  completedLessons: number
  gradientFrom: string
  gradientTo: string
}

function CourseCard({
  title,
  description,
  progress,
  totalLessons,
  completedLessons,
  gradientFrom,
  gradientTo,
}: CourseCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
 
      <div className={`relative w-20 h-full bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl flex-shrink-0`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Play className="w-3 h-3 text-gray-700 fill-gray-700 ml-0.5" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">{title}</h3>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">
              {completedLessons}/{totalLessons}
            </span>
            <span className="text-gray-600">{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>
      </div>
    </div>
  )
}

export function LearningSection() {
  const courses = [
    {
      title: "4. Affiliate Marketing",
      description: "Online Business: Discovering and testing your online business ideas...",
      progress: 40,
      totalLessons: 10,
      completedLessons: 4,
      gradientFrom: "from-purple-400",
      gradientTo: "to-pink-400",
    },
    {
      title: "6. Adobe Photoshop - The Basics Work...",
      description: "Graphic Design Masterclass - Learn GREAT Design",
      progress: 90,
      totalLessons: 10,
      completedLessons: 9,
      gradientFrom: "from-blue-500",
      gradientTo: "to-purple-600",
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Keep on learning!</h2>
        <a href="#" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
          My learnings
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            progress={course.progress}
            totalLessons={course.totalLessons}
            completedLessons={course.completedLessons}
            gradientFrom={course.gradientFrom}
            gradientTo={course.gradientTo}
          />
        ))}
      </div>
    </div>
  )
}
