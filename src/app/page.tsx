import { Box } from "@chakra-ui/react";
import Header from "@/shared/global/Header";
import Main from "@/components/Home/sections/Main";
import Steps from "@/components/Home/sections/Steps";
import AboutUs from "@/components/Home/sections/AboutUs";
import Benefits from "@/components/Home/sections/Benefits";
import Footer from "@/shared/global/Footer";

export default function Home() {
  return (
    <Box bg="white">
      <Header />
      <Main />
      <Steps />
      <AboutUs />
      <Benefits />
      <Footer />
    </Box>
  );
}
