import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Mobile_Menu_List() {
  return (
    <ul className="w-full inline-flex max-lg:inline-block flex-wrap min-lg:gap-8 min-lg:gap-y-0 text-[14px] font-normal text-center max-lg:text-left">
      <li className="bg-[#e3e3e3] text-[var(--black)] uppercase text-center text-[13px] border-b-2 border-[#4a4a4a] px-4 py-[14px]">
        Menu
      </li>

      <li className="text-[var(--black)] hover:bg-[var(--bg-menu-link)] border-b-1 border-gray-300 px-4 transition-colors duration-300">
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                <Link href={"/"}>Best Sellet</Link>
            </AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            </AccordionItem>
        </Accordion>
      </li>
      
      <li className="text-[var(--black)] hover:bg-[var(--bg-menu-link)] border-b-1 border-gray-300 px-4 transition-colors duration-300 py-[14px]">
        <Link href={"/"}>Lab Grown Diamond</Link>
      </li>
      <Link href={"/"}>
        <li className="w-full text-[var(--black)] hover:bg-[var(--bg-menu-link)] border-b-1 border-gray-300 px-4 transition-colors duration-300 py-[14px]">
        Emily In Paris
        </li>
      </Link>
      <li className="text-[var(--black)] hover:bg-[var(--bg-menu-link)] border-b-1 border-gray-300 px-4 transition-colors duration-300 py-[14px]">
        <Link href={"/"} className="w-[100%]">Collection</Link>
      </li>
      <li className="text-[var(--black)] hover:bg-[var(--bg-menu-link)] border-b-1 border-gray-300 px-4 transition-colors duration-300 py-[14px]">
        <Link href={"/"}>Shop By</Link>
      </li>
      <li className="text-[var(--black)] hover:bg-[var(--bg-menu-link)] border-b-1 border-gray-300 px-4 transition-colors duration-300 py-[14px]">
        <Link href={"/"}>Gifting</Link>
      </li>
      <li className="text-[var(--black)] hover:bg-[var(--bg-menu-link)] border-b-1 border-gray-300 px-4 transition-colors duration-300 py-[14px]">
        <Link href={"/"}>Track Order</Link>
      </li>
      <li className="text-[var(--black)] hover:bg-[var(--bg-menu-link)] border-b-1 border-gray-300 px-4 transition-colors duration-300 py-[14px]">
        <Link href={"/"}>Return & Exchange</Link>
      </li>
      <li className="text-[var(--black)] hover:bg-[var(--bg-menu-link)] border-b-1 border-gray-300 px-4 transition-colors duration-300 py-[14px]">
        <Link href={"/"}>About Us</Link>
      </li>
    </ul>
  );
}
