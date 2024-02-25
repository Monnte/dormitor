"use client"
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";

export default function ItemList() {
  const items = [
    {
      number: "0812",
    },
    {
      number: "0813",
    },
    {
      number: "0814",
    },
    {
      number: "0815",
    }
  ];

  return (
    <ListboxWrapper>
      <Listbox
        items={items}
        aria-label="Dynamic Actions"
        onAction={(key) => alert(key)}
      >
        {(item) => (
          <ListboxItem
            key={item.number}
            color={item.number === "delete" ? "danger" : "default"}
            className={item.number === "delete" ? "text-danger" : ""}
          >
            {item.number}
          </ListboxItem>
        )}
      </Listbox>
    </ListboxWrapper>
  );
}
