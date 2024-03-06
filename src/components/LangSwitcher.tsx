import React, { useState } from "react";

import { useTheme, styled } from "@mui/material/styles";
import { Box, Button, Menu, MenuItem } from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants";

import CN from "../assets/images/cn.svg";
import EN from "../assets/images/en.svg";

const Flags = [EN, CN];

export const LangSwithcer = () => {
  const [status, setStatus] = useState<null | HTMLElement>(null);
  const [langIndex, setLangIndex] = useState(0);
  const isOpen = Boolean(status);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setStatus(event.currentTarget);
  };
  const handleClose = (index: number | null) => {
    if (index !== null) {
      setLangIndex(index);
      i18n.changeLanguage(LANGUAGES[index].code);
    }
    setStatus(null);
  };

  const { i18n, t } = useTranslation();

  return (
    <LangContainer>
      <LangButton onClick={handleClick}>
        <img src={Flags[langIndex]} width="28px" />
        {LANGUAGES[langIndex].code}
        {isOpen ? (
          <ExpandMoreIcon sx={{ transform: "rotate(180deg)" }} />
        ) : (
          <ExpandMoreIcon />
        )}
      </LangButton>
      <LangMenu
        id="basic-menu"
        anchorEl={status}
        open={isOpen}
        onClose={() => handleClose(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: { width: status !== null ? status.offsetWidth : "112px" },
        }}
      >
        {LANGUAGES.map(({ code, label }, index: number) => (
          <LangMenuItem onClick={() => handleClose(index)}>
            <FlagImage src={Flags[index]} />
            {code.toUpperCase()}
          </LangMenuItem>
        ))}
      </LangMenu>
    </LangContainer>
  );
};

const LangContainer = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const LangButton = styled(Button)(({ theme }) => ({
  color: theme.palette.mode === "light" ? "#000" : "white",
  fontSize: "18px",
  fontWeight: "600",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "6px",
  padding: "8px 10px",
  width: "100%",
  border:
    theme.palette.mode === "light" ? "1px dashed black" : "1px dashed white",
}));

const LangMenu = styled(Menu)(({ theme }) => ({
  width: "100%",
  padding: "8px 10px",
}));

const LangMenuItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  justifyContent: "center",
  alignItems: "center",
}));

const FlagImage = styled("img")(({ theme }) => ({
  width: "24px",
}));
