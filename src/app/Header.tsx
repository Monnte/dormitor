"use client"
import React from "react";
import {
  Navbar, NavbarBrand, Button,
  NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Image
} from "@nextui-org/react";


const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image src="dorm.png" width={40} height={40} alt="logo" />
        <p className="font-bold text-inherit ml-5">Dormitor </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  radius="sm"
                  variant="light"
                  endContent={<ChevronDown fill="currentColor" size={16} />}
                >
                  Účet
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="Udaje"
                description="Možnost změny hesla, emailu a dalších údajů."
              >
                Základní údaje
              </DropdownItem>
              <DropdownItem
                key="Konta"
                description="Jednoduché spravování kont."
              >
                Konta
              </DropdownItem>
              <DropdownItem
                key="Karty"
                description="Zoznam karet a možnost přidání nové karty."
              >
                Karty
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem isActive>
        <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  radius="sm"
                  variant="light"
                  endContent={<ChevronDown fill="currentColor" size={16} />}
                >
                  Ubytovaní
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="Prehled"
                description="Prehled aktuálních a minulých ubytovaní."
              >
                Prehled ubytovaní
              </DropdownItem>
              <DropdownItem
                key="Rezervace"
                description="Rezervace ubytovaní."
              >
                Rezervace
              </DropdownItem>
              <DropdownItem
                key="Zadosti"
                description="Žádosti o ubytovaní a poradovníky."
              >
                Zǎdosti o ubytovaní
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Informace
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Prihlášený uživatel</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Moje nastavení</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
