import { Box } from "@chakra-ui/react";
import Header from "@/shared/global/Header";
import Main from "@/components/Home/sections/Main";
import { Steps } from "@/components/Home/sections/Steps";

export default function Home() {
  return (
    <Box bg="white">
      <Header />
      <Main />
      <Steps />
    </Box>
  );
}
