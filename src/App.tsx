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
        },
      }),
    [mode]
  );

  return (
    <Suspense fallback="loading">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Suspense>
  );
};
export default App;
