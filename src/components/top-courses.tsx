"use client"
import { faker } from "@faker-js/faker"
import { Star, Users, Clock, Play } from "lucide-react"
import { Link } from "react-router-dom"

const courses = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  title: faker.company.catchPhrase(),
  instructor: faker.person.fullName(),
  image: `https://picsum.photos/seed/${faker.string.uuid()}/400/250`,
  rating: (Math.random() * 1.5 + 3.5).toFixed(1),
  students: faker.number.int({ min: 1000, max: 15000 }).toLocaleString(),
  duration: `${faker.number.int({ min: 20, max: 60 })} hours`,
  price: `$${faker.number.int({ min: 49, max: 129 })}`,
  category: faker.commerce.department(),
  href: "/courses/sample-course",
}))

const TopCourses = () => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Learners are viewing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={course.href}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2 transform"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                    {course.category}
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-6 h-6 text-gray-800 fill-gray-800" />
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Course Content */}
              <div className="p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors duration-200">
                  {course.title}
                </h3>

                <p className="text-xs text-gray-600 mb-3 group-hover:text-gray-500 transition-colors duration-200">
                  by {course.instructor}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                  <span className="text-xs text-gray-500">({course.students})</span>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{course.duration}</span>
                  </div>
                </div>


                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {course.price}
                  </span>
                  <button className="text-xs bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md">
                    Enroll Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopCourses
