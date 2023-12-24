import { Box, Flex, Text, Image } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <Flex
      maxW="1200px"
      mx="auto"
      justify="center"
      gap="70px"
      mt={["64px", "90px"]}
      mb={["64px", "120px"]}
      flexDir={["column", "column", "row"]}
      p="17px"
      align="center"
    >
      <Box maxW="750px">
        <Text fontSize={["24px", "32px"]} color="primary" fontWeight="600">
          Sobre nossa plataforma
        </Text>
        <Text mt="18px" color="#718096">
          Vender seu ingresso é a nossa missão!
        </Text>
        <Text mt="18px" color="#718096">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </Text>
        <Text mt="18px" color="#718096">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </Text>
      </Box>
      <Flex justify="center" h={["300px"]}>
        <Image
          src="/assets/tickr-image.svg"
          h="100%"
          w="100%"
          objectFit="cover"
          borderRadius="8px"
        />
      </Flex>
    </Flex>
  );
}
