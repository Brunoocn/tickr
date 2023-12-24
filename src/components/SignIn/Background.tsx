import { Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Background() {
  return (
    <>
      <Link href='/'>
        <Image
          src="/assets/logo-tickr-svg.svg"
          alt="logo"
          position="fixed"
          top="20px"
          left={["130px", "20px"]}
        />
      </Link>
      <Image
        src="/assets/vector-l.svg"
        alt="bubble"
        position="fixed"
        bottom="-10%"
        maxW="400px"
        left="0"
        visibility={["hidden", "visible", "visible"]}
      />
      <Image
        src="/assets/vector-r.svg"
        alt="bubble"
        position="fixed"
        top="-10%"
        maxW="400px"
        right="0"
        visibility={["hidden", "visible", "visible"]}
      />
    </>
  );
}
