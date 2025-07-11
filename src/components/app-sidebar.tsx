"use client";

import * as React from "react";
import {
  TbChartBar,
  TbDashboard,
  TbFolder,
  TbHelp,
  TbInnerShadowTop,
  TbListDetails,
  TbSearch,
  TbSettings,
  TbUsers,
} from "react-icons/tb";

import { Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "@/components/nav-user";

// Sidebar data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { title: "Dashboard", url: "/dashboard", icon: TbDashboard },
    { title: "Lifecycle", url: "/lifecycle", icon: TbListDetails },
    { title: "Analytics", url: "/analytics", icon: TbChartBar },
    { title: "Projects", url: "/projects", icon: TbFolder },
    { title: "Team", url: "/team", icon: TbUsers },
  ],
  navSecondary: [
    { title: "Settings", url: "/settings", icon: TbSettings },
    { title: "Get Help", url: "/help", icon: TbHelp },
    { title: "Search", url: "/search", icon: TbSearch },
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
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]: !p-1.5">
              <Link to="/" className="flex items-center gap-2">
                <TbInnerShadowTop className="w-5 h-5" aria-hidden="true" />
                <span className="text-base font-semibold ">Acme Inc.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {data.navMain.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link to={item.url} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  {item.title}
                </Link> 
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>



        <SidebarMenu className="mt-auto">
          {data.navSecondary.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link to={item.url} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  {item.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
});
