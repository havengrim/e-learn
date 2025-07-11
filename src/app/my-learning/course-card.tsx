"use client"

import { useState } from "react"
// Removed: import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Heart, BookOpen, Play } from "lucide-react"
import type { Course } from "@/lib/types"
import { cn } from "../../lib/utils"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const [isFavorite, setIsFavorite] = useState(course.isFavorite)

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite)
    // In a real application, you would update the backend here
    console.log(`Toggled favorite for ${course.title}: ${!isFavorite}`)
  }

  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md">
      <div className="relative h-40 w-full">
        {/* Replaced Image component with standard img tag */}
        <img
          src={course.imageUrl || "/placeholder.svg"}
          alt={course.title}
          className="h-full w-full object-cover rounded-t-lg" // Added object-cover for similar behavior to layout="fill" objectFit="cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={handleFavoriteToggle}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={cn("h-5 w-5", isFavorite ? "fill-red-500 text-red-500" : "text-gray-500")} />
        </Button>
      </div>
      <CardHeader className="space-y-2 p-4">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm text-muted-foreground">{course.instructor}</p>
      </CardHeader>
      <CardContent className="flex-1 p-4 pt-0">
        {course.isEnrolled && course.progress !== undefined && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}
        {!course.isEnrolled && <div className="text-sm text-muted-foreground">Not Enrolled</div>}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {course.isEnrolled ? (
          <Button className="w-full">
            <Play className="mr-2 h-4 w-4" /> Continue Learning
          </Button>
        ) : (
          <Button variant="outline" className="w-full bg-transparent">
            <BookOpen className="mr-2 h-4 w-4" /> Enroll Now
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
