"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "interrupts",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "progress.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually ",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "displayed",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "over it.",
  },
]

export default function Menu_List() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}, text-[var(--h-text-color)] hover:text-[var(--hover-color)] hover:bg-none transition-colors duration-300`}>
            New Arrivals
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}, text-[var(--h-text-color)] hover:text-[var(--hover-color)] hover:bg-none transition-colors duration-300`}>
            Best Seller
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}, text-[var(--h-text-color)] hover:text-[var(--hover-color)] hover:bg-none transition-colors duration-300`}>
            Lab Grown Diamond
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}, text-[var(--h-text-color)] hover:text-[var(--hover-color)] hover:bg-none transition-colors duration-300`}>
            Emily In paris
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[var(--h-text-color)] hover:text-[var(--hover-color)] text-sm hover:bg-none transition-colors duration-300">Category</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[var(--h-text-color)] hover:text-[var(--hover-color)] text-sm hover:bg-none transition-colors duration-300">Shop By</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex justify-between gap-12 p-4 ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}, text-[var(--h-text-color)] hover:text-[var(--hover-color)] hover:bg-none transition-colors duration-300`}>
            Gifting
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}, text-[var(--h-text-color)] hover:text-[var(--hover-color)] hover:bg-none transition-colors duration-300`}>
            Track Order
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}, text-[var(--h-text-color)] hover:text-[var(--hover-color)] hover:bg-none transition-colors duration-300`}>
            Return & Exchange
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
           <NavigationMenuTrigger className="text-[var(--h-text-color)] hover:text-[var(--hover-color)] text-sm hover:bg-none transition-colors duration-300 ">About Us</NavigationMenuTrigger>
           <NavigationMenuContent>
            <NavigationMenuLink asChild >
              <Link
                href={"/"}
                className="block select-none space-y-2 rounded-md outline-none w-[150px]"
              >
              About Us
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild >
              <Link
                href={"/"}
                className="block select-none space-y-2 rounded-md outline-none w-[150px]"
              >
              Blogs
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild >
              <Link
                href={"/"}
                className="block select-none space-y-2 rounded-md outline-none w-[150px]"
              >
              Contact Us
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild >
              <Link
                href={"/"}
                className="block select-none space-y-2 rounded-md outline-none w-[150px]"
              >
              Store & Services
              </Link>
            </NavigationMenuLink>
           </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string
  href: string
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild >
        <Link
          href={href}
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md outline-none w-[150px] ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
