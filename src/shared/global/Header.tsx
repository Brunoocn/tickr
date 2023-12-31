"use client";
import Link from "next/link";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      maxW="1200px"
      justify="center"
      background="#fff"
      mx="auto"
      alignItems="center"
      justifyContent="space-between"
      height="80px"
      px={["20px", "0"]}
    >
      <Image
        src={`/assets/logo-tickr-svg.svg`}
        alt="logo"
        height="80px"
        width="auto"
        padding="15px 0"
        cursor="pointer"
      />

      <Link href="/auth/signin">
        <Button
          background="purple.200"
          transition="0.2s"
          borderRadius="4px"
          width="173px"
          height="44px"
          gap="10px"
          color={"#fff"}
          _hover={{
            filter: "brightness(80%)",
          }}
        >
          Entrar
        </Button>
      </Link>
    </Flex>
  );
}
