import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Background,
  Container,
  ImageTitle,
  ContentMeta,
  Controls,
  Player,
  Trailer,
  AddList,
  GroupWatch,
  SubTitle,
  Description,
} from "./styles";
import playerIconBlack from "Assets/Images/play-icon-black.png";
import playerIconWhite from "Assets/Images/play-icon-white.png";
import groupIcon from "Assets/Images/group-icon.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "config/firebase";

const Details = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    getDetailData();
  }, [id]);

  const getDetailData = async () => {
    try {
      const movieSnapshot = await getDoc(doc(db, "movies", id));
      if (movieSnapshot.exists()) {
        const movieData = movieSnapshot.data();
        setDetailData(movieData);
      } else {
        console.log("movie doesn't exist");
      }
    } catch (error) {
      console.log("Error getting document data", error);
    }
  };
  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src={playerIconBlack} alt="icon" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src={playerIconWhite} alt="icon" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <GroupWatch>
            <div>
              <img src={groupIcon} alt="groupIcon" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

export default Details;
