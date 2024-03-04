"use client"
import React, { useRef, useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import ModalReserve from "./modal";



export default function ItemList({ items }) {
  const onOpenRef = useRef(null);
  const [selected, setSelected] = useState(items[0]);

  return (
    <div style={{ height: "85%", overflow: "auto" }}>
      <ListboxWrapper>
        <Listbox
          items={items}
          aria-label="Dynamic Actions"
          onAction={(item) => {
            setSelected(item);
            onOpenRef.current()
          }}
        >
          {(item) => (
            <ListboxItem
              key={item.number}
              color={item.number === "delete" ? "danger" : "default"}
              className={item.number === "delete" ? "text-danger" : ""}
            >
              R: {item.number}
            </ListboxItem>
          )}
        </Listbox>
      </ListboxWrapper>
      <ModalReserve onOpenRef={onOpenRef} selected={selected}></ModalReserve>
    </div>
  );
}
