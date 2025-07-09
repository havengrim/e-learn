import { AppSidebar } from "@/components/app-sidebar"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import { LearningSection } from "@/components/learning-section"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import TopCategories from "@/components/top-categories"
import TopCourses from "@/components/top-courses"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"


export default function Page() {
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
              <SectionCards />
              <div className="px-4 lg:px-6">
                <LearningSection />
              </div>
               <div className="px-4 lg:px-6">
                <Cta />
              </div>
              <div className="px-4 lg:px-6">
                <TopCategories />
              </div>
              <div className="px-4 lg:px-6">
                <TopCourses />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </SidebarInset>
      
    </SidebarProvider>
  )
}
