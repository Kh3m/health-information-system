import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";

export const DashboardCard = ({
  children,
  label,
  image,
  media,
  size,
  src,
  color,
  variant,
  ...other
}) => {
  return (
    <Card {...other}>
      <CardActionArea>
        <CardMedia title='media' image={image} src={src} className={media} />
        <CardContent>{children}</CardContent>
      </CardActionArea>
      <CardActions>
        <Button size={size} color={color} variant={variant}>
          {label}
        </Button>
      </CardActions>
    </Card>
  );
};

export const DashboardList = ({ children, classes, ...other }) => {
  return (
    <Card {...other}>
      <CardActionArea>
        <CardContent className={classes}>{children}</CardContent>
      </CardActionArea>
    </Card>
  );
};
