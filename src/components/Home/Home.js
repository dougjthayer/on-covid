import React from 'react';
import Tabletop from 'tabletop';
import SimpleSlider from '../SimpleSlider/SimpleSlider'

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

// const sheetURL = "14L2_NpdD9oJaHVeGSBNDnmYqdgmakbbscUIsXP-fUic";
const tempURL = "1TGP492L2wqXTz9JV_6bFA7SvlbB6w7_ImbuHblOQdzg";

/* IF CHANGE TO PAPA PARSE IS NECESSARY
CHANGE INIT FUNCTION
    init(){
        Papa.parse('https://docs.google.com/spreadsheets/d/14L2_NpdD9oJaHVeGSBNDnmYqdgmakbbscUIsXP-fUic/pub?output=csv', {
          download: true,
          header: true,
          complete: this.populateData
          }
        )
    }
ADD IMPORT
    import Papa from 'papaparse';
*/

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            //Increase today or Decrease today based on case growth from previous day
            //Used in slide 1 of slider
            newInfectionsIncrease: false,
            //Ontario-wide data
            generalData: {
                date: "one sec pls",
                newInfectionsToday: 0,
                newInfectionsYesterday: 0,
                newInfectionsPercentChange: 0,
                deathsToday: 0,
                deathsTotal: 0,
                testsCompleted: 0,
                testPositivity: 0,
                hospitalized: 0,
                icu: 0,
                icuPercent: 0,
                ventilator: 0,
                ventilatorPercent: 0,
            },
            //Individual county data
            countyData: "",
            //General data for the entire week
            pastWeekInfections: ""
        }
        this.init = this.init.bind(this);
        this.populateData = this.populateData.bind(this);
        this.getUserLocation = this.getUserLocation.bind(this);
        this.displayLocation = this.displayLocation.bind(this);
    }
    
    //runs init method on component mount
    componentDidMount(){
        this.init();
    }

    componentWillUnmount(){

    }

    //grabs data from Google spreadsheet and sends to populateData method
    init(){
        this.setState({ loading: true })
        var tabletop = Tabletop.init({
            key: tempURL,
            simpleSheet: true,
            callback: this.populateData,
            orderby: "rank",
            parseNumbers: true
        })
        .then((data) => this.populateData(data, tabletop))
        .catch((err) => console.warn(err))
    }

    populateData(data, tabletop){
        //Grab today's stats from "dataSnapshot" sheet tab, using last element for today's data
        let todaysData = tabletop.sheets("dataSnapshot").elements[6];
        //Grab county stats from "countyRank" sheet tab
        let countyData = tabletop.sheets("countyRank").all();
        //Grab historical data from past week from "dataSnapshot" sheet tab
        let weeksData = tabletop.sheets("dataSnapshot").all();
        //Debug to console
        /*
        console.log(todaysData);
        console.log(countyData);
        console.log(weeksData);
        */
        //Set Ontario-wide stats and county stats
        //County data is left as-is and passed to slider for sake of simplicity
        //Weekly data is the same
        this.setState({
            generalData: {
                date: todaysData.date,
                newInfectionsToday: todaysData.newInfectionsToday,
                newInfectionsYesterday: todaysData.newInfectionsYesterday,
                newInfectionsPercentChange: todaysData.newInfectionsPercentChange,
                deathsToday: todaysData.deathsToday,
                deathsTotal: todaysData.deathsTotal,
                testsCompleted: todaysData.testsCompleted,
                testsPositivity: todaysData.testsPositivity,
                hospitalized: todaysData.hospitalized,
                icu: todaysData.icu,
                icuPercent: todaysData.icuPercent,
                ventilator: todaysData.ventilator,
                ventilatorPercent: todaysData.ventilatorPercent,
            },
            countyData: countyData,
            pastWeekInfections: weeksData
        })
        
        //"↓ Decrease today" 
        //"↑ Increase today"
        //Set text based on case growth, used in slide 1 of slider
        if (Math.sign(parseFloat(todaysData.newInfectionsPercentChange)) === 1)
            this.setState({ newInfectionsIncrease: true })
        else  
            this.setState({ newInfectionsIncrease: false })
        this.setState({ loading: false })
    }

    //Get user location if they allow it, pass it to display function
    getUserLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.displayLocation);
        } else {
           console.log("Geolocation not supported");
        }
    }

    //Display user location, currently in console
    displayLocation(position){
        console.log("Lat: " + position.coords.latitude + " Long: " + position.coords.longitude);
    }
    
    render(){
        return (
            <div className="container">
                    {this.getUserLocation()}
                    <SimpleSlider generalData={this.state.generalData} countyData={this.state.countyData} pastWeekInfections={this.state.pastWeekInfections} newInfectionsIncrease={this.state.newInfectionsIncrease}/>
            </div>
        )
    }
}

export default Home;
