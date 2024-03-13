import { useState, ReactNode, useTransition } from "react";

import { useTranslation } from "react-i18next";
import { useTheme, styled } from "@mui/material/styles";

import {
  Box,
  Typography,
  Divider,
  Button,
  Menu,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material/";

import { ImageInfos } from "../../constants/imageInfos";
import InfoImage from "../../components/InfoImage";
import { ActiveSwitcher } from "../../components/ActiveSwitcher";

const Template = () => {
  const [optionIndex, setOptionIndex] = useState(0);
  const theme = useTheme();
  const { t } = useTranslation();
  const sortSettings = [
    t("allLabel"),
    "SDXL",
    t("exclusiveLabel"),
    t("architectureLabel"),
    t("mechaLabel"),
    t("photoLabel"),
  ];
  return (
    <TemplateContainer>
      <ActionContainer>
        <ActiveSwitcher />
        <Divider orientation="vertical" variant="middle" flexItem />
        <SettingsContainer>
          {sortSettings?.map((item, index) => {
            return (
              <SortSetting
                onClick={() => {
                  setOptionIndex(index);
                }}
                sx={{
                  background:
                    theme.palette.mode === "light"
                      ? optionIndex === index
                        ? "black"
                        : "white"
                      : optionIndex === index
                      ? "white"
                      : "black",
                  color:
                    theme.palette.mode === "light"
                      ? optionIndex === index
                        ? "white"
                        : "black"
                      : optionIndex === index
                      ? "black"
                      : "white",
                }}
              >
                {item}
              </SortSetting>
            );
          })}
        </SettingsContainer>
      </ActionContainer>
      <ImageContainer>
        {ImageInfos.map((item, index) => {
          return (
            <InfoImage
              image={item.image}
              label={item.label}
              title={item.title}
              group={item.group}
              likedNumber={item.likedNumber}
              viewedNumber={item.viewedNumber}
            />
          );
        })}
      </ImageContainer>
      <ImageContainer>
        {ImageInfos.map((item, index) => {
          return (
            <InfoImage
              image={item.image}
              label={item.label}
              title={item.title}
              group={item.group}
              likedNumber={item.likedNumber}
              viewedNumber={item.viewedNumber}
            />
          );
        })}
      </ImageContainer>
      <ImageContainer>
        {ImageInfos.map((item, index) => {
          return (
            <InfoImage
              image={item.image}
              label={item.label}
              title={item.title}
              group={item.group}
              likedNumber={item.likedNumber}
              viewedNumber={item.viewedNumber}
            />
          );
        })}
      </ImageContainer>
    </TemplateContainer>
  );
};

const TemplateContainer = styled(Box)(({ theme }) => ({}));

const ActionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  padding: "44px 0px 16px 0px",
}));

const SettingsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
}));

const SortSetting = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === "light" ? "white" : "black",
  color: theme.palette.mode === "light" ? "#0f0f0f" : "white",
  fontWeight: "500",
  lineHeight: "22px",
  fontSize: "14px",
  border:
    theme.palette.mode === "light" ? "1px solid #e3e3e3" : "1px solid #494949",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 12px",
  borderRadius: "4px",
  cursor: "pointer",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "24px",
  alignItems: "start",
  justifyContent: "center",
  paddingBottom: "18px",
}));

export default Template;
