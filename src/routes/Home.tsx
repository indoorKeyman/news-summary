import styled from "styled-components";
import { motion, useScroll } from "framer-motion";

import Krnews from "../components/Krnews";
import HomeContents from "../components/HomeContents";
import Usnews from "../components/Usnews";
import Jpnews from "../components/Jpnews";

const ScrollGage = styled(motion.div)<{ scaleX: any }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 15px;
  background-color: ${(props) => props.theme.cardBgColor};
  transform-origin: 0%;
`;

function Home() {
  //1030
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollGage style={{ scaleX: scrollYProgress }} />
      <HomeContents />
      <Krnews />
      <Usnews />
      <Jpnews />
    </>
  );
}

export default Home;
