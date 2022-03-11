import React, { useEffect } from "react";
import {
  Nav,
  Logo,
  NavMenu,
  Login,
  UserImg,
  SignOut,
  DropDown,
} from "./styles";
import logo from "Assets/Images/logo.svg";
import homeIcon from "Assets/Images/home-icon.svg";
import searchIcon from "Assets/Images/search-icon.svg";
import watchListIcon from "Assets/Images/watchlist-icon.svg";
import originalsIcon from "Assets/Images/original-icon.svg";
import moviesIcon from "Assets/Images/movie-icon.svg";
import seriesIcon from "Assets/Images/series-icon.svg";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from "config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getUserLoginDetails,
  setSignOutState,
  selectUserName,
  selectUserPhoto,
} from "redux/Slices/userSlice";

import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home", { replace: true });
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      handleLogin();
    } else {
      handleLogout();
    }
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // The signed-in user info.
      const user = result.user;
      // // This gives you a Google Access Token.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      setUser(user);
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log({ errorCode, errorMessage, email, credential });
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(setSignOutState());
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  const setUser = (user) => {
    dispatch(
      getUserLoginDetails({
        name: user.displayName,
        photo: user.photoURL,
        email: user.email,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src={logo} alt="Disney+" />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to={"/home"}>
              <img src={homeIcon} alt="home icon" />
              <span>HOME</span>
            </Link>
            <a>
              <img src={searchIcon} alt="search icon" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src={watchListIcon} alt="watchlist icon" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src={originalsIcon} alt="original icon" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src={moviesIcon} alt="movies icon" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src={seriesIcon} alt="series icon" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName}></UserImg>
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;
