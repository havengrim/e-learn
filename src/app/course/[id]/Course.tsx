import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import Footer from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { CourseContentSidebar } from "@/components/course-content-sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { BadgeCheck, ChevronLeft, Clock, Play, Star, BookOpen, Lock, Heart } from "lucide-react"

export default function Course() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "280px",
          "--header-height": "60px",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col lg:flex-row">
          <div className="flex-1 flex flex-col min-w-0">
            <div className="flex flex-1 flex-col">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="px-4 lg:px-6 w-full">
                  {/* Header Row: Back Button + Title + Badge + Enroll Button */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    {/* Left side: Back + Title + Badge */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-3 flex-wrap">
                        {/* Back button beside title */}
                        <Button variant="secondary" size="icon" className="size-8 shrink-0 mt-1">
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <div className="flex flex-col gap-2 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 leading-tight">
                              Figma from A to Z
                            </h1>
                            <Badge variant="secondary" className="h-6 shrink-0">
                              <BadgeCheck className="mr-1 h-4 w-4" />
                              UI UX Design
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 flex-wrap text-gray-500 text-sm sm:text-base pl-0 md:pl-0 lg:pl-11">
                        <div className="flex gap-2 items-center">
                          <Play className="h-4 w-4 shrink-0" />
                          <span>38 Lessons</span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Clock className="h-4 w-4 shrink-0" />
                          <span>4h 30mins</span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Star className="h-4 w-4 fill-current text-yellow-400 shrink-0" />
                          <span>4.5 (126 reviews)</span>
                        </div>
                      </div>
                    </div>
                    {/* Right side: Buttons */}
                    <div className="flex gap-2 shrink-0">
                      <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
                        <Heart />
                      </Button>
                      <Button size="sm" className="text-sm font-medium">
                        <Lock />
                        Enroll Now
                      </Button>
                      {/* Mobile Course Content Trigger */}
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Content
                          </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-96 p-0">
                          <CourseContentSidebar />
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>
                </div>

         
                <div className="px-4 lg:px-6">
                  <Card className="!p-0">
                    <CardContent className="!p-0">
                      <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg overflow-hidden">
                        <img
                          src="https://preview-react-component-example-kzmj8yjcnd52x6v5xen7.vusercontent.net/placeholder.svg?height=400&width=600"
                          alt="Course preview"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button size="lg" className="rounded-full h-12 w-12 sm:h-16 sm:w-16">
                            <Play className="h-4 w-4 sm:h-6 sm:w-6 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="px-4 lg:px-6">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
                      <TabsTrigger value="overview" className="text-xs sm:text-sm">
                        Overview
                      </TabsTrigger>
                      <TabsTrigger value="author" className="text-xs sm:text-sm">
                        Author
                      </TabsTrigger>
                      <TabsTrigger value="faq" className="text-xs sm:text-sm">
                        FAQ
                      </TabsTrigger>
                      <TabsTrigger value="reviews" className="text-xs sm:text-sm">
                        Reviews
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="mt-4 sm:mt-6">
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">About Course</h3>
                          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                            <p className="text-muted-foreground leading-relaxed">
                              Unlock the power of Figma, the leading collaborative design tool, with our comprehensive
                              online course. Whether you're a novice or seeking to enhance your skills, this course
                              provides a structured approach to mastering Figma's features and workflows.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                              Perfect for UI/UX designers, product managers, and anyone interested in modern design
                              tools. Join us to elevate your design skills and boost your productivity with Figma!
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">What You'll Learn</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {[
                              "Setting up the environment",
                              "Advanced HTML functions",
                              "Build a portfolio website",
                              "Responsive Designs",
                              "Understand HTML Programming",
                              "Cool HTML",
                              "Start building beautiful websites",
                            ].map((item, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <BadgeCheck className="h-4 w-4 text-green-500 shrink-0" />
                                <span className="text-xs sm:text-sm">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="author" className="mt-4 sm:mt-6">
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Author information will be displayed here.
                      </p>
                    </TabsContent>
                    <TabsContent value="faq" className="mt-4 sm:mt-6">
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Frequently asked questions will be displayed here.
                      </p>
                    </TabsContent>
                    <TabsContent value="reviews" className="mt-4 sm:mt-6">
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Course reviews will be displayed here.
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
          {/* Desktop Course Content Sidebar */}
          <div className="hidden lg:block">
            <CourseContentSidebar />
          </div>
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  )
}
