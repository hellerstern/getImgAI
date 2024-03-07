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
  DarkDiscordIcon,
  LightDiscordCIcon,
} from "../constants/images";

const Register = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <RegisterContainer>
      <EmailAddressLabel>{t("emailAddressLabel")}</EmailAddressLabel>

      <EmailAddressTextField id="outlined-basic" label="" variant="outlined" />
      <InvitationLabel>
        {t("inviteCodeLabel")} &nbsp;({t("optionalLabel")})
      </InvitationLabel>
      <InvitationCodeTextField
        id="outlined-basic"
        label=""
        variant="outlined"
      />
      <RegisterButton>{t("signUpLabel")}</RegisterButton>

      <AnotherRegisterContainer>
        <CustomDivider />
        <OtherSignUpLabel>{t("otherSignUpLabel")}</OtherSignUpLabel>
        <CustomDivider />
      </AnotherRegisterContainer>
      <OtherRegisterGroups>
        <GoogleLoginButton>
          <LoginImage src={GoogleIcon} />
          <SignUpMethodLabel> {t("signUpLabel")}</SignUpMethodLabel>
        </GoogleLoginButton>
        <DiscordLoginButton>
          <LoginImage
            src={
              theme.palette.mode === "light" ? LightDiscordCIcon : DiscordIcon
            }
          />
          <SignUpMethodLabel> {t("signUpLabel")}</SignUpMethodLabel>
        </DiscordLoginButton>
      </OtherRegisterGroups>
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
    </RegisterContainer>
  );
};

const RegisterContainer = styled(Box)(({ theme }) => ({
  padding: "52px 80px 0px 80px",
}));

const EmailAddressLabel = styled(Typography)(({ theme }) => ({
  paddingBottom: "14px",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "20px",
}));

const RegisterGroup = styled(Box)(({ theme }) => ({
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

const InvitationCodeTextField = styled(TextField)(({ theme }) => ({
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

const InvitationLabel = styled(Typography)(({ theme }) => ({
  padding: "16px 0px 14px 0px",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "20px",
}));

const RegisterButton = styled(Button)(({ theme }) => ({
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
  margin: "28px 0px 20px 0px",
}));

const CustomDivider = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "2px",
  background: "#222222",
}));

const AnotherRegisterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "22px",
  alignItems: "center",
  padding: "24px 0px",
}));

const OtherSignUpLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "400px",
  fontSize: "14px",
  lineHeight: "17px",
  width: "120%",
  color: theme.palette.mode === "light" ? "black" : "#848484",
  textAlign: "center",
}));

const OtherRegisterGroups = styled(Typography)(({ theme }) => ({
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

const SignUpMethodLabel = styled(Typography)(({ theme }) => ({
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

export default Register;
