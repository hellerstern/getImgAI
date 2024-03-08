import { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { styled, useTheme } from "@mui/material/styles";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Tabs,
  Tab,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import { convertToObject } from "typescript";
import {
  DiscordIcon,
  GoogleIcon,
  LightDiscordCIcon,
} from "../constants/images";

const Login = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <LoginContainer>
      <EmailAddressLabel>{t("emailAddressLabel")}</EmailAddressLabel>
      <LoginGroup>
        <EmailAddressTextField
          id="outlined-basic"
          label=""
          variant="outlined"
        />
        <LoginButton>{t("loginLabel")}</LoginButton>
      </LoginGroup>
      <AnotherLoginContainer>
        <CustomDivider />
        <OtherLoginLabel>{t("otherLoginLabel")}</OtherLoginLabel>
        <CustomDivider />
      </AnotherLoginContainer>
      <OtherLoginGroups>
        <GoogleLoginButton>
          <LoginImage src={GoogleIcon} />
          <LoginMethodLabel> {t("loginLabel")}</LoginMethodLabel>
        </GoogleLoginButton>
        <DiscordLoginButton>
          <LoginImage
            src={
              theme.palette.mode === "light" ? LightDiscordCIcon : DiscordIcon
            }
          />
          <LoginMethodLabel> {t("loginLabel")}</LoginMethodLabel>
        </DiscordLoginButton>
      </OtherLoginGroups>
      <DescriptionContainer>
        <Description>{t("LoginDescriptionLabel")}</Description>
        <HighlightedDescription>
          {t("userServiceAgreementLabel")}
        </HighlightedDescription>
        <Description>{t("andLabel")}</Description>
        <HighlightedDescription>
          {t("privacyAgreementLabel")}
        </HighlightedDescription>
      </DescriptionContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled(Box)(({ theme }) => ({
  padding: "52px 80px 0px 80px",
}));

const EmailAddressLabel = styled(Typography)(({ theme }) => ({
  paddingBottom: "14px",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "20px",
}));

const LoginGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  paddingBottom: "20px",
}));

const EmailAddressTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.mode === "light" ? "black" : "white",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.mode === "light" ? "black" : "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.mode === "light" ? "black" : "white",
    },
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  width: "100%",
  background: "#5858E6",
  "&:hover": {
    background: "#5858e6",
  },
  color: "white",
  padding: "18px 0px 18px 0px",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "17px",
}));

const CustomDivider = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "2px",
  background: "#222222",
}));

const AnotherLoginContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "22px",
  alignItems: "center",
  padding: "24px 0px",
}));

const OtherLoginLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "400px",
  fontSize: "14px",
  lineHeight: "17px",
  width: "100%",
  color: theme.palette.mode === "light" ? "black" : "#848484",
  textAlign: "center",
}));

const OtherLoginGroups = styled(Typography)(({ theme }) => ({
  display: "flex",
  gap: "45px",
}));

const GoogleLoginButton = styled(Button)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  width: "100%",
  padding: "10px 0px",
  border:
    theme.palette.mode === "light" ? "1px solid black" : "1px solid #454545",
}));
const DiscordLoginButton = styled(Button)(({ theme }) => ({
  display: "flex",
  gap: "12px",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  width: "100%",
  padding: "10px 0px",
  border:
    theme.palette.mode === "light" ? "1px solid black" : "1px solid #454545",
}));

const LoginImage = styled("img")(({ theme }) => ({
  width: "32px",
  height: "32px",
}));

const LoginMethodLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  textTransform: "capitalize",
  color: theme.palette.mode === "light" ? "black" : "white",
}));

const DescriptionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "4px",
  justifyContent: "center",
  padding: "24px 0px 88px 0px",
}));

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "light" ? "black" : "#8b8b8b",
  fontWeight: "400",
  fontSize: "14px",
}));

const HighlightedDescription = styled(Typography)(({ theme }) => ({
  color: "#0d99ff",
  fontWeight: "400",
  fontSize: "14px",
}));

export default Login;
