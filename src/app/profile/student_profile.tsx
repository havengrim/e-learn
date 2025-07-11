"use client"

import type React from "react"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Camera, Eye, Download, Play } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

// Simplified data
const currentLearnings = [
  {
    id: 1,
    title: "Advanced React Patterns",
    progress: 65,
    lessons: "16/24",
  },
  {
    id: 2,
    title: "TypeScript Masterclass",
    progress: 30,
    lessons: "5/18",
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    progress: 85,
    lessons: "17/20",
  },
]

const certificates = [
  {
    id: 1,
    title: "React Fundamentals",
    date: "March 2024",
    previewUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "JavaScript ES6+ Mastery",
    date: "February 2024",
    previewUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    date: "January 2024",
    previewUrl: "/placeholder.svg?height=400&width=600",
  },
]

export default function Page() {
  const [profileImage, setProfileImage] = useState("/placeholder.svg")
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  })

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePasswordChange = () => {
    console.log("Password change requested")
    setPasswords({ current: "", new: "", confirm: "" })
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
            <div className="flex flex-col gap-8 py-8 px-6 mx-auto w-full">
              {/* Minimalist Profile Header */}
              <div className="flex items-center gap-6 bo">
                <div className="relative group">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={profileImage || "/placeholder.svg"} />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                    <label htmlFor="profile-upload" className="cursor-pointer">
                      <Camera className="h-5 w-5 text-white" />
                      <input
                        id="profile-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-medium">John Doe</h1>
                  <p className="text-gray-600 mt-1">Student since March 2024</p>
                  <div className="flex gap-3 mt-3">
                    <Badge variant="outline">UI/UX Designer</Badge>
                    <Badge variant="outline">React Developer</Badge>
                  </div>
                </div>
              </div>

              {/* Simple Stats */}
              <div className="grid grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-medium">8</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-medium">3</div>
                  <div className="text-sm text-gray-600">In Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-medium">127h</div>
                  <div className="text-sm text-gray-600">Learning Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-medium">5</div>
                  <div className="text-sm text-gray-600">Certificates</div>
                </div>
              </div>

              {/* Clean Tabs */}
              <Tabs defaultValue="learnings">
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="learnings">My Learnings</TabsTrigger>
                  <TabsTrigger value="certificates">Certificates</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                {/* My Learnings Tab */}
                <TabsContent value="learnings" className="space-y-6">
                  <div className="space-y-4">
                    {currentLearnings.map((course) => (
                      <Card key={course.id} className="border-0 shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="font-medium">{course.title}</h3>
                              <p className="text-sm text-gray-600 mt-1">{course.lessons} lessons</p>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Play className="h-4 w-4 mr-2" />
                              Continue
                            </Button>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Certificates Tab */}
                <TabsContent value="certificates" className="space-y-6">
                  <div className="space-y-4">
                    {certificates.map((cert) => (
                      <Card key={cert.id} className="border-0 shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">{cert.title}</h3>
                              <p className="text-sm text-gray-600 mt-1">{cert.date}</p>
                            </div>
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <Eye className="h-4 w-4 mr-2" />
                                    Preview
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl">
                                  <DialogHeader>
                                    <DialogTitle>{cert.title}</DialogTitle>
                                  </DialogHeader>
                                  <div className="mt-4">
                                    <img
                                      src={cert.previewUrl || "/placeholder.svg"}
                                      alt={`${cert.title} Certificate`}
                                      className="w-full h-auto rounded-lg"
                                    />
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Personal Information */}
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg font-medium">Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName" className="text-sm">
                              First Name
                            </Label>
                            <Input id="firstName" defaultValue="John" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="lastName" className="text-sm">
                              Last Name
                            </Label>
                            <Input id="lastName" defaultValue="Doe" className="mt-1" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm">
                            Email
                          </Label>
                          <Input id="email" type="email" defaultValue="john@example.com" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="location" className="text-sm">
                            Location
                          </Label>
                          <Input id="location" defaultValue="San Francisco, CA" className="mt-1" />
                        </div>
                        <Button className="w-full mt-6">Save Changes</Button>
                      </CardContent>
                    </Card>

                    {/* Password Change */}
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg font-medium">Change Password</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="currentPassword" className="text-sm">
                            Current Password
                          </Label>
                          <Input
                            id="currentPassword"
                            type="password"
                            value={passwords.current}
                            onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="newPassword" className="text-sm">
                            New Password
                          </Label>
                          <Input
                            id="newPassword"
                            type="password"
                            value={passwords.new}
                            onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="confirmPassword" className="text-sm">
                            Confirm Password
                          </Label>
                          <Input
                            id="confirmPassword"
                            type="password"
                            value={passwords.confirm}
                            onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                        <Button
                          className="w-full mt-6"
                          onClick={handlePasswordChange}
                          disabled={!passwords.current || !passwords.new || passwords.new !== passwords.confirm}
                        >
                          Update Password
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  )
}
