'use client';

import { Divider } from "@nextui-org/react";
import { Card, Input, Select, SelectItem } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import ItemList from "./ItemList";
import { useEffect, useState, useContext } from "react";
import { data } from "./data/data";
import { UIContext } from "./providers";


export default function Sidebar() {
    const { currentFloor, currentBlock, setCurrentFloor, setCurrentBlock } = useContext(UIContext);
    const [items, setItems] = useState([]);
    const [defaultItems, setDefaultItems] = useState([]);


    useEffect(() => {
        // get all rooms from all floors
        let allRooms = [];
        for (let i = 0; i < data[currentBlock].details.length; i++) {

            allRooms = allRooms.concat(
                data[currentBlock].details[i].map((item) => {
                    return {
                        floor: i,
                        ...item,
                        title: (i + 1).toString().padStart(2, "0") + item.number.toString().padStart(2, "0"),
                    };
                })
            );
        }
        setItems(allRooms);
        setDefaultItems(allRooms);
    }
        , [currentBlock]);



    const filterItems = (value) => {
        let filtered = defaultItems.filter((item: {title: string}) => {
            return item.title.toLowerCase().includes(value.toLowerCase());
        })
        setItems(filtered);
    };

    return (
        <Card className="box-border p-3 w-full" style={{ maxHeight: "calc(90vh - 4rem)" }}>
            <Select
                label="Select a block"
                defaultSelectedKeys={[data[currentBlock].block]}
            >
                {data.map((item, i) => {
                    return <SelectItem
                        key={item.block}
                        value={item.block}
                        onClick={() => {setCurrentBlock(i);setCurrentFloor(0)}}
                    >{item.block}</SelectItem>
                })}
            </Select>
            <Divider className="my-3" />
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
            <ItemList items={items}

            ></ItemList>
        </Card>
    );
}