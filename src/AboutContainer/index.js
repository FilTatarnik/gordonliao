import React from "react";
import { MDBJumbotron, MDBBtn, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import { Link, animateScroll as scroll } from "react-scroll";
import './styles.css'

const JumbotronPage = () => {
  return (
    <div className="about-back" id="section2">
    
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }} id="about-image">
            <MDBCol className="text-white text-center py-5 px-4 my-8" 
            style={{ 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`  
              }} id="about-image">
              <MDBCol className="py-5" id="about-text">
                <p className="mx-5 mb-5"></p><h3>“Promise Holdings was created to help small companies reach their promise or potential, while always living and adding value with trust & integrity. That is our promise”</h3>
                <br/>
                <p className="mx-5 mb-5">Promise Holdings is a private investment firm focused on investing in small businesses, primarily in the consumer sector, with a special emphasis in food, fashion & beauty. We are not a Private Equity or Venture Capital firm so do not look to sell within 3 to 5 years. Instead we have a very long-term hold orientation and may never sell in certain instances. We also have a very flexible mandate as we invest in both late stage, mature businesses, as well as early stage start-ups. <strong>We can also invest a controlling stake, or a small, minority, non-control stake in businesses.  The only things we look for are:</strong></p><h4>Great people with high integrity, openness and character</h4><br/><h4>Fun people because we like to have a good time</h4><br/><h4>Good ideas</h4>
                <br/>
                
         
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> Learn more</MDBBtn>
                 </Link>
            </li>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    
    </div>
  )
}

export default JumbotronPage;