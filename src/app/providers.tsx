"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const designSystem = {
    fontSizes: {
      lg: "18px",
    },
    colors: {
      gray: {
        50: "#717171",
      },
      blue: {
        150: "#132053",
      },
      purple: {
        150: "##DB11F8",
        200: "#8B08F4",
      },
    },
  };

  const breakpoints = {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  };

  const _theme = extendTheme({ breakpoints, ...designSystem });

  return <ChakraProvider theme={_theme}>{children}</ChakraProvider>;
}
