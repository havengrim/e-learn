"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, ChevronRight, PlayCircle, Star, CheckCircle } from "lucide-react"
import { useState } from "react"

const courseContent = [
  {
    id: "01",
    title: "Intro",
    duration: "22min",
    lessons: [
      { title: "Introduction", duration: "2 min", completed: true },
      { title: "What is Figma?", duration: "5 min", completed: true },
      { title: "Understanding Figma", duration: "10 min", completed: false },
      { title: "UI tour", duration: "5 min", completed: false },
    ],
  },
  {
    id: "02",
    title: "Intermediate Level Stuff",
    duration: "1h 20min",
    lessons: [],
  },
  {
    id: "03",
    title: "Advanced Stuff",
    duration: "38min",
    lessons: [],
  },
  {
    id: "04",
    title: "Imports & Graphics",
    duration: "40min",
    lessons: [],
  },
  {
    id: "05",
    title: "Component in Figma",
    duration: "1h 12min",
    lessons: [],
  },
  {
    id: "06",
    title: "Styles in Figma",
    duration: "45min",
    lessons: [],
  },
  {
    id: "07",
    title: "Summary",
    duration: "8min",
    lessons: [],
  },
]

export function CourseContentSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(["01"])

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  return (
    <div className="w-full lg:w-80 border-l bg-background h-full">
      <div className="p-3 sm:p-4 h-full overflow-y-auto">
        <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Course content</h3>

        <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
          {courseContent.map((section) => (
            <div key={section.id} className="border rounded-lg">
              <Button
                variant="ghost"
                className="w-full justify-between p-2 sm:p-3 h-auto text-left"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-medium text-xs sm:text-sm truncate">
                    {section.id}: {section.title}
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                  <span className="text-xs sm:text-sm text-muted-foreground">{section.duration}</span>
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                  ) : (
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  )}
                </div>
              </Button>

              {expandedSections.includes(section.id) && section.lessons.length > 0 && (
                <div className="px-2 sm:px-3 pb-2 sm:pb-3">
                  <Separator className="mb-1 sm:mb-2" />
                  <div className="space-y-0.5 sm:space-y-1">
                    {section.lessons.map((lesson, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-1.5 sm:p-2 hover:bg-muted rounded text-xs sm:text-sm"
                      >
                        {lesson.completed ? (
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 shrink-0" />
                        ) : (
                          <PlayCircle className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground shrink-0" />
                        )}
                        <span className="flex-1 truncate">{lesson.title}</span>
                        <span className="text-muted-foreground shrink-0">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Separator className="my-4 sm:my-6" />

        <div>
          <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Author</h4>
          <div className="flex items-start gap-2 sm:gap-3">
            <Avatar className="h-8 w-8 sm:h-10 sm:w-10 shrink-0">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Crystal Lucas" />
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-xs sm:text-sm">Crystal Lucas</span>
                <Badge variant="secondary" className="h-4 sm:h-5 text-xs">
                  <Star className="h-2 w-2 sm:h-3 sm:w-3 mr-1 fill-current" />
                  4.8
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">UI/UX Specialist</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                Crystal is a seasoned UI/UX designer with over 8 years of experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
