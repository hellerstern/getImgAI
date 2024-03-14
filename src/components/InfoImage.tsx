import { useState, ReactNode } from "react";

import { useTranslation } from "react-i18next";
import { useTheme, styled } from "@mui/material/styles";
import { useContext } from "react";

import { Box, Tabs, Tab, Container, Typography } from "@mui/material/";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Image from "../assets/models/model4.png";

interface InfoImageProps {
  image: string;
  label: string;
  title: string;
  group: string;
  viewedNumber: number;
  likedNumber: number;
}

const InfoImage = ({
  image,
  label,
  title,
  group,
  viewedNumber,
  likedNumber,
}: InfoImageProps) => {
  const { t } = useTranslation();
  const ImageContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    position: "relative",

    backgroundRepeat: "no-repeat",
    boxShadow: "12px",
    // padding: "10px 8px 16px 8px",
    borderRadius: "5px",
  }));
  return (
    <ImageContainer>
      <img src={image} style={{ width: "100%", height: "100%" }} />
      <DarkOverlay></DarkOverlay>
      <LabelContainer>{label}</LabelContainer>
      <DetailContainer>
        <TitleLabel>{title}</TitleLabel>
        <MainInfoContainer>
          <GroupContainer>
            <GroupIcon sx={{ color: "white", fontSize: "14px" }}>
              {group.charAt(0)}
            </GroupIcon>
            <GroupLabel>{group}</GroupLabel>
          </GroupContainer>
          <FavContainer>
            <FavIconContainer>
              <VisibilityOutlinedIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white" }}>
                {viewedNumber / 1000}k
              </Typography>
            </FavIconContainer>
            <FavIconContainer>
              <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white" }}>
                {likedNumber / 1000}k
              </Typography>
            </FavIconContainer>
          </FavContainer>
        </MainInfoContainer>
      </DetailContainer>
    </ImageContainer>
  );
};

const DarkOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "100%",
  height: "30%",
  background: `linear-gradient(180.99deg, rgba(0, 0, 0, 0) 0.85%, #000000 99.15%)`,
}));

const LabelContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  left: "10px",
  "&.MuiBox-root": {
    padding: "8px 12px",
  },
  borderRadius: "4px",
  opacity: "50%",
  background: "black",
  fontWeight: "400",
  fontsize: "12px",
  lineHeight: "16px",
  color: "white",
}));

const DetailContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "14px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "100%",
}));

const TitleLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "16px",
  color: "white",
  paddingLeft: "16px",
}));

const MainInfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
}));

const GroupContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));

const GroupIcon = styled(Box)(({ theme }) => ({
  background: "#5858e6",
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "700",
}));

const GroupLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#fff",
}));

const FavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));

const FavIconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "2px",
}));

export default InfoImage;
