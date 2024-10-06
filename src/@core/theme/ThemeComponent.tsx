'use client';
import { ThemeProviderProps } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";
    
const customFont: NextFont = localFont({
  src: "../../../public/fonts/IRANSansWeb.woff2",
  display: "swap",
});
    
const theme = createTheme({
typography: {
    fontFamily: customFont.style.fontFamily,
  },
});
    
export const ThemeConfig: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
