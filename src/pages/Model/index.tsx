import { useState, ReactNode } from "react";

import { useTranslation } from "react-i18next";
import { useTheme, styled } from "@mui/material/styles";
import { useContext } from "react";

import { Box, Typography, Divider } from "@mui/material/";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import { ImageInfos } from "../../constants/imageInfos";
import InfoImage from "../../components/InfoImage";
import { ActiveSwitcher } from "../../components/ActiveSwitcher";
interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const Model = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [optionIndex, setOptionIndex] = useState<number>(0);
  const sortSettings = [
    t("allLabel"),
    "SDXL",
    t("exclusiveLabel"),
    t("architectureLabel"),
    t("mechaLabel"),
    t("photoLabel"),
  ];

  return (
    <ModelContainer>
      <PopularContainer>
        <PopularLabel>{t("popularLabel")}</PopularLabel>
        <ViewAllContainer>
          <ViewAllLabel>{t("viewAllLabel")}</ViewAllLabel>
          <KeyboardArrowRightIcon />
        </ViewAllContainer>
      </PopularContainer>
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
      <NewTryContainer>
        <NewTryLabel>{t("newTryLabel")}</NewTryLabel>
        <ViewAllContainer>
          <ViewAllLabel>{t("viewAllLabel")}</ViewAllLabel>
          <KeyboardArrowRightIcon />
        </ViewAllContainer>
      </NewTryContainer>
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
      <SortContainer>
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
        <FilterContainer>
          <FilterLabel>{t("filterLabel")}</FilterLabel>
          <FilterAltOutlinedIcon />
        </FilterContainer>
      </SortContainer>
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
    </ModelContainer>
  );
};

const ModelContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));
const PopularContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "&.MuiBox-root": {
    padding: "44px 0px 16px 0px",
  },
}));
const PopularLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  lineHeight: "22px",
  fontSize: "18px",
}));

const ViewAllContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
}));

const ViewAllLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "400px",
  fontSize: "16px",
  lineHeight: "22px",
  color: theme.palette.mode === "light" ? "#000" : "#E3E3E3",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "24px",
  alignItems: "center",
  justifyContent: "center",
}));

const NewTryContainer = styled(Box)(({ theme }) => ({
  "&.MuiBox-root": {
    padding: "30px 0px 16px 0px",
  },
  display: "flex",
  justifyContent: "space-between",
}));

const NewTryLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  lineHeight: "22px",
  fontSize: "18px",
}));

const SortContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "&.MuiBox-root": {
    padding: "32px 0px 16px 0px",
  },
}));

const ActionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
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

const FilterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  borderRadius: "4px",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  padding: "10px 12px",
  border:
    theme.palette.mode === "light" ? "1px solid #e3e3e3" : "1px solid #494949",
}));

const FilterLabel = styled(Box)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "22px",
}));

export default Model;
