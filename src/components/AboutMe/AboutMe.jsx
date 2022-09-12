import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../asset/image/face.png';
import { init } from 'ityped'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import RubberBand from 'react-reveal/RubberBand';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';

class AboutMe extends Component {
     constructor() {
          super();
          this.state = {
               ptitle: "",
               workas: [],
               loading: false,
               error: false
          }
     }
     componentDidMount() {
          RestClient.GetRequest(AppUrl.WorkAs).then(result => {
               if (result == null) {
                    this.setState({ error: true, loading: false })
               } else {
                    result.forEach(element => {
                         this.state.workas.push(element)
                    });
                    const myElement = document.querySelector('#myElement')
                    init(myElement, { showCursor: false, strings: this.state.workas })
                    this.setState({ loading: false })
               }
          }).catch(error => {
               this.setState({ error: true })
          })
          RestClient.GetRequest(AppUrl.HomeTopTitle).then(result => {
               this.setState({ ptitle: result[0]['home_title'] })
          }).catch(error => {
               this.setState({ error: true })
          })
     }
     render() {
          if (this.state.loading == true) {
               return <Loading />
          }
          else if (this.state.loading == false) {
               return (
                    <Fragment>
                         <Container className="text-center">
                              <RubberBand>
                                   <h1 className="serviceMainTitle">ABOUT ME</h1>
                              </RubberBand>
                              <div className="bottom"></div>
                              <Row>
                                   <Col lg={6} md={6} sm={12}>
                                        <Flip top>
                                             <div className="aboutMeImage">
                                                  <Zoom top>
                                                       <img className="aboutImg" src={face} />
                                                  </Zoom>
                                             </div>
                                        </Flip>
                                   </Col>
                                   <Col lg={6} md={6} sm={12}>
                                        <div className="aboutMeBody">
                                             <h2 className="aboutMeDetails">HI There, I'm</h2>
                                             <h2 className="aboutMeTitle">{this.state.ptitle}</h2>
                                             <h3 className="aboutMeDetails">I Work as <span id="myElement"> </span> </h3>
                                        </div>
                                   </Col>
                              </Row>
                         </Container>
                    </Fragment>
               )
          }
          else if (this.state.error == true) {
               return <WentWrong />
          }
     }
}

export default AboutMe
