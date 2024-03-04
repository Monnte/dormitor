'use client'

import { NextUIProvider } from '@nextui-org/react'
import React, { createContext, useContext, useState } from 'react'

export const UIContext = createContext({ currentFloor: 0, currentBlock: 0, setCurrentFloor: (floor: number) => { }, setCurrentBlock: (block: number) => { } })

export function Providers({ children }: { children: React.ReactNode }) {
  const [currentFloor, setCurrentFloor] = useState(0)
  const [currentBlock, setCurrentBlock] = useState(0)

  return (
    <UIContext.Provider value={{ currentFloor: currentFloor, setCurrentFloor, currentBlock, setCurrentBlock }}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </UIContext.Provider>
  )
}