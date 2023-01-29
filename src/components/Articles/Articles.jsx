import React from "react";
import { Grid } from "@material-ui/core";
import Article from "./Article/Article.jsx";
import useStyles from "./style";

const Articles = ({ articles, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main id="Articles" className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={3}>
        {articles.map((article) => (
          <Grid item key={article.id} xs={12} sm={6} md={4} lg={3}>
            <Article article={article} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Articles;
