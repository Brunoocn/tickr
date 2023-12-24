"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { stepsData } from "../data";

type IStep = {
  title: string;
  description: string;
  step: string;
};

export default function Steps() {
  return (
    <Flex
      w="100%"
      justify="center"
      p={["32px 17px 0px 17px", "20px"]}
      mt={["0", "86px"]}
    >
      <Flex
        background="linear-gradient(to right bottom, #8b08f4, #a105f5, #b605f6, #c909f7, #db11f8)"
        borderRadius="8px"
        maxW={"1200px"}
        justify="center"
        flexDir="column"
        w="100%"
        align="center"
      >
        <Text
          color="white"
          textAlign="center"
          fontSize={["24px", "36px"]}
          maxW={["290px", "900px"]}
          mt="64px"
          fontWeight="600"
        >
          Veja só como é rápido e fácil realizar a venda de um ingresso conosco.
        </Text>

        <Flex gap="15px" flexDir="column" mt="50px" mb={["32px", "64px"]}>
          {stepsData.map((step: IStep, index: number) => (
            <>
              <Flex
                background="#fff"
                p={["28px", "20px 30px"]}
                borderRadius="8px"
                align="center"
                justify="center"
                mx="auto"
                maxW={["300px", "570px"]}
              >
                <Flex align="center" gap="20px" flexDir={["column", "row"]}>
                  <Flex
                    rounded="50%"
                    bgGradient="linear-gradient(to right bottom, #8b08f4, #a105f5, #b605f6, #c909f7, #db11f8)"
                    p="3px"
                    align="center"
                  >
                    <Flex
                      bg="white"
                      rounded="50%"
                      minW="86px"
                      minH="86px"
                      align="center"
                      justify="center"
                    >
                      <Text
                        bg="linear-gradient(to right bottom, #8b08f4, #a105f5, #b605f6, #c909f7, #db11f8)"
                        bgClip="text"
                        fontWeight="600"
                        fontSize="32px"
                      >
                        {step.step}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir="column"
                    justify="center"
                    align={["center", "start"]}
                  >
                    <Text
                      bg="linear-gradient(to right bottom, #8b08f4, #a105f5, #b605f6, #c909f7, #db11f8)"
                      bgClip="text"
                      fontWeight="600"
                      mb="4px"
                      textAlign={["center", "left"]}
                      maxW="250px"
                    >
                      {step.title}
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="400"
                      textAlign={["center", "left"]}
                      color="#131313"
                    >
                      {step.description}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              {stepsData.length - 1 !== index && (
                <Box w="2px" display="flex" bg="#fff" mx="auto" height="15px" />
              )}
            </>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
