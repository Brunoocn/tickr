import { Flex, Text, Box, Image } from "@chakra-ui/react";
import { benefitsData } from "../data";

type IBenefit = {
  icon: string;
  title: string;
  description: string;
};

export default function Benefits() {
  return (
    <Box mx="auto" maxW={["356px", "1200px"]}>
      <Flex
        maxW={["356px", "1200px"]}
        mx="auto"
        mb={["64px", "120px"]}
        px={["32px", "64px"]}
        pb={["32px", "64px"]}
        justify="center"
        flexDir="column"
        borderRadius="8px"
      >
        <Text
          color="#000"
          align="center"
          mt="64px"
          fontSize={["24px", "32px"]}
          fontWeight="600"
          mb="42px"
        >
          Veja aqui os benefícios de vender seu ingresso conosco!
        </Text>

        <Box display="grid" gridTemplateColumns={["1fr", "2fr 2fr"]} gap="30px">
          {benefitsData.map((benefit: IBenefit, key: number) => (
            <Flex
              key={key}
              background="linear-gradient(to right bottom, #8b08f4, #a105f5, #b605f6, #c909f7, #db11f8)"
              p={["15px 20px", "20px 15px"]}
              maxW={["290px", "550px"]}
              borderRadius="8px"
              align="center"
              mx="auto"
            >
              <Flex align="center" gap="20px" flexDir={["column", "row"]}>
                <Flex
                  background="#fff"
                  borderRadius="50%"
                  align="center"
                  justify="center"
                  minW="75px"
                  minH="75px"
                >
                  <Image src={benefit.icon} w="36px" />
                </Flex>
                <Flex flexDir="column">
                  <Text
                    color="#fff"
                    fontWeight="600"
                    mb="4px"
                    textAlign={["center", "left"]}
                    maxW="250px"
                  >
                    {benefit.title}
                  </Text>
                  <Text
                    color="#fff"
                    fontSize="14px"
                    fontWeight="400"
                    textAlign={["center", "left"]}
                  >
                    {benefit.description}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
