import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import ColorModeContext from "../context/ColorModeContext";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const Home = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t("title")}</h1>
      <span>{t("label")} </span>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </main>
  );
};
