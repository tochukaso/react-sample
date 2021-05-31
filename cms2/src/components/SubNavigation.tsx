import React, { FC, ReactElement } from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Icon, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import TextIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import InfoIcon from '@material-ui/icons/Info';

// constants
import { DRAWER_SUB_WIDTH } from "../utils/constants";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: DRAWER_SUB_WIDTH,
      flexShrink: 0,
      whiteSpace: "nowrap",
      backgroundColor: "#e0ffff",
      height: "100%"
    },
    drawerOpen: {
      width: DRAWER_SUB_WIDTH,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
  })
);

// define interface to represent component props
interface Props {
  open: boolean;
}

const SubNavigation: FC<Props> = ({ open }): ReactElement => {
  const classes = useStyles();
  const parts = [
    { id: 1, name: "text", icon: TextIcon },
    { id: 2, name: "image", icon: ImageIcon },
    { id: 3, name: "info", icon: InfoIcon },
  ]
  return (
    <>
      <List
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          root: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        {parts.map((p) => (

          <ListItem button key={p.name}>
            <ListItemIcon>
              <IconButton
                size='small'
              >
                <Icon component={p.icon} />
              </IconButton>
            </ListItemIcon>

            <ListItemText primary={p.name} />

          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SubNavigation;
