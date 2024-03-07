import React, { useState, useMemo } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import ColorModeContext from "./context/ColorModeContext";
import { PaletteMode } from "@mui/material";
import HeadLayout from "./components/HeadLayout";
import FooterLayout from "./components/FooterLayout";
import PopularView from "./pages/Model/Popular";

const App = () => {
  const [mode, setMode] = useState<PaletteMode>(
    () => (localStorage.getItem("theme") as PaletteMode) || "light"
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === "dark" ? "light" : "dark";
        setMode(newMode);
        localStorage.setItem("theme", newMode);
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
              }
            : {
                // palette values for dark mode

                background: {
                  default: "#000000",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <Suspense fallback="">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            {/* <Menu /> */}
            <HeadLayout />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/model/popular" element={<PopularView />} />
            </Routes>
            <FooterLayout />
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Suspense>
  );
};
export default App;
