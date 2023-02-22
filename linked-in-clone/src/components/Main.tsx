import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import Skills from "./Skills";
import TopNav from "./TopNav";
import Education from "./Education";
import Posts from "./Posts"

const Main = () => {
  return (
    <>
      <TopNav />
      <Container className="d-flex">
        <div className="d-flex flex-column pt-5">
          {/* left main section */}
          <Row className="mt-3">
            <Col sm={6} md={8} className="mt-2 mb-3">
              <Profile />
            </Col>
            <Col sm={6} md={8} className="mt-2 mb-3">
              <About />
            </Col>
            <Col sm={6} md={8} className="mt-2 mb-3">
              <Skills />
            </Col>
            <Col sm={6} md={8} className="mt-2 mb-3">
              <Experience />
            </Col>
            <Col sm={6} md={8} className="mt-2 mb-3">
              <Skills />
            </Col>
            <Col sm={6} md={8} className="mt-2 mb-3">
              <Education />
            </Col>
            <Col sm={6} md={8} className="mt-2 mb-3">
              <Posts />
            </Col>
          </Row>
        </div>
        <div className="d-flex flex-column pt-5">
          {/* side section */}
          <Row className="d-flex flex-column mt-3">
            <Col>
              <Sidebar firstIndex={0} secondIndex={5} />
            </Col>
            <Col>
              <Sidebar firstIndex={5} secondIndex={10} />
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Main;
