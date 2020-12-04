import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class simpleSlider extends React.Component {
  render() {
    var settings = {
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
        <Slider {...settings}>
            <div classname="slider-slide">
                {this.props.generalData.date} <br />
                {this.props.generalData.newInfectionsPercentChange} <br />
                Increase today <br />
                {this.props.generalData.newInfectionsToday} <br />
                New Infections <br />
            </div>
            <div classname="slider-slide">
                {this.props.generalData.date} <br />
                {this.props.generalData.testsPositivity} <br />
                Positive Today <br />
                {this.props.generalData.testsCompleted} <br />
                Tests Completed <br />
            </div>
            <div classname="slider-slide">
                {this.props.generalData.date} <br />
                {this.props.generalData.deathsToday} <br />
                Deaths Today <br />
                {this.props.generalData.deathsTotal} <br />
                Total Deaths <br />
            </div>
            <div className="slider-slide">
                {this.props.generalData.date} <br />
                {this.props.generalData.icu}   {this.props.generalData.ventilator} <br />
                ICU / Ventilator <br />
                {this.props.generalData.hospitalized} <br />
                Hospitalized <br />
            </div>
            <div className="slider-slide">
                Put county data here
            </div>
        </Slider>
    </div>
      
    );
  }
}

export default simpleSlider;