import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import IcecreamIcon from '@mui/icons-material/Icecream';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>See what we offer</h2>
          <h5 className={classes.description}>
            It is not quite just a parking lot, there will be some more stuff coming as we develop a little more
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Camper Parking Lot"
              description="A parking lot where you can park your camper van as well as do the entire service."
              icon={AirportShuttleIcon}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="No Time Limit"
              description="You can stay as long as you want. No time limit just let us know"
              icon={AlarmOnIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Monitored 24/7"
              description="The parking lot is fully monitored for the entire stay of yours."
              icon={CameraOutdoorIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Car/Camper Wash"
              description="For extra pay we can offer you a full car wash service while you are stayig."
              icon={LocalCarWashIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Snack"
              description="There will be always opportunity to grab a snack while being on the go."
              icon={IcecreamIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Service"
              description="The parking lot is adapted to camper vans, meaning you will be able to empty and refill you tanks :)"
              icon={SettingsIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
