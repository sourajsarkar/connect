import { ViewIcon } from '@chakra-ui/icons'
import { Button, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const ProfileModel = ({user, children}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        {children ? (<span onClick={onOpen}>{children}</span>) : (
            <IconButton display={{base:"flex"}} icon={<ViewIcon/>} onClick={onOpen}></IconButton>
        )}

        <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
        <ModalOverlay />
        <ModalContent height={"410px"}>
          <ModalHeader fontSize={"40px"} fontWeight="900" display={"flex"} justifyContent={"center"} fontFamily="Work sans">{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
            <Image borderRadius={"full"} boxSize={"150px"} src={user.pic} alt={user.name}></Image>
            <Text fontSize={{base:"28px", md:"30px"}} fontFamily="Work sans">{user.email}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileModel