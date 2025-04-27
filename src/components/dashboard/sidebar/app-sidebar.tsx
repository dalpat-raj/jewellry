"use client"

import * as React from "react"
import {
  BaggageClaim,
  Frame,
  Gem,
  Image,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  Workflow,
} from "lucide-react"


import NavProjects from "@/components/dashboard/sidebar/nav-projects"
import NavUser from "@/components/dashboard/sidebar/nav-user"
import Logo_Dashboard from "@/components/dashboard/sidebar/logo-dashboard"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SimpleLink } from "@/components/dashboard/sidebar/simple-link"
import NavMain from "./nav-main"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "mddd@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  dashboard: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Orders",
      url: "/dashboard/orders",
      icon: BaggageClaim,
    },
  ],
  navMain: [
    {
      title: "Products",
      url: "/dashboard/products",
      icon: Gem,
      isActive: false,
      items: [
        {
          title: "Create Product",
          url: "/dashboard/products/create-product",
        },
        {
          title: "Edit Product",
          url: "/dashboard/products/edit-product",
        },
      ],
    },
    {
      title: "Banner",
      url: "/dashboard/banner",
      icon: Image,
      items: [
        {
          title: "Create Banner",
          url: "/dashboard/banner/create-banner",
        }
      ],
    },
    {
      title: "Collections",
      url: "/dashboard/collections",
      icon: Workflow,
      items: [
        {
          title: "Create Collection",
          url: "/dashboard/create-collection",
        }
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "/raj",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo_Dashboard />
      </SidebarHeader>
      <SidebarContent>
        <SimpleLink projects={data.dashboard} />
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
