import { Code, Briefcase, Palette, BarChart3 } from "lucide-react"
import { Link } from "react-router-dom"

const categories = [
  {
    id: 1,
    name: "Programming & Development",
    icon: Code,
    courseCount: "2,847",
    color: "bg-blue-50 text-blue-600",
    href: "/categories/programming",
  },
  {
    id: 2,
    name: "Business & Marketing",
    icon: Briefcase,
    courseCount: "1,923",
    color: "bg-green-50 text-green-600",
    href: "/categories/business",
  },
  {
    id: 3,
    name: "Design & Creative",
    icon: Palette,
    courseCount: "1,456",
    color: "bg-purple-50 text-purple-600",
    href: "/categories/design",
  },
  {
    id: 4,
    name: "Data Science & Analytics",
    icon: BarChart3,
    courseCount: "892",
    color: "bg-orange-50 text-orange-600",
    href: "/categories/data-science",
  },
]

const TopCategories = () => {
  return (
    <div className="mt-4">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Top Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link
                key={category.id}
                to={category.href}
                className="group bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${category.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 truncate">{category.name}</h3>
                    <p className="text-xs text-gray-500">{category.courseCount} courses</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TopCategories
