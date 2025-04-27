import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  
} from "@/components/ui/sidebar"
import Breadcrumbs from "@/components/common/BreadCrumb"
import { ThemeProvider } from "@/components/dashboard/theme/theme-provider"
import { ModeToggle } from "@/components/dashboard/theme/mode-toggel"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset >
          <header className="bg-sidebar flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumbs/>
            </div>
            <div className="px-4">
              <ModeToggle/>
            </div>
          </header>

          <Separator
            orientation="horizontal"
          />
          <main >
            {children}
          </main>
          
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}