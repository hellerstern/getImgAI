import React, { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import ColorModeContext from "../context/ColorModeContext";
import { Typography, Box } from "@mui/material";
import {
  DarkDiscordIcon,
  LightDiscordCIcon,
  LightInstagramCIcon,
  LightTikTokCIcon,
  LightTwitterCIcon,
} from "../constants/images";

const FooterLayout = () => {
  const { i18n, t } = useTranslation();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <FooterContainer>
      <FooterCopyRight>Tensor.Art2023 ·TAMS ·</FooterCopyRight>
      <SocialContainer>
        <DiscordContainer>
          <DiscordCLogo
            src={
              theme.palette.mode === "light"
                ? LightDiscordCIcon
                : DarkDiscordIcon
            }
          />
          <DiscordLabel>Discord</DiscordLabel>
        </DiscordContainer>
        <InstagramContainer>
          <InstagramCLogo
            src={
              theme.palette.mode === "light"
                ? LightInstagramCIcon
                : DarkDiscordIcon
            }
          />
          <InstagramLabel>Instagram</InstagramLabel>
        </InstagramContainer>
        <TikTokContainer>
          <TikTokCLogo
            src={
              theme.palette.mode === "light"
                ? LightTikTokCIcon
                : DarkDiscordIcon
            }
          />
          <TikTokLabel>TikTok</TikTokLabel>
        </TikTokContainer>
        <TwitterContainer>
          <TwitterCLogo
            src={
              theme.palette.mode === "light"
                ? LightTwitterCIcon
                : DarkDiscordIcon
            }
          />
          <TwitterLabel>Twitter</TwitterLabel>
        </TwitterContainer>
      </SocialContainer>
      <FooterEndLabel> 用户服务协议 · 隐私协议</FooterEndLabel>
    </FooterContainer>
  );
};

const FooterContainer = styled(Box)(({ theme }) => ({
  margin: "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px 24px",
  gap: "16px",
  background: theme.palette.mode === "light" ? "white" : "#0d0d0d",
}));

const FooterCopyRight = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "17px",
  fontFamily: "Inter",
}));

const SocialContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
}));

const DiscordContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "4px",
  justifyContent: "center",
  alignItems: "center",
}));
const DiscordCLogo = styled("img")(({ theme }) => ({
  width: "24px",
  height: "24px",
}));
const DiscordLabel = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "16px",
  lineHeight: "14.5px",
  fontWeight: "400",
}));

const InstagramContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "4px",
  justifyContent: "center",
  alignItems: "center",
}));
const InstagramCLogo = styled("img")(({ theme }) => ({
  width: "24px",
  height: "24px",
}));
const InstagramLabel = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "16px",
  lineHeight: "14.5px",
  fontWeight: "400",
}));

const TikTokContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "4px",
  justifyContent: "center",
  alignItems: "center",
}));
const TikTokCLogo = styled("img")(({ theme }) => ({
  width: "24px",
  height: "24px",
}));
const TikTokLabel = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "16px",
  lineHeight: "14.5px",
  fontWeight: "400",
}));

const TwitterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "4px",
  justifyContent: "center",
  alignItems: "center",
}));
const TwitterCLogo = styled("img")(({ theme }) => ({
  width: "24px",
  height: "24px",
}));
const TwitterLabel = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "16px",
  lineHeight: "14.5px",
  fontWeight: "400",
}));

const FooterEndLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "17px",
  fontFamily: "Inter",
}));

export default FooterLayout;
