import PropTypes from "prop-types";
import React from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; 
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'; 
// project imports
import CardIndicator from "../CardIndicator/CardIndicator";

// assets
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalCard  = ({ color = 'primary', title, count, description, isLoss, extra }) => {
  const theme = useTheme();

  const [timeValue, setTimeValue] = React.useState(false);
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };

  return (
    <>
      <CardIndicator contentSX={{ p: 2.25 }}>
        <Stack spacing={0.5}>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
          <Grid container alignItems="center">
            <Grid item>
              <Typography variant="h4" color="inherit">
                {count}
              </Typography>
            </Grid>
        
          </Grid>
        </Stack>
        <Box sx={{ pt: 2.25 }}>
          <Typography variant="caption" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardIndicator>
    </>
  );
};

export default TotalCard;
