"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbLinks = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    return {
      name: segment.replace(/-/g, " "),
      href,
    };
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbLinks.map((item, index) => {
          const isLast = index === breadcrumbLinks.length - 1;
          return (
            <div key={index} className="flex items-center gap-1">
              <BreadcrumbItem className="hidden md:block">
                {isLast ? (
                  <BreadcrumbPage className="capitalize">{item.name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.href} className="capitalize">
                      {item.name}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator className="hidden md:block"/>}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
