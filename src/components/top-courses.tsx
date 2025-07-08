"use client";

import { faker } from "@faker-js/faker";
import { Star, Users, Clock, Play } from "lucide-react";
import { Link } from "react-router-dom";

const courses = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  title: faker.company.catchPhrase(),
  instructor: faker.person.fullName(),
  image: `https://picsum.photos/seed/${faker.string.uuid()}/400/250`, // ✅ FIXED
  rating: (Math.random() * 1.5 + 3.5).toFixed(1),
  students: faker.number.int({ min: 1000, max: 15000 }).toLocaleString(),
  duration: `${faker.number.int({ min: 20, max: 60 })} hours`,
  price: `$${faker.number.int({ min: 49, max: 129 })}`,
  category: faker.commerce.department(),
  href: "/courses/sample-course",
}));

const TopCourses = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">
          Learners are viewing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={course.href}
              className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-white px-2 py-1 rounded text-xs font-medium text-gray-700">
                    {course.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-xs text-gray-600 mb-3">
                  by {course.instructor}
                </p>

                <div className="flex items-center space-x-1 mb-3">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium text-gray-700">
                    {course.rating}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({course.students})
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
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
                  <span className="text-lg font-bold text-gray-900">{course.price}</span>
                  <button className="text-xs bg-gray-900 text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCourses;
