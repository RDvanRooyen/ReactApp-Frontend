import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';
import pageone from '../../asset/image/page1.png';
import pagetwo from '../../asset/image/page2.png';
import pagethree from '../../asset/image/page3.png';

import imgone from '../../asset/image/19.png';
import imgtwo from '../../asset/image/20.png';
import imgthree from '../../asset/image/21.png';
import Jump from 'react-reveal/Jump';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';

class Welcome extends Component {

     constructor() {
          super();
          this.state = {
               myData: [],
               loading: true
          }
     }

     componentDidMount() {
          RestClient.GetRequest(AppUrl.TopServices).then(result => {
               this.setState({ myData: result, loading: false });
          })
     }

     render() {

          if (this.state.loading == true) {
               return <Loading />
          } else {

               const MyList = this.state.myData;
               const MyView = MyList.map(MyList => {

                    return <Col lg={4} md={6} sm={12}>
                         <Slide top>
                              <img className="ecommerceIcon" src={MyList.service_logo} />
                         </Slide>
                         <Flip top>
                              <h2 className="serviceName">{MyList.service_name}</h2>
                              <p className="serviceDescription">{MyList.service_discription}</p>
                         </Flip>
                    </Col>

               })

               return (
                    <Fragment>
                         <div className="intro-area--top">
                              <Container>
                                   <Row>
                                        <Col lg={12} md={12} sm={12}>
                                             <div className="section-title text-center">
                                                  <div className="intro-area-inner">
                                                       <h6 className="sub-title double-line">WELCOME</h6>
                                                       <Jump>
                                                            <h2 className="maintitle">
                                                                 Exemplary WEB<br></br>
                                                                 Development service
                                                            </h2></Jump>

                                                       <Container className="text-center mt-5">
                                                            <Row>
                                                                 {MyView}
                                                            </Row>

                                                            {/* // Intro Footer Start  */}

                                                            <Row className="intro-footer bg-base text-center mt-5">

                                                                 <Col lg={4} md={6} sm={12}>

                                                                      <Row>
                                                                           <Col lg={6} md={6} sm={12}>
                                                                                <img className="sideImg" src={imgone} />
                                                                           </Col>

                                                                           <Col lg={6} md={6} sm={12}>
                                                                                <h5 className="text-justify homeIntro">Front-End Development</h5>
                                                                                <p className="text-justify serviceDescription">Complete dynamic Front-End</p>
                                                                           </Col>
                                                                      </Row>
                                                                 </Col>
                                                                 <Col lg={4} md={6} sm={12}>

                                                                      <Row>
                                                                           <Col lg={6} md={6} sm={12}>
                                                                                <img className="sideImg" src={imgtwo} />
                                                                           </Col>

                                                                           <Col lg={6} md={6} sm={12}>
                                                                                <h5 className="text-justify homeIntro">Back-End Development</h5>
                                                                                <p className="text-justify serviceDescription">Complete dynamic Back-End</p>
                                                                           </Col>
                                                                      </Row>
                                                                 </Col>
                                                                 <Col lg={4} md={6} sm={12}>

                                                                      <Row>
                                                                           <Col lg={6} md={6} sm={12}>
                                                                                <img className="sideImg" src={imgtwo} />
                                                                           </Col>

                                                                           <Col lg={6} md={6} sm={12}>
                                                                                <h5 className="text-justify homeIntro">Fullstack Development</h5>
                                                                                <p className="text-justify serviceDescription">Complete dynamic solution</p>
                                                                           </Col>
                                                                      </Row>
                                                                 </Col>
                                                            </Row>
                                                       </Container>
                                                  </div>
                                             </div>
                                        </Col>
                                   </Row>
                              </Container>
                         </div>
                    </Fragment>
               )
          }
     }
}

export default Welcome