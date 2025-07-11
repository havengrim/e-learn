import { AppSidebar } from "@/components/app-sidebar"
import Footer from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import ProfileHeader from "./profile-header"
import ProfileContent from "./profile-content"


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
       
              <div className="px-4 lg:px-6">
                <ProfileHeader />
                <ProfileContent className="mt-4"/>
              </div>
            
            </div>
          </div>
        </div>
        <Footer />
      </SidebarInset>
      
    </SidebarProvider>
  )
}
