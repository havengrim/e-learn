"use client";

import * as React from "react";
import {
  TbChartBar,
  TbDashboard,
  TbDatabase,
  TbFolder,
  TbHelp,
  TbInnerShadowTop,
  TbListDetails,
  TbSearch,
  TbSettings,
  TbUsers,
} from "react-icons/tb";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { title: "Dashboard", url: "#", icon: TbDashboard },
    { title: "Lifecycle", url: "#", icon: TbListDetails },
    { title: "Analytics", url: "#", icon: TbChartBar },
    { title: "Projects", url: "#", icon: TbFolder },
    { title: "Team", url: "#", icon: TbUsers },
  ],
  navSecondary: [
    { title: "Settings", url: "#", icon: TbSettings },
    { title: "Get Help", url: "#", icon: TbHelp },
    { title: "Search", url: "#", icon: TbSearch },
  ],
  documents: [
    { name: "Data Library", url: "#", icon: TbDatabase },
  ],
};

export const AppSidebar = React.memo(function AppSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#" className="flex items-center gap-2">
                <TbInnerShadowTop className="w-5 h-5" aria-hidden="true" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
});
