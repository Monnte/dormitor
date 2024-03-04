'use client';
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";

export default function ModalReserve({ onOpenRef, selected }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  onOpenRef.current = onOpen;

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
              
                <Card className="py-4">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">Room: {selected?.number}</h4>

                  <img
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src="/dormimg.jpg"
                      style={{ width: "100%", height: "200px", margin: "0 auto" }}
                    />
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                  <p>Area: {selected?.area} m2</p>
                  <p>Persons: {selected?.persons}</p>
                  <p>Occupied: {selected?.occupied ? "Yes" : "No"}</p>
                  <p>People: {selected?.people?.join(", ")}</p>

                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Make reservation
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
