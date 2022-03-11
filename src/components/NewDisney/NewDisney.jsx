import React from "react";
import { Container, Content, Wrap } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney } from "redux/Slices/movieSlice";

const NewDisney = () => {
  const movies = useSelector(selectNewDisney);

  return (
    <Container>
      <h4>New To Disney+</h4>
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

export default NewDisney;
