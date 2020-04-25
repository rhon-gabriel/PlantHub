import React from "react";
import profile from "../assets/images/profile.JPG";
import CardAbout from "./cards/CardAbout";
import Header from "./Header";
import Skills from "./cards/Skills";
import { Grid, withStyles } from "@material-ui/core";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";

export default function WelcomePage(props) {
  const { scroll } = props
  return (
    <Wrapper container>
      <HeaderContainer item xs={12}>
        <Header />
      </HeaderContainer>

      <Content container>
        <CardAboutContainer item xs={5}>
          <div style={styles.cardDiv}>
            <CardAbout img={profile} title={"a little about me"} />
          </div>
        </CardAboutContainer>
        <SkillsContainer item xs={7}>
          <Skills />
        </SkillsContainer>
      </Content>

      <BottomContainer container direction="column" align="center">
        <div
          style={styles.exploreButton}
          onClick={() => scroll.moveSectionDown()}
        >
          Explore more
          <KeyboardArrowDownRoundedIcon />
        </div>
      </BottomContainer>
    </Wrapper>
  );
}

const styles = {
  cardDiv: {
    padding: 50,
  },
  image: {
    height: 250,
    width: 450,
  },
  exploreButton: {
    color: "#434343",
    cursor: "pointer",
    fontSize: 18,
    display: "flex",
    flexDirection: "column",
  },
};

const Wrapper = withStyles({
  root: {
    flexGrow: 1,
    height: "100%",
  },
})(Grid);

const HeaderContainer = withStyles({
  root: {
    flexGrow: 1,
    padding: 10,
  },
})(Grid);

const Content = withStyles({
  root: {
    flexGrow: 1,
  },
})(Grid);

const CardAboutContainer = withStyles({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
})(Grid);

const SkillsContainer = withStyles({
  root: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})(Grid);

const BottomContainer = withStyles({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    animation: 'heartbeat 3s ease infinite both'
  },
})(Grid);
