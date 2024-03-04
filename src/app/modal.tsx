'use client';
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
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
              <ModalHeader className="flex flex-col gap-1">Room: {selected}</ModalHeader>
              <ModalBody>
                {/* tow columns one text and other image */}
                <div className="flex flex-row gap-2">
                  <div className="flex flex-col gap-2">
                    <div>Room: {selected}</div>
                    <div>Capacity: 5</div>
                    <div>Price: 1000</div>
                    <div>Projector: Yes</div>
                    <div>Whiteboard: Yes</div>
                    <div>Wifi: Yes</div>
                    <div>AC: Yes</div>
                  </div>
                  <div>
                    <img 
                    src="https://media.istockphoto.com/id/492965853/photo/university-college-dorm-room-with-bunkbeds-empty-unoccupied-student-bedroom.jpg?s=612x612&w=0&k=20&c=se0Dsy9AwP240fgPs10Fz39uPZR8PgPYn8hiFwhZf58=" alt="room image" />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
