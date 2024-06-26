import React, { useState } from "react";
import Description from "./Description";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Collapse,
} from "@mui/material";

const PokemonThumbnail = ({
    id, name, image, type, height, weight, stats
}) => {
  const style = `thumb-container ${type}`;
  const [show, setShow] = useState(false);

  return (
    <Card style={{ margin: "20px", textAlign: "center" }}>
      <CardMedia
        component="img"
        alt={name}
        height="200"
        image={image}
        title={name}
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Type : {type}
        </Typography>
        <Button
          variant="outlined"
          onClick={() => setShow(!show)}
          style={{ marginTop: "10px" }}
        >
          {show ? "Know Less.." : "Know More ..."}
        </Button>
        <Collapse in={show} timeout="auto" unmountOnExit>
           <Description
               heightpok={height}
               weightpok={weight}
               stats={stats}
            />
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default PokemonThumbnail;
