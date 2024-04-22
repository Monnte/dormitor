"use client"
import React, { useRef, useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import ModalReserve from "./modal";
import { UIContext } from "./providers";
import { useContext } from "react";
import { data } from "./data/data";


export default function ItemList({ items }) {
  const { currentFloor, currentBlock, setCurrentFloor, setCurrentBlock } = useContext(UIContext);
  const onOpenRef = useRef(null);
  const [selected, setSelected] = useState(items[0]);

  return (
    <div style={{ overflow: "auto" }}>
      <ListboxWrapper>
        <Listbox
          items={items}
          aria-label="Dynamic Actions"

        >
          {/* {(item) => (
            <ListboxItem
              key={i}
            >
              R: {(item.floor + 1).toString().padStart(2, "0")}{item.number.toString().padStart(2, "0")}
            </ListboxItem>
          )} */}
          {items.map((item, i) => (
            <ListboxItem
              key={i}
              onClick={() => {
                setCurrentFloor(item.floor);
                setSelected(item);
                onOpenRef.current();
              }}
            >
              {item.title}
            </ListboxItem>
          ))}
        </Listbox>
      </ListboxWrapper>
      <ModalReserve onOpenRef={onOpenRef} selected={selected}></ModalReserve>
    </div>
  );
}
