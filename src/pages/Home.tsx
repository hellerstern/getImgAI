import { useState, ReactNode } from "react";

import { useTranslation } from "react-i18next";
import { useTheme, styled } from "@mui/material/styles";
import { useContext } from "react";
import ColorModeContext from "../context/ColorModeContext";

import Model from "./Model";

import { Box, Tabs, Tab, Container, Typography } from "@mui/material/";

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

export const Home = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { t } = useTranslation();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ViewContainer maxWidth={false} disableGutters>
      <Box sx={{ width: "100%" }}>
        <ViewTabs
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          value={value}
          onChange={handleChange}
          centered={false}
        >
          <ViewTab label={t("modelLabel")} {...a11yProps(0)} disableRipple />
          <ViewTab label={t("templateLabel")} {...a11yProps(1)} disableRipple />
          <ViewTab label={t("postLabel")} {...a11yProps(2)} disableRipple />
        </ViewTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Model />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </ViewContainer>
  );
};

const ViewContainer = styled(Container)(({ theme }) => ({
  padding: "40px 80px",
  margin: "0px auto",
}));

const ViewTabs = styled(Tabs)(({ theme }) => ({
  ".MuiTabs-flexContainer": {
    display: "flex",
    gap: "12px",
  },
}));

const ViewTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    background: theme.palette.mode === "light" ? "black" : "white",
    color: theme.palette.mode === "light" ? "white" : "#000",
  },
  background: theme.palette.mode === "light" ? "white" : "black",
  color: theme.palette.mode === "light" ? "#0f0f0f" : "white",
  borderRadius: "8.2px",
  fontWeight: "700",
  lineHeight: "22px",
  fontSize: "18px",
}));
