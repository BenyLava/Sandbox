import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
 {/*
  const links = [
    /*{ id : 1, title : "Feature",
      child : [
          { title : "LINKS", link : "/" },
          { title : "TO SOMETHING", link : "/" },
          { title : "WHAT?", link : "/" },
          { title : "IDK YET", link : "/" }
      ]
    },
    { id : 2, title : "About Me",
      child : [
          { title : "Privacy Policy", link : "/privacy" },
      ]
    },
  ];
   
*/}
  return (
    <section className="footer section" id="footer">
      <Container>
        <Row>
          {/*<Col lg={4}>
              <div className="mb-4">
                <p className="text-muted mt-4 mb-2">flaccware@flacc.io</p>
                <h6 className="text-muted font-weight-normal">+1 or no?</h6>
              </div>
  </Col>*/}
           <Col>
            <Row>
            
              <Col className="text-center">
                <h6 className="text-dark mb-3"></h6>
                <p className="text-dark f-14"></p>
                <h6 className="text-dark pb-2"></h6>
                {/*<ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
            </ul>*/}
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5 bottom align-text-bottom">
          <Col>
            <div className="text-center text-light bottom">
              <p className="mb-0 f-15 text-dark align-text-bottom bottom">2022. Design by Ben</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;