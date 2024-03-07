import { useState, ReactNode } from "react";

import { useTranslation } from "react-i18next";
import { useTheme, styled } from "@mui/material/styles";

import { Box, Tabs, Tab, Container, Typography } from "@mui/material/";
import { ImageInfos } from "../../constants/imageInfos";
import InfoImage from "../../components/InfoImage";

const PopularView = () => {
  const [optionIndex, setOptionIndex] = useState(0);
  const theme = useTheme();
  const { t } = useTranslation();
  const SortSettings = [
    t("popularTodayLabel"),
    t("latestReleseLabel"),
    t("runAtMostLabel"),
  ];
  return (
    <ViewContainer maxWidth={false} disableGutters>
      <PopularViewContainer>
        <PopularLabel>{t("popularLabel")}</PopularLabel>
        <ModelLabelContainer>
          <ModelLabel>{t("modelLabel")}</ModelLabel>
        </ModelLabelContainer>
      </PopularViewContainer>
      <SettingOptions>
        {SortSettings.map((setting, index) => {
          return (
            <SettingOption
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
              {setting}
            </SettingOption>
          );
        })}
      </SettingOptions>
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
    </ViewContainer>
  );
};

export default PopularView;

const ViewContainer = styled(Container)(({ theme }) => ({
  padding: "40px 80px",
  margin: "0px auto",
}));

const PopularViewContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
}));

const PopularLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "28px",
  lineHeight: "22px",
}));

const ModelLabelContainer = styled(Box)(({ theme }) => ({
  borderRadius: "4px",
  background: theme.palette.mode === "light" ? "white" : "#33290e",
  "&.MuiBox-root": {
    padding: "8px 12px",
  },
}));

const ModelLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "light" ? "#FFBC0F" : "#FFCB45",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "22px",
}));

const SettingOptions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "12px",
  "&.MuiBox-root": {
    padding: "44px 0px 16px 0px",
  },
}));

const SettingOption = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === "light" ? "white" : "#0f0f0f",
  color: theme.palette.mode === "light" ? "#787878" : "#a4a4a4",
  borderRadius: "8.2px",
  fontWeight: "700",
  lineHeight: "22px",
  fontSize: "18px",
  padding: "11px 22px",
  cursor: "pointer",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "24px",
  alignItems: "center",
  justifyContent: "center",
  padding: "0px 0px 18px 0px",
}));
