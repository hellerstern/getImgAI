import { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { styled, useTheme } from "@mui/material/styles";
import ColorModeContext from "../context/ColorModeContext";

import {
  Box,
  Button,
  Divider,
  Fab,
  InputAdornment,
  TextField,
  Typography,
  Switch,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import {
  DarkBellIcon,
  DarkDiscordIcon,
  DarkLogo,
  LightBellIcon,
  LightDiscordIcon,
  LightLogo,
  MagicIcon,
} from "../constants/images";

import { LANGUAGES } from "../constants/index";
import { LangSwithcer } from "./LangSwitcher";

const HeadLayout = () => {
  const { i18n, t } = useTranslation();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [lang, setLang] = useState<string>("en");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (_lang: string) => {
    if (_lang.length > 0) setLang(_lang);
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage
          src={theme.palette.mode === "light" ? LightLogo : DarkLogo}
          width={120}
          height={24}
          alt="Dark Logo"
        />
        <LogoSearchBar
          // label={t("SearchLabel")}
          placeholder={t("SearchLabel")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </LogoContainer>
      <ToolBarContainer>
        <OnlineDrawingButton variant="contained">
          <FirstCover>
            <MagicImage
              src={MagicIcon}
              width={16}
              height={16}
              alt="Magic Image"
            />
            <MagicLabel>{t("onlineDrawingLabel")}</MagicLabel>
          </FirstCover>
          <VDivider />
          <SecondCover>
            <KeyboardArrowDownIcon />
          </SecondCover>
        </OnlineDrawingButton>
        <RelatedToolBar>
          <ProMode variant="contained">PRO</ProMode>
          <DiscordIcon
            src={
              theme.palette.mode === "light"
                ? LightDiscordIcon
                : DarkDiscordIcon
            }
            width={48}
            height={48}
            alt="Discord Icon"
          />
          <BellIcon
            src={theme.palette.mode === "light" ? LightBellIcon : DarkBellIcon}
            width={48}
            height={48}
            alt="Bell Icon"
          />
        </RelatedToolBar>
        <LangSwithcer />
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon fontSize="large" />
          ) : (
            <Brightness4Icon fontSize="large" />
          )}
        </IconButton>
      </ToolBarContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Box)(({ theme }) => ({
  margin: "0px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 24px",
  background: theme.palette.mode === "light" ? "white" : "#0d0d0d",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
}));

const LogoImage = styled("img")(({ theme }) => ({
  height: "24px",
  width: "120px",
  borderRadius: "999px",
}));

const LogoSearchBar = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    height: "48px",
  },
}));

const ToolBarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "32px",
  alignItems: "center",
}));

const OnlineDrawingButton = styled(Button)(({ theme }) => ({
  background: "#5858e6",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  padding: "10px",
  "&:hover": {
    background: "#5858e6",
  },
  color: "white",
}));

const FirstCover = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
}));

const MagicImage = styled("img")(({ theme }) => ({
  width: "32px",
  height: "32px",
}));

const MagicLabel = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
}));

const VDivider = styled(Box)(({ theme }) => ({
  height: "24px",
  borderLeft: "1px solid rgba(255,255,255,0.4)",
}));

const SecondCover = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const RelatedToolBar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
}));

const ProMode = styled(Button)(({ theme }) => ({
  background: "#ffcb45",
  "&:hover": {
    background: "#ffcb45",
  },
  padding: "8px",
  color: "black",
  fontWeight: "600",
  borderRadius: "6px",
}));

const DiscordIcon = styled("img")(({ theme }) => ({
  width: "36px",
  height: "36px",
}));

const BellIcon = styled("img")(({ theme }) => ({
  width: "36px",
  height: "36px",
}));

export default HeadLayout;
