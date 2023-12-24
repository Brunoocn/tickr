import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export default function Main() {
  return (
    <Flex maxW="1500px" mx="auto" mt="110px" justify="center">
      <Flex flexDir={["column", "row"]} gap="40px" align="center" maxW="1500px">
        <Box>
          <Text fontSize="36px" lineHeight="57px" maxW="800px" color="blue.150">
            Venda seu ingresso com mais confiança e segurança! Maximize sua
            experiência de eventos.
          </Text>
          <Text mt="24px" fontSize="16px" color="gray.50" maxW="670px">
            Descubra a facilidade e a segurança em adquirir e vender ingressos
            com nossa plataforma líder de mercado.
          </Text>
          <Button
            maxW="250px"
            maxH="58px"
            py="22px"
            px="42px"
            my="36px"
            bg="purple.200"
            fontSize="14px"
            color="white"
            borderRadius="20px"
            transition="0.2s"
            _hover={{
              filter: "brightness(80%)",
            }}
          >
            Venda agora
          </Button>
        </Box>
        <Box maxW="750px">
          <Image
            src="/assets/cellphone-svg.svg"
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="8px"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
