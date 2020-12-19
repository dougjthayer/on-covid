import React from 'react';
import Tabletop from 'tabletop';
import SimpleSlider from '../SimpleSlider/SimpleSlider'
import axios from 'axios';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

// const sheetURL = "14L2_NpdD9oJaHVeGSBNDnmYqdgmakbbscUIsXP-fUic";
const tempURL = "1TGP492L2wqXTz9JV_6bFA7SvlbB6w7_ImbuHblOQdzg";
const apiKey = "AIzaSyB50W-Au76ibJVnFfKiYcJPMpON7G0A_hw";

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
            noData: false,
            todaysData: [],
            noCommasData: [],
            indexForToday: -1,
            userLat: 0,
            userLong: 0,
            //Increase today or Decrease today based on case growth from previous day
            //Used in slide 1 of slider
            newInfectionsIncrease: false,
            //Individual county data
            countyData: "",
            //General data for the entire week
            pastWeekInfections: "",
            //Testing health unit locations
            healthUnits: ""
        }
        this.init = this.init.bind(this);
        this.checkForData = this.checkForData.bind(this);
        this.setInfectionChangeText = this.setInfectionChangeText.bind(this);
        this.populateData = this.populateData.bind(this);
        this.getUserLocation = this.getUserLocation.bind(this);
        this.getUserCounty = this.getUserCounty.bind(this);
    }

    //runs init method on component mount
    componentDidMount(){
        this.init();
        this.getUserLocation();
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

    checkForData(){
        //Check if today's data is on the sheet yet
        let length = this.state.pastWeekInfections.length - 1;
        if(this.state.pastWeekInfections[length].newInfectionsToday === "#N/A"){
            this.setState({ 
                noData: true,
                todaysData: this.state.pastWeekInfections[length - 1],
                indexForToday: length - 1
            })
        }
        else
            this.setState({ 
              noData: false,
              todaysData: this.state.pastWeekInfections[length],
              indexForToday: length
            })
    }

    setInfectionChangeText(){
        //"↓ Decrease today"
        //"↑ Increase today"
        //Set text based on case growth, used in slide 1 of slider
        if (Math.sign(parseFloat(this.state.pastWeekInfections[this.state.indexForToday].newInfectionsPercentChange)) === 1)
            this.setState({ newInfectionsIncrease: true })
        else
            this.setState({ newInfectionsIncrease: false })
        this.setState({ loading: false })
    }

    populateData(data, tabletop){
        //Grab county stats from "countyRank" sheet tab
        let countyData = tabletop.sheets("countyRank").all();
        //Grab historical data from past week from "dataSnapshot" sheet tab
        let weeksData = tabletop.sheets("dataSnapshot").all();
        let noCommas = tabletop.sheets("dataSnapshotNoCommas").all();
        let healthUnitInfo = tabletop.sheets("healthUnitInfo").all();
        //Debug to console

        // console.log(countyData);
        // console.log(weeksData);
        //console.log(healthUnitInfo);

        //Set Ontario-wide stats and county stats
        //County data is left as-is and passed to slider for sake of simplicity
        //Weekly data is the same
        this.setState({
            indexForToday: weeksData.length - 1,
            countyData: countyData,
            pastWeekInfections: weeksData,
            noCommasData: noCommas,
            healthUnits: healthUnitInfo
        })

        this.checkForData();
        this.setInfectionChangeText();
    }

    //Get user location if they allow it, pass it to Google API fetch function
    getUserLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getUserCounty);
        } else {
           console.log("Geolocation not supported");
        }
    }

    //Request user location data from Google API
    getUserCounty(location){
        this.setState({ userLat: location.coords.latitude, userLong: location.coords.longitude })
        
        /*Google API shit, maybe fuck this shit, we'll see
        let test = "48.693584, -93.635469";
        let latlong = location.coords.latitude + "," + location.coords.longitude;
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+test+'&result_type=administrative_area_level_2&key='+apiKey)
            .then(({data}) => {       
                console.log(data);
                console.log("User located in: " + data.results[0].address_components[0].short_name);
            })*/
    }

    // {this.getUserLocation()}
    // style={this.state.loading === true ? {opacity: 0} : {opacity: 1}}
    // Add this line to element to change capacity based on loading status
    // Won't work in SimpleSlider because it's checking the Home component's state which the slider doesn't have access to
    render(){
        return (
            <div className="container">
                    { this.state.loading === true ? <span class="loader">Loading...</span> : <SimpleSlider healthUnits = {this.state.healthUnits} userLong = {this.state.userLong} userLat = {this.state.userLat} noCommasData = {this.state.noCommasData} todaysData={this.state.todaysData} noData={this.state.noData} countyData={this.state.countyData} pastWeekInfections={this.state.pastWeekInfections} newInfectionsIncrease={this.state.newInfectionsIncrease}/>}
            </div>
        )
    }
}

export default Home;
