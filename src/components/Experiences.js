import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { getExperiences } from "../helpers";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Experiences() {
  const [experiences, setExperiences] = useState();
  const [isLoading, setIsLoading] = useState();

  const loadExperiences = async (setIsLoading, setExperiences) => {
    setIsLoading(true);
    try {
      await getExperiences(setExperiences);
    } catch (err) {
      console.log("err loadexperience:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadExperiences(setIsLoading, setExperiences);
  }, []);

  return (
    <Wrapper>
      <h1 style={styles.frontText}>{"Experience"}</h1>
      <PacmanLoader color={"#ff0080"} loading={isLoading} />
      <Container>
        {experiences &&
          experiences.map((el) => {
            return (
              <Card>
                <Grid Container>
                  <Grid item xs={8} style={styles.titleContainer}>
                    <h1 style={styles.title}>{el.name}</h1>
                    <h6>{el.date}</h6>
                  </Grid>
                  <Grid item xs={4}>
                    <img src={el.logo} alt="company logo" style={styles.img} />
                  </Grid>
                </Grid>
                <Content>
                  <Bar />
                  <TextContainer>
                    <p>{el.description}</p>
                    <IconContainer>
                      <div style={styles.iconDiv}>
                        {el.icons.map((icon) => {
                          return <img src={icon} alt="" style={styles.icon} />;
                        })}
                      </div>
                    </IconContainer>
                  </TextContainer>
                </Content>
              </Card>
            );
          })}
      </Container>
    </Wrapper>
  );
}

const styles = {
  frontText: {
    marginTop: "3vh",
    fontSize: 34,
    fontWeight: 400,
    fontFamily: "Raleway",
    letterSpacing: "-.20px",
    background: "linear-gradient(to right, #dd5e89, #f7bb97)",
    backgroundClip: 'text',
    textFillColor: 'rgba(255, 255, 255, 0)',
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "rgba(255, 255, 255, 0)",
  },
  titleContainer: {
    margin: 10,
    width: 350,
    paddingTop: 15,
    color: "white",
  },
  title: {
    fontSize: 34,
    fontWeight: 400,
    fontFamily: "Raleway",
    letterSpacing: "-.20px",
    background: "linear-gradient(to right, #dd5e89, #f7bb97)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "rgba(255, 255, 255, 0)",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    boxShadow: "0 0 0.5rem #d1f2fd",
    position: "absolute",
    right: 10,
    top: 10,
  },
  iconDiv: {
    display: "inline-block",
  },
  icon: {
    width: 35,
    margin: 5,
  },
};

const Wrapper = styled.div`
  height: 100%;
  flex: 1;
`;
const Container = styled.div`
  position: absolute;
  top: 15vh;
  left: calc(50% - 500px);
  display: flex;
  @media (max-width: 600px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: calc(50% - 165px);
    margin-left: 2vw;
    flex: 1;
  }
  @media (min-width: 600px) and (max-width: 800px){
    position: absolute;
    display: flex;
    flex-direction: column;
    left: calc(50% - 180px);
    height: 100%;
    top: 5vh;
    margin-left: 2vw;
    flex: 1;
  }
  @media (min-width: 800px) and (max-width: 1024px) {
    position: absolute;
    display: flex;
    top: 2vh;
    flex-direction: column;
    left: calc(50% - 220px);
    height: 100%;
    flex: 1;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 15vh;
  left: 2vh;
  @media (min-width: 600px) and (max-width: 1024px) {
    top: 10vh;
  }
`;

const TextContainer = styled.div`
  color: white;
  margin-top: 5vh;
  width: 340px;
  height: 340px;
  position: relative;
  font-size: 18px;
  @media (max-width: 600px) {
    height: 160px;
    width: 340px;
    font-size: 16px;
  }
  @media (min-width: 600px) and (max-width: 800px) {
    height: 140px;
    width: 400px;
    font-size: 22px;
  }
  @media (min-width: 800px) and (max-width: 1024px) {
    font-size: 24px;
    margin-top: 2vh;
    width: 500px;
    height: 340px;
  }
`;

const Bar = styled.div`
  background: linear-gradient(to right, #2980b9, #6dd5fa, #ffffff);
  width: 70%;
  height: 2px;
`;

const Card = styled.div`
  display: flex;
  height: 500px;
  width: 360px;
  background-color: rgb(64, 64, 64, 1);
  border-radius: 10px;
  box-shadow: 0 0 2rem #d1f2fd;
  margin-left: -25px;
  transition: 0.4s ease-out;
  position: relative;
  &:not(:first-child) {
    margin-right: -40px;
  }
  &:hover {
    transform: translateY(-40px);
    transition: 0.4s ease-out;
  }
  &:hover ~ div {
    position: relative;
    left: 80px;
    transition: 0.4s ease-out;
  }
  @media (max-width: 600px) {
    height: 315px;
    width: 360px;
    &:not(:first-child) {
      margin-top: -215px;
    }
    &:hover {
      transform: translateY(-50px);
      transition: 0.4s ease-out;
      // z-index: 1;
    }
    &:hover ~ div {
      position: relative;
      left: 10px;
      transition: 0.6s ease-out;
      // z-index: 1;
      margin-top: -90px;
    }
  }
  @media (min-width: 600px) and (max-width: 800px){
    height: 420px;
    width: 500px;
    top: 10vh;
    &:not(:first-child) {
      margin-top: -250px;
    }
    &:hover {
      transform: translateY(-90px);
      transition: 0.4s ease-out;
      z-index: 1;
    }
    &:hover ~ div {
      position: relative;
      left: 20px;
      transition: 0.6s ease-out;
      z-index: 1;
      margin-top: -90px;
    }
  }
  @media (min-width: 800px) and (max-width: 1024px) {
    width: 600px;
    height: 500px;
    top: 15vh;
    &:not(:first-child) {
      margin-top: -350px;
    }
    &:hover {
      transform: translateY(-100px) translateX(-3px);
      transition: 0.4s ease-out;
      z-index: 1;
    }
    &:hover ~ div {
      position: relative;
      left: 100px;
      transition: 0.6s ease-out;
      z-index: 1;
      margin-top: -120px;
    }
  }
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10;
  @media (max-width: 1024px) {
    display: none
  }
`;