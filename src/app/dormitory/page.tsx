"use client"
import { Button, Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";
import { Title } from "../Title";


export default function Dormitory() {
    return (
        <div className="flex flex justify-center items-center h-screen">
            <div className="flex w-1/2 flex-col gap-4">
            <Title></Title>
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        className="p-0" 
                        variant="bordered" 
                    >
                        Select Dormitory
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem>Dormitory 1</DropdownItem>
                    <DropdownItem>Dormitory 2</DropdownItem>
                    <DropdownItem>Dormitory 3</DropdownItem>
                    <DropdownItem>Dormitory 4</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>
        </div>
    );
}