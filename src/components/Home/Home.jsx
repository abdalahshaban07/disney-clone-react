import React, { useEffect } from "react";
import bg from "Assets/Images/home-background.png";
import { Container } from "./styles";
import ImgSlider from "components/ImgSlider";
import Viewers from "components/Viewers";
import Recommends from "components/Recommends";
import NewDisney from "components/NewDisney";
import Originals from "components/Originals/Originals";
import Trending from "components/Trending";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "config/firebase";
import { setMovies } from "redux/Slices/movieSlice";
import { selectUserName } from "redux/Slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    getMovies();
  }, [userName]);

  const getMovies = async () => {
    try {
      const moviesSnapshot = await getDocs(collection(db, "movies"));
      const moviesList = moviesSnapshot.docs.map((doc) => doc.data());
      moviesList.map((movie) => {
        switch (movie.type) {
          case "recommend":
            recommends = [...recommends, { ...movie }];
            break;
          case "new":
            newDisneys = [...newDisneys, { ...movie }];
            break;
          case "original":
            originals = [...originals, { ...movie }];
            break;
          case "trending":
            trending = [...trending, { ...movie }];
            break;
          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container bg={bg}>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;
