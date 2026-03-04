import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent1 from "../../content/ProductContent-1.json";
import ProductContent2 from "../../content/ProductContent-2.json";
import ContactContent from "../../content/ContactContent.json";
import IntroExperience from "../../content/IntroExperience.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="product-1.png"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        redirectButton="mission"
      />
      <ContentBlock
        type="right"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="product-1.png"
        id="about"
      />
      <ContentBlock
        type="left"
        title={MissionContent.title}
        content={MissionContent.text}
        section={MissionContent.section}
        icon="product-1.png"
        id="mission"
      />
      <MiddleBlock
        title={IntroExperience.title}
        content={IntroExperience.text}
        button={IntroExperience.button}
        redirectButton="product-1"
      />
      <ContentBlock
        type="right"
        title={ProductContent1.title}
        content={ProductContent1.text}
        icon="product-1.png"
        id="product-1"
      />
      <ContentBlock
        type="left"
        title={ProductContent2.title}
        content={ProductContent2.text}
        icon="product-2.png"
        id="product-2"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
