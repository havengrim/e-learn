"use client"

import { faker } from "@faker-js/faker"
import { Star, Users, Clock, Play, BookOpen, Award, Globe } from "lucide-react"
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
  href: "/course",
  description: faker.lorem.paragraph(3),
  level: faker.helpers.arrayElement(["Beginner", "Intermediate", "Advanced"]),
  language: "English",
  lastUpdated: faker.date.recent({ days: 30 }).toLocaleDateString(),
  curriculum: [faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence()],
  skills: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
}))

const Recommended = () => {
  return (
    <div>
      <div>
         <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-6 sm:mb-8">
          What to learn next
        </h2>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 mb-6 sm:mb-8">
          Suggested for you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {courses.map((course, index) => (
            <div key={course.id} className="relative group h-full cursor-pointer">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2 transform h-full flex flex-col">
                {/* Course Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-32 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                      {course.category}
                    </span>
                  </div>
                  {/* Play Button Overlay - Hidden on mobile */}
                  <div className="hidden sm:flex absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <Play className="w-6 h-6 text-gray-800 fill-gray-800" />
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors duration-200">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3 group-hover:text-gray-500 transition-colors duration-200">
                      by {course.instructor}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                      <span className="text-xs text-gray-500">({course.students})</span>
                    </div>

                    {/* Course Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3 sm:mb-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span className="truncate">{course.students}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {course.price}
                    </span>
                    <Link
                      to={course.href}
                      className="text-xs bg-gray-900 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hover Details Panel - Only show on larger screens */}
              <div
                className={`hidden lg:block absolute top-0 bg-white rounded-xl border border-gray-200 shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 ${
                  index % 4 >= 2 ? "right-full mr-4 w-80" : "left-full ml-4 w-80"
                } ${
                  // Adjust positioning for edge cases
                  index % 4 === 0 ? "xl:left-full xl:ml-4 xl:right-auto xl:mr-0" : ""
                } ${index % 4 === 3 ? "xl:right-full xl:mr-4 xl:left-auto xl:ml-0" : ""}`}
                style={{
                  transform: "translateY(-10px)",
                  transition: "all 0.3s ease-in-out",
                  maxWidth: "min(320px, calc(100vw - 2rem))",
                }}
              >
                {/* Course Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>{course.level}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Globe className="w-3 h-3" />
                      <span>{course.language}</span>
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className="text-sm text-gray-700 line-clamp-3">{course.description}</p>
                </div>

                {/* What you'll learn */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    What you'll learn
                  </h4>
                  <ul className="space-y-1">
                    {course.curriculum.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills you'll gain</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skill, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-gray-500">({course.students})</span>
                  </div>
                  <span className="text-gray-500">{course.duration}</span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                  <Link
                    to={course.href}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Enroll Now
                  </Link>
                </div>

                {/* Last Updated */}
                <p className="text-xs text-gray-500 mt-2">Updated {course.lastUpdated}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 mb-6 sm:mb-8">
          Trending
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {courses.map((course, index) => (
            <div key={course.id} className="relative group h-full cursor-pointer">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2 transform h-full flex flex-col">
                {/* Course Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-32 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                      {course.category}
                    </span>
                  </div>
                  {/* Play Button Overlay - Hidden on mobile */}
                  <div className="hidden sm:flex absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <Play className="w-6 h-6 text-gray-800 fill-gray-800" />
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors duration-200">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3 group-hover:text-gray-500 transition-colors duration-200">
                      by {course.instructor}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                      <span className="text-xs text-gray-500">({course.students})</span>
                    </div>

                    {/* Course Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3 sm:mb-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span className="truncate">{course.students}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {course.price}
                    </span>
                    <Link
                      to={course.href}
                      className="text-xs bg-gray-900 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hover Details Panel - Only show on larger screens */}
              <div
                className={`hidden lg:block absolute top-0 bg-white rounded-xl border border-gray-200 shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 ${
                  index % 4 >= 2 ? "right-full mr-4 w-80" : "left-full ml-4 w-80"
                } ${
                  // Adjust positioning for edge cases
                  index % 4 === 0 ? "xl:left-full xl:ml-4 xl:right-auto xl:mr-0" : ""
                } ${index % 4 === 3 ? "xl:right-full xl:mr-4 xl:left-auto xl:ml-0" : ""}`}
                style={{
                  transform: "translateY(-10px)",
                  transition: "all 0.3s ease-in-out",
                  maxWidth: "min(320px, calc(100vw - 2rem))",
                }}
              >
                {/* Course Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>{course.level}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Globe className="w-3 h-3" />
                      <span>{course.language}</span>
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className="text-sm text-gray-700 line-clamp-3">{course.description}</p>
                </div>

                {/* What you'll learn */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    What you'll learn
                  </h4>
                  <ul className="space-y-1">
                    {course.curriculum.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills you'll gain</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skill, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-gray-500">({course.students})</span>
                  </div>
                  <span className="text-gray-500">{course.duration}</span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                  <Link
                    to={course.href}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Enroll Now
                  </Link>
                </div>

                {/* Last Updated */}
                <p className="text-xs text-gray-500 mt-2">Updated {course.lastUpdated}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Recommended
