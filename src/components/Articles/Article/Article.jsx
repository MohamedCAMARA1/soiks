import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";

import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./style";

const Article = ({ article, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        id="Id_media"
        className={classes.media}
        image={article.image.url}
        title={article.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom component={"span"}>
            {article.name}
          </Typography>

          <Typography variant="h5" component={"span"}>
            {article.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: article.description }}
          variant="caption"
          color="textSecondary"
          component={"span"}
        />
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Ajouter un Article"
          onClick={() => onAddToCart(article.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Article;
