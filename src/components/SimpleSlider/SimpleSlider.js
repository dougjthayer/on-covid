import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class simpleSlider extends React.Component {
  render() {
    var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slider',
        centerMode: true
    };
    return (
    <div>
      <span class="report-date">{this.props.generalData.date}</span>
        <Slider {...settings}>
            <div className="slider-slide slide-1">
                <span class="small-stat">{this.props.generalData.newInfectionsPercentChange}</span>
                <span class="small-title">Increase today</span>
                <span class="big-stat">{this.props.generalData.newInfectionsToday}</span>
                <h2>New Infections</h2>
            </div>
            <div className="slider-slide slide-2">
                <span class="small-stat">{this.props.generalData.testsPositivity}</span>
                <span class="small-title">Positive Today</span>
                <span class="big-stat">{this.props.generalData.testsCompleted}</span>
                <h2>Tests Completed</h2>
            </div>
            <div className="slider-slide slide-3">
                <span class="small-stat">{this.props.generalData.deathsToday}</span>
                <span class="small-title">Deaths Today</span>
                <span class="big-stat">{this.props.generalData.deathsTotal}</span>
                <h2>Total Deaths</h2>
            </div>
            <div className="slider-slide slide-4">
                <span class="small-stat"><span>{this.props.generalData.icu}</span><span>{this.props.generalData.ventilator}</span></span>
                <span class="small-title">ICU / Ventilator</span>
                <span class="big-stat">{this.props.generalData.hospitalized}</span>
                <h2>Hospitalized</h2>
            </div>
            <div className="slider-slide slide-5">
                <h2>Cases by County</h2>
            </div>
        </Slider>
    </div>

    );
  }
}

export default simpleSlider;
