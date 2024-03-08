import { useState, useEffect, useContext, forwardRef, ReactNode } from "react";
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
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { TransitionProps } from "@mui/material/transitions";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface LoginRegisterProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const LoginRegister = ({ isOpen, handleClose }: LoginRegisterProps) => {
  const { t } = useTranslation();
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <LoginDialog
      open={isOpen}
      TransitionComponent={Transition}
      onClose={handleClose}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <CloseContainer>
        <div></div>
        <CloseIcon
          onClick={handleClose}
          fontSize="large"
          sx={{ cursor: "pointer" }}
        />
      </CloseContainer>
      <DialogContainer disableGutters>
        <DialogTabs
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          value={value}
          onChange={handleChange}
          centered={false}
        >
          <DialogTab label={t("loginLabel")} {...a11yProps(0)} disableRipple />
          <DialogTab label={t("signUpLabel")} {...a11yProps(1)} disableRipple />
        </DialogTabs>
      </DialogContainer>
      <CustomTabPanel value={value} index={0}>
        <Login />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Register />
      </CustomTabPanel>
    </LoginDialog>
  );
};

const LoginDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    background: theme.palette.mode === "light" ? "#ffffff" : "#171717",
    width: "640px",
    borderRadius: "8px",
  },
  padding: "0px",
}));

const CloseContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "24px 26px",
  justifyContent: "space-between",
  alignItems: "center",
}));

const DialogContainer = styled(Container)(({ theme }) => ({
  "&.MuiContainer-root": {
    padding: "0px 72px 0px 72px",
  },
}));

const DialogTabs = styled(Tabs)(({ theme }) => ({
  ".MuiTabs-flexContainer": {
    display: "flex",
    gap: "12px",
  },
}));

const DialogTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    color: theme.palette.mode === "light" ? "black" : "white",
    fontSize: "30px",
    lineHeight: "36.4px",
    padding: "0px",
  },
  color: theme.palette.mode === "light" ? "black" : "#8b8b8b",
  fontWeight: "600",
  lineHeight: "24.2px",
  fontSize: "20px",
  padding: "0px",
  textTransform: "capitalize",
}));
