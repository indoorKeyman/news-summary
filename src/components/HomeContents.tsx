import styled from "styled-components";
import newsIcon from "../img/IconNews.png";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Cotainer = styled(motion.div)``;

const TitleWrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
`;

const Maintitle = styled(motion.div)`
  width: 100%;
  height: 100px;
  font-size: 48px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-left: 10%;
  margin-bottom: 1%;
`;

const Subtitle = styled(motion.div)`
  width: 600px;
  height: 300px;
  margin-left: 12%;
  font-size: 24px;
`;

const Btn = styled(motion.div)`
  width: 370px;
  height: 80px;
  background-color: ${(props) => props.theme.btColor};
  margin-left: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.btTextColor};
  font-size: 24px;
  font-weight: 600;
  border-radius: 15px;
  box-shadow: 5px 5px 5px ${(props) => props.theme.shadowColor};
  transition: 0.7s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.btHighlight};
    transition: 0.7s ease-in-out;
  }
`;

const NewsIcon = styled(motion.img)`
  width: 480px;
  height: 480px;
  position: absolute;
  right: 4%;
  bottom: 16%;
  opacity: 0.7;
`;

const Cusion = styled.div`
  height: 8px;
`;

const containerVars = {
  start: {
    opacity: 0,
    scale: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.8,
      duration: 0.8,
    },
  },
};

const mainTitleVars = {
  start: {
    opacity: 0,
    scale: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const subTitleVars = {
  start: {
    opacity: 0,
    scale: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
    },
  },
};

const btnVars = {
  start: {
    opacity: 0,
    scale: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const iconVars = {
  start: {
    x: 500,
    // scale: 0,
    opacity: 0,
  },
  end: {
    x: 0,
    // scale: 1,
    opacity: 0.8,
    transition: {
      duration: 2,
      delay: 3.5,
    },
  },
};

function HomeContents() {
  const element = useRef<HTMLDivElement>(null);
  const scrollMove = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Cotainer variants={containerVars} initial="start" animate="end">
            <Maintitle variants={mainTitleVars}>
              "Simplify the News, Amplify Your Knowledge!"
            </Maintitle>
            <Subtitle variants={subTitleVars}>
              Welcome to our website, where we distill the essence of diverse
              news from around the globe. We provide concise summaries of
              complex articles, saving you time while delivering the heart of
              the news. From the latest updates to a wide array of topics,
              international affairs to trending stories, we offer a convenient
              platform to explore it all at a glance. Designed for news
              enthusiasts, we are your gateway to swift and convenient access to
              the world's headlines. Discover the world's stories now on our
              website!
            </Subtitle>
            <Btn variants={btnVars} onClick={scrollMove}>
              Get your News
            </Btn>
            <NewsIcon variants={iconVars} src={newsIcon} alt="Home Icon" />
          </Cotainer>
        </TitleWrapper>
      </Wrapper>
      <Cusion ref={element} />
    </>
  );
}

export default HomeContents;
