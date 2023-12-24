import { Box, Divider, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        background={"purple.200"}
        padding={["40px 16px", "40px 152px"]}
      >
        <Text
          color="#fff"
          mb="10px"
          fontSize="12px"
          fontStyle="normal"
          fontWeight="600"
          lineHeight="normal"
          textAlign={["center", "left"]}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here, making it
          look like readable English. Many desktop publishing
        </Text>
        <Text color={"#fff"} fontSize="12px" textAlign={["center", "left"]}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here, making it
          look like readable English. Many desktop publishing
        </Text>
        <Text
          fontSize="12px"
          color={"#fff"}
          textAlign={["center", "left"]}
          marginTop={"24px"}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here, making it
          look like readable English. Many desktop publishing
        </Text>
      </Box>
    </Box>
  );
}
