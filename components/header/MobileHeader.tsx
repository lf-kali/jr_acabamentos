import Logo from "@/public/JRiso.svg"
import MenuIcon from "@/public/menuIcon.svg"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { mainMenu, type MenuComponent } from "@/components/menu/menu.config"
import Link from "next/link"
import { Button } from '@/components/ui/button';

function MobileHeader() {
  return (
    <header className="sticky h-20 w-full flex dark:bg-black not-dark:bg-white">
      <nav className="h-full flex flex-row items-center justify-between px-5 w-full">
        <div className="flex flex-row cursor-pointer items-end gap-1 text-foreground">
          <Logo className="h-14" />
          <h1 className="font-mont font-extrabold text-xl">Acabamentos</h1>
        </div>

        <Sheet>
          <SheetTrigger>
            <div className="flex self-center">
              <MenuIcon className="h-6.5 mt-4 cursor-pointer" />
            </div>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
            </SheetHeader>
            <div className="mt-4 px-4">
              <MenuList items={mainMenu} />
            </div>
            <Button className="my-10">
              FAÇA SEU ORÇAMENTO
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

function MenuList({ items }: { items: MenuComponent[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) =>
        item.children ? (
          <AccordionItem key={item.title} value={item.title}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-2 pl-4">
                {item.children.map((child) => (
                  <li key={child.title}>
                    <Link href={child.path ?? "#"}>{child.title}</Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ) : (
          <div key={item.title} className="py-3 border-b">
            <Link href={item.path ?? "#"}>{item.title}</Link>
          </div>
        )
      )}
    </Accordion>
  )
}

export default MobileHeader