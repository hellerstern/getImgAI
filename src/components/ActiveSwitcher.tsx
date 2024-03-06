import React, { useState } from "react";

import { useTheme, styled } from "@mui/material/styles";
import { Box, Button, Menu, MenuItem } from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useTranslation } from "react-i18next";

export const ActiveSwitcher = () => {
  const [status, setStatus] = useState<null | HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isOpen = Boolean(status);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setStatus(event.currentTarget);
  };
  const handleClose = (index: number | null) => {
    if (index !== null) {
      setActiveIndex(index);
    }
    setStatus(null);
  };

  const { i18n, t } = useTranslation();
  const SortSettings = [
    t("popularTodayLabel"),
    t("latestReleseLabel"),
    t("runAtMostLabel"),
  ];

  return (
    <ActiveContainer>
      <ActiveButton onClick={handleClick}>
        {SortSettings[activeIndex]}
        {isOpen ? (
          <ExpandMoreIcon sx={{ transform: "rotate(180deg)" }} />
        ) : (
          <ExpandMoreIcon />
        )}
      </ActiveButton>
      <ActiveMenu
        id="basic-menu"
        anchorEl={status}
        open={isOpen}
        onClose={() => handleClose(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: { width: status !== null ? status.offsetWidth : "112px" },
        }}
      >
        {SortSettings.map((setting, index) => {
          return (
            <ActiveMenuItem onClick={() => handleClose(index)}>
              {setting}
            </ActiveMenuItem>
          );
        })}
      </ActiveMenu>
    </ActiveContainer>
  );
};

const ActiveContainer = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const ActiveButton = styled(Button)(({ theme }) => ({
  color: theme.palette.mode === "light" ? "#000" : "white",
  fontSize: "14px",
  fontWeight: "400",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  padding: "8px 10px",
  width: "100%",
  border:
    theme.palette.mode === "light" ? "1px solid #e3e3e3" : "1px solid #494949",
}));

const ActiveMenu = styled(Menu)(({ theme }) => ({
  width: "100%",
  padding: "8px 10px",
}));

const ActiveMenuItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  justifyContent: "center",
  alignItems: "center",
}));

const FlagImage = styled("img")(({ theme }) => ({
  width: "24px",
}));
