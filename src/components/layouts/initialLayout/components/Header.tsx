'use client';

import Line from '@/components/molecules/line';
import { HEADER } from '@/constants/routes';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from '@heroui/react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <Navbar
      className="bg-transparent outline-none shadow-none border-none"
      disableAnimation
      maxWidth="xl"
    >
      <NavbarContent className="sm:hidden text-white" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit px-2 py-1.5 bg-primary">
            ONLINE PORTOFOLIO
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit px-2 py-1.5 bg-primary">
            ONLINE PORTOFOLIO
          </Link>
        </NavbarBrand>
        {HEADER.map((item, index) => {
          const isActive = pathname === item.route;

          return (
            <NavbarItem key={index} isActive={isActive}>
              <Link href={item.route} className={`${isActive ? 'text-primary' : 'text-white'}`}>
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <Line isLeft={false} className="w-2/3" />
      </NavbarContent>

      <NavbarMenu>
        {HEADER.map((item, index) => {
          const isActive = pathname === item.route;
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`${isActive ? 'text-primary' : 'text-white'} w-full`}
                href={item.route}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
