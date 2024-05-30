import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import sliderImg1 from "../../assets/images/slider/3.jpg";
import sliderImg2 from "../../assets/images/slider/22.JPG";
import { useIntl } from "react-intl";

const HomeSlider = () => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    margin: 0,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="react-slider-part">
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="556kHjwS43I"
          onClose={() => {
            openModal();
          }}
        />
        <div className="home-sliders home2">
          <Slider {...sliderSettings}>
            <div className="single-slide">
              <div className="slider-img">
                <img
                  className="desktop"
                  src={sliderImg1}
                  style={{
                    height: "700px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <img
                  className="mobile"
                  src={sliderImg1}
                  alt="Slider Image 1"
                  style={{ height: "550px", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="container">
                <div className="slider-content">
                  <div className="content-part">
                    {/* <span
                      className="slider-pretitle wow animate__fadeInUp"
                      data-wow-duration="1s"
                    >
                      Great Quality Cocial life
                    </span> */}
                    <h2
                      className="slider-title wow animate__fadeInUp"
                      data-wow-duration="1s"
                    >
                      {intl.formatMessage({
                        id: "COMMON.SLIDER_1_1",
                      })}{" "}
                      <br />
                      {intl.formatMessage({
                        id: "COMMON.SLIDER_1_2",
                      })}
                    </h2>
                    <div
                      className="slider-btn wow animate__fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <a
                        href="https://ipu.educon.uz"
                        target="_blank"
                        className="react-btn-border"
                      >
                        {intl.formatMessage({
                          id: "COMMON.SUBMIT_AN_APPLICATION",
                        })}
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="event__video-btn--play wow animate__fadeInUp"
                  data-wow-duration="1.4s"
                >
                  <Link
                    to="#"
                    className="event__video-btn--play-btn custom-popup"
                    onClick={() => {
                      openModal();
                    }}
                  >
                    <i className="arrow_triangle-right"></i>
                    {/* <em>
                      Watch Video <br />
                      Intro
                    </em> */}
                  </Link>
                </div>
              </div>
            </div>
            <div className="single-slide">
              <div className="slider-img">
                <img
                  className="desktop"
                  src={sliderImg2}
                  alt="Slider Image 1"
                  style={{
                    height: "700px",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "right bottom",
                  }}
                />
                <img
                  className="mobile"
                  src={sliderImg2}
                  alt="Slider Image 1"
                  style={{ height: "550px", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="container">
                <div className="slider-content">
                  <div className="content-part">
                    {/* <span
                      className="slider-pretitle wow animate__fadeInUp"
                      data-wow-duration="3s"
                    >
                      Great Quality Cocial life
                    </span> */}
                    <h2
                      className="slider-title wow animate__fadeInUp"
                      data-wow-duration="1s"
                    >
                      {intl.formatMessage({
                        id: "COMMON.SLIDER_2_1",
                      })}
                      <br />{" "}
                      {intl.formatMessage({
                        id: "COMMON.SLIDER_2_2",
                      })}{" "}
                      <br />
                      {intl.formatMessage({
                        id: "COMMON.SLIDER_2_3",
                      })}
                    </h2>
                    <div
                      className="slider-btn wow animate__fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <a
                        href="https://ipu.educon.uz"
                        target="_blank"
                        className="react-btn-border"
                      >
                        {intl.formatMessage({
                          id: "COMMON.SUBMIT_AN_APPLICATION",
                        })}
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="event__video-btn--play wow animate__fadeInUp"
                  data-wow-duration="1.4s"
                >
                  <Link
                    to="#"
                    className="event__video-btn--play-btn custom-popup"
                    onClick={() => {
                      openModal();
                    }}
                  >
                    <i className="arrow_triangle-right"></i>
                    {/* <em>
                      Watch Video <br />
                      Intro
                    </em> */}
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
