"use client";

import * as React from "react";
import {
  TbDots,
  TbFolder,
  TbShare3,
  TbTrash,
} from "react-icons/tb";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

interface NavDocumentsItem {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface NavDocumentsProps {
  items: NavDocumentsItem[];
}

const NavDocumentsComponent = ({ items }: NavDocumentsProps) => {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <SidebarMenu>
        {items.map(({ name, url, icon: Icon }) => (
          <SidebarMenuItem key={name}>
            <SidebarMenuButton asChild>
              <a href={url} className="flex items-center gap-2">
                <Icon className="w-5 h-5" aria-hidden="true" />
                <span>{name}</span>
              </a>
            </SidebarMenuButton>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction
                  showOnHover
                  className="data-[state=open]:bg-accent rounded-sm"
                  aria-label={`More actions for ${name}`}
                >
                  <TbDots className="w-5 h-5" />
                </SidebarMenuAction>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-24 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <TbFolder className="mr-2 w-5 h-5" />
                  <span>Open</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <TbShare3 className="mr-2 w-5 h-5" />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <TbTrash className="mr-2 w-5 h-5" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}

        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70 flex items-center gap-2">
            <TbDots className="w-5 h-5 text-sidebar-foreground/70" aria-hidden="true" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export const NavDocuments = React.memo(NavDocumentsComponent);
