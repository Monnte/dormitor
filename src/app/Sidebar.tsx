'use client';

import { Card, Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import ItemList from "./ItemList";
import react, { useEffect, useState } from "react";


export default function Sidebar() {

    const [items, setItems] = useState([]);
    const roomNumber = 10;
    const floors = 6;


    let def = [];
    for (let i = 1; i < floors + 1; i++) {
        for (let j = 0; j < roomNumber; j++) {
            def.push({ number: "0" + i + j.toString().padStart(2, "0") });
        }
    }

    useEffect(() => {
        setItems(def);
    }
    , []);



    const filterItems = (value) => {
        let filtered = def.filter((item) => {
            return item.number.toLowerCase().includes(value.toLowerCase());
        });
        setItems(filtered);
    };

    return (
        <Card className="box-border p-3 h-full w-full">
            <Input
                classNames={{
                    base: "h-10 mb-3",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
                fullWidth={true}
                onChange={(e) => {
                    filterItems(e.target.value);
                }}
            />
            <ItemList items={items}></ItemList>
        </Card>
    );
}