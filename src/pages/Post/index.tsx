import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { Box, Button, Menu, MenuItem, Divider } from "@mui/material/";
import { useTheme, styled } from "@mui/material/styles";

import HatModel from "../../assets/models/model4.png";
import SkirtModel from "../../assets/models/model3.png";
import UniformModel from "../../assets/models/model5.png";
import ShoppingModel from "../../assets/models/model6.png";
import SpringModel from "../../assets/models/model7.png";

import { ActiveSwitcher } from "../../components/ActiveSwitcher";
import { ImageInfos } from "../../constants/imageInfos";
import InfoImage from "../../components/InfoImage";
const itemData = [
  HatModel,
  SkirtModel,
  HatModel,
  HatModel,
  UniformModel,
  ShoppingModel,
  SkirtModel,
  SpringModel,
  SkirtModel,
  HatModel,
  SkirtModel,
  ShoppingModel,
  SpringModel,
  UniformModel,
  ShoppingModel,
  SkirtModel,
  HatModel,
  SkirtModel,
  UniformModel,
  SkirtModel,
  ShoppingModel,
  SkirtModel,
  HatModel,
  HatModel,
  SkirtModel,
  SpringModel,
  SkirtModel,
];

export default function Post() {
  const [optionIndex, setOptionIndex] = useState<number>(0);
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
  const ImageViewContainer = styled(Box)(({ theme }) => ({
    //   padding: "0px 0px 16px 0px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  }));
  return (
    <PostContainer>
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
      <ImageViewContainer>
        <ImageList variant="masonry" cols={6} gap={18}>
          {ImageInfos.map((item) => (
            <ImageListItem>
              <InfoImage
                image={item.image}
                label={item.label}
                title={item.title}
                group={item.group}
                likedNumber={item.likedNumber}
                viewedNumber={item.viewedNumber}
              />
            </ImageListItem>
            // <ImageListItem key={item}>
            //   <img
            //     srcSet={`${item}?w=287&fit=crop&auto=format&dpr=2 2x`}
            //     src={`${item}?w=287&fit=crop&auto=format`}
            //     alt={item}
            //     loading="lazy"
            //   />
            // </ImageListItem>
          ))}
        </ImageList>
      </ImageViewContainer>
    </PostContainer>
  );
}

const PostContainer = styled(Box)(({ theme }) => ({}));

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

const PostImage = styled("img")(({ theme }) => ({
  width: "280px",
}));
