import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CropDetails from "./CropDetails";
import { Link } from "react-router-dom";

export default function MultiActionAreaCard({ cropName, imameLink }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea component={Link} to={`/cropDetails/${cropName}`}>
        <CardMedia
          component="img"
          height="140"
          image={imameLink}
          alt={cropName}
          className="min-h-[200px] max-h-[200px] object-fit"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cropName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
