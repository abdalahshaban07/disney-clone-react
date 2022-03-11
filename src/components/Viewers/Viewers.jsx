import React from "react";
import { Container, Wrap } from "./styles";
import disneyImg from "Assets/Images/viewers-disney.png";
import marvelImg from "Assets/Images/viewers-marvel.png";
import nationalImg from "Assets/Images/viewers-national.png";
import pixarImg from "Assets/Images/viewers-pixar.png";
import starwarsImg from "Assets/Images/viewers-starwars.png";

import disneyVid from "Assets/Videos/disney.mp4";
import marvelVid from "Assets/Videos/marvel.mp4";
import nationalVid from "Assets/Videos/national-geographic.mp4";
import pixarVid from "Assets/Videos/pixar.mp4";
import starwarsVid from "Assets/Videos/star-wars.mp4";

const Viewers = () => {
  const imgs = [disneyImg, marvelImg, nationalImg, pixarImg, starwarsImg];
  const videos = [disneyVid, marvelVid, nationalVid, pixarVid, starwarsVid];
  return (
    <Container>
      {imgs.map((img, index) => (
        <Wrap key={index}>
          <img src={img} alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={videos[index]} type="video/mp4" />
          </video>
        </Wrap>
      ))}
    </Container>
  );
};

export default Viewers;
