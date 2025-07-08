"use client";

import * as React from "react";
import { TbPlus, TbMail } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface NavMainItem {
  title: string;
  url: string;
  icon?: IconComponent;
}

interface NavMainProps {
  items: NavMainItem[];
}

const NavMainComponent = ({ items }: NavMainProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/90 min-w-8 duration-200 ease-linear"
            >
              <TbPlus className="w-5 h-5" />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="w-8 h-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
              aria-label="Inbox"
            >
              <TbMail className="w-5 h-5" />
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu>
          {items.map(({ title, icon: Icon }) => (
            <SidebarMenuItem key={title}>
              <SidebarMenuButton tooltip={title} asChild>
                <a href="#" className="flex items-center gap-2">
                  {Icon && <Icon className="w-5 h-5" />}
                  <span>{title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export const NavMain = React.memo(NavMainComponent);
