import React from "react";
import ItemsCarousel from "react-items-carousel";
import range from "lodash/range";

class Software2 extends React.Component {
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    // setTimeout(() => {

    //   this.setState({
    //     children: createChildren(20),
    //   })

    // }, 100);
  }

  // createChildren = (n) =>
  //   range(n).map((i) => (
  //     <div key={i} style={{ height: 200, background: "#333" }}>
  //       {i}
  //     </div>
  //   ));

  //changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex } = this.state;

    return (
      <div>
        {/* <div>
          <div class="col-lg-12 col-sm-12 progra">
            <div class="first">
              <div class="row">
                <div class="owl-carousel owl-theme" id="slider">
                  <div class="second">
                    <div class="third">
                      <a href="courses/uicourses.html">
                        <img src="images/core ui.jpeg" />
                      </a>
                    </div>
                    <div class="four">
                      <p>CoreUI</p>
                    </div>
                  </div>

                  <div class="second">
                    <div class="third">
                      <a href="courses/backend.html">
                        <img src="images/backend2.jpg" />
                      </a>
                    </div>
                    <div class="four">
                      <p>Back End</p>
                    </div>
                  </div>

                  <div class="second ">
                    <div class="third">
                      <a href="courses/fullstack.html">
                        <img src="images/fullstack1.jpg" />
                      </a>
                    </div>
                    <div class="four">
                      <p>Full Stack</p>
                    </div>
                  </div>

                  <div class="second">
                    <div class="third">
                      <a href="courses/functionaltesting.html">
                        <img src="images/functionaltesting.png" />
                      </a>
                    </div>
                    <div class="four">
                      <p>Functional Testing</p>
                    </div>
                  </div>

                  <div class="second">
                    <div class="third">
                      <a href="courses/mobility.html">
                        <img src="images/mobility1.jpg" />
                      </a>
                    </div>
                    <div class="four">
                      <p>Mobility</p>
                    </div>
                  </div>

                  <div class="second">
                    <div class="third">
                      <a href="courses/devops.html">
                        <img src="images/devops1.jpg" />
                      </a>
                    </div>
                    <div class="four">
                      <p>DevOps</p>
                    </div>
                  </div>
                  <div class="second">
                    <div class="third">
                      <a href="courses/datascience.html">
                        <img src="images/datascience1.jpg" />
                      </a>
                    </div>
                    <div class="four">
                      <p>Data Science & AI/ML</p>
                    </div>
                  </div>
                  <div class="second">
                    <div class="third">
                      <a href="courses/cloud.html">
                        <img src="images/cloudcomputing1.jpg" />
                      </a>
                    </div>
                    <div class="four">
                      <p>Cloud Computing</p>
                    </div>
                  </div>
                  <div class="second">
                    <div class="third">
                      <a href="courses/cyber.html">
                        <img src="images/cyber.jpg" />
                      </a>
                    </div>
                    <div class="four">
                      <p>Cyber Security</p>
                    </div>
                  </div>
                  <div class="second">
                    <div class="third">
                      <a href="courses/digital.html">
                        <img src="images/digi1.jpg" />
                      </a>
                    </div>
                    <div class="four">
                      <p>Digital Marketing</p>
                    </div>
                  </div>
                  <div class="second">
                    <div class="third">
                      <a href="courses/erp.html">
                        <img src="images/erp2.jpg" />
                      </a>
                    </div>
                    <div class="four">
                      <p>ERP</p>
                    </div>
                  </div>
                  <div class="second">
                    <div class="third">
                      <a href="courses/it.html">
                        <img src="images/IT2.jpg" />
                      </a>
                    </div>
                    <div class="four">
                      <p>IT</p>
                    </div>
                  </div>
                  <div class="second">
                    <div class="third">
                      <a href="courses/itcertification.html">
                        <img src="images/it.jpeg" />
                      </a>
                    </div>
                    <div class="four">
                      <p>IT Certifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <ItemsCarousel
        // Placeholder configurations
        // enablePlaceholder
        // numberOfPlaceholderItems={5}
        // minimumPlaceholderTime={1000}
        // placeholderItem={
        //   <div style={{ height: 800, background: "#900" }}>Placeholder</div>
        // }
        // Carousel configurations
        // numberOfCards={5}
        // gutter={12}
        // showSlither={true}
        // firstAndLastGutter={true}
        // freeScrolling={true}
        // // Active item configurations
        // requestToChangeActive={this.changeActiveItem}
        // activeItemIndex={activeItemIndex}
        // activePosition={"center"}
        // chevronWidth={24}
        // rightChevron={">"}
        // leftChevron={"<"}
        // outsideChevron={false}
        // dots
        >
          <br />
          <br />
          <div className="second">
            <div className="third">
              <a href="courses/uicourses">
                <img src="../images/core ui.jpeg" />
              </a>
            </div>
            <div className="four">
              <p>CoreUI</p>
            </div>
          </div>

          <div className="second">
            <div className="third">
              <a href="courses/backend">
                <img src="../images/backend2.jpg" />
              </a>
            </div>
            <div className="four">
              <p>Back End</p>
            </div>
          </div>
          <div className="second">
            <div className="third">
              <a href="courses/fullstack">
                <img src="../images/fullstack1.jpg" />
              </a>
            </div>
            <div className="four">
              <p>Full Stack</p>
            </div>
          </div>
          <div className="second">
            <div className="third">
              <a href="courses/functionaltesting">
                <img src="../images/functionaltesting.png" />
              </a>
            </div>
            <div className="four">
              <p>Functional Testing</p>
            </div>
          </div>

          <div className="second">
            <div className="third">
              <a href="courses/mobility">
                <img src="../images/mobility1.jpg" />
              </a>
            </div>
            <div className="four">
              <p>Mobility</p>
            </div>
          </div>

          <div className="second">
            <div className="third">
              <a href="courses/devops">
                <img src="../images/devops1.jpg" />
              </a>
            </div>
            <div className="four">
              <p>DevOps</p>
            </div>
          </div>
          <div className="second">
            <div className="third">
              <a href="courses/datascience">
                <img src="../images/datascience1.jpg" />
              </a>
            </div>
            <div className="four">
              <p>Data Science &amp; AI/ML</p>
            </div>
          </div>
          <div className="second">
            <div className="third">
              <a href="courses/cloud">
                <img src="../images/cloudcomputing1.jpg" />
              </a>
            </div>
            <div className="four">
              <p>Cloud Computing</p>
            </div>
          </div>

          <div className="second">
            <div className="third">
              <a href="courses/cyber">
                <img src="../images/cyber.jpg" />
              </a>
            </div>
            <div className="four">
              <p>Cyber Security</p>
            </div>
          </div>
          <div className="second">
            <div className="third">
              <a href="courses/digital">
                <img src="../images/digi1.jpg" />
              </a>
            </div>
            <div className="four">
              <p>Digital Marketing</p>
            </div>
          </div>

          <div className="second">
            <div className="third">
              <a href="courses/erp">
                <img src="../images/erp2.jpg" />
              </a>
            </div>
            <div className="four">
              <p>ERP</p>
            </div>
          </div>

          <div className="second">
            <div className="third">
              <a href="courses/it">
                <img src="../images/IT2.jpg" />
              </a>
            </div>
            <div className="four">
              <p>IT</p>
            </div>
          </div>

          <div className="second">
            <div className="third">
              <a href="courses/itcertification">
                <img src="../images/it.jpeg" />
              </a>
            </div>
            <div className="four">
              <p>IT Certifications</p>
            </div>
          </div>
        </ItemsCarousel>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default Software2;
