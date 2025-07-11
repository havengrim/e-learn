"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { CourseCard } from "@/app/my-learning/course-card"
import { Plus } from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
import Footer from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { generateFakeCourse } from "@/lib/mockCourse"

type FilterType = "all" | "enrolled" | "favorite"

export default function MyLearningsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")

  // Generate mock data once (simulate fetched data)
  const fakeCourses = Array.from({ length: 12 }, generateFakeCourse)

  const getFilteredCourses = (filter: FilterType) => {
    return fakeCourses.filter((course) => {
      if (filter === "enrolled") return course.isEnrolled
      if (filter === "favorite") return course.isFavorite
      return true
    })
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2 h-full">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                  <h1 className="text-3xl font-bold">My Learnings</h1>
                  <Tabs
                    defaultValue="all"
                    onValueChange={(value) => setActiveFilter(value as FilterType)}
                    className="w-full md:w-auto"
                  >
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="all">All Courses</TabsTrigger>
                      <TabsTrigger value="enrolled">Enrolled</TabsTrigger>
                      <TabsTrigger value="favorite">Favorites</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <Tabs value={activeFilter} onValueChange={(value) => setActiveFilter(value as FilterType)}>
                  {(["all", "enrolled", "favorite"] as FilterType[]).map((filter) => (
                    <TabsContent key={filter} value={filter}>
                      {getFilteredCourses(filter).length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                          <p className="text-lg">
                            {filter === "all"
                              ? "No courses found."
                              : filter === "enrolled"
                              ? "You are not currently enrolled in any courses."
                              : "You haven't favorited any courses yet."}
                          </p>
                          <Button
                            variant="link"
                            onClick={() => setActiveFilter("all")}
                            className="mt-4"
                          >
                            {filter === "favorite" ? "Discover Courses" : "Browse All Courses"}
                          </Button>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                          {getFilteredCourses(filter).map((course) => (
                            <CourseCard key={course.id} course={course} />
                          ))}
                          {filter === "all" && (
                            <Card className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed !p-0 text-center transition-colors hover:border-primary">
                              <Plus className="mb-4 h-12 w-12 text-muted-foreground" />
                              <h3 className="text-lg font-semibold text-muted-foreground">Discover New Courses</h3>
                              <p className="text-sm text-muted-foreground">
                                Explore our catalog and expand your knowledge.
                              </p>
                              <Button variant="outline" className="mt-4 bg-transparent">
                                Browse Courses
                              </Button>
                            </Card>
                          )}
                        </div>
                      )}
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  )
}
