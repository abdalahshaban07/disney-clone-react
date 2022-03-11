import React from "react";
import { Container, Content, Wrap } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "redux/Slices/movieSlice";

const Recommends = () => {
  const movies = useSelector(selectRecommend);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies?.map((movie, key) => (
          <Wrap key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

export default Recommends;
