import React from 'react';
import Tabletop from 'tabletop';
import SimpleSlider from '../SimpleSlider/SimpleSlider';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const sheetURL = "1J_h6JRT_dmo32bTfeIaW8CtX0qUYXuqCJoTxE6-2Lpk";
// temp sheet URL in case oncovid breaks again
// const tempURL = "1TGP492L2wqXTz9JV_6bFA7SvlbB6w7_ImbuHblOQdzg";
// Google API key
//const apiKey = "AIzaSyB50W-Au76ibJVnFfKiYcJPMpON7G0A_hw";

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
            //Loading and noData flags
            loading: false,
            noData: false,
            //Todays data with commas
            todaysData: [],
            //Todays data with no commas
            noCommasData: [],
            //List of statuses for all zones
            zoneStatus: [],
            //Index to determine where today's date is in array of data
            indexForToday: -1,
            //Increase today or Decrease today based on case growth from previous day
            //Used in slide 1 of slider
            newInfectionsIncrease: false,
            //Individual county data
            countyData: "",
            //General data
            provinceData: "",
            //Health unit locations
            healthUnits: ""
        }
        this.init = this.init.bind(this);
        this.checkForData = this.checkForData.bind(this);
        this.setInfectionChangeText = this.setInfectionChangeText.bind(this);
        this.populateData = this.populateData.bind(this);
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
            key: sheetURL,
            simpleSheet: true,
            callback: this.populateData,
            orderby: "rank",
            parseNumbers: true
        })
        .then((data) => this.populateData(data, tabletop))
        .catch((err) => console.warn(err))
    }

    //Check if today's data is on the sheet yet
    checkForData(){
        //If data is not available for today, set noData flag to true
        //Todays data to yesterday's and index to length - 1 (today is last in array, so yesterday is second last)
        if(this.state.provinceData[0].newInfectionsToday === "#N/A"){
            this.setState({ 
                noData: true,
                todaysData: this.state.provinceData[1],
                indexForToday: 1
            })
        }
        //Otherwise set to flag to false, todays data to today and index to last element
        else
            this.setState({ 
              noData: false,
              todaysData: this.state.provinceData[0],
              indexForToday: 0
            })
    }

    //Set text and arrow for infection change
    setInfectionChangeText(){
        //"↓ Decrease today"
        //"↑ Increase today"
        //Set text based on case growth, used in slide 1 of slider
        
        //Math.sign returns 1 if the number is positive, -1 if negative
        if (Math.sign(parseFloat(this.state.provinceData[this.state.indexForToday].newInfectionsPercentChange)) === 1)
            this.setState({ newInfectionsIncrease: true })
        else
            this.setState({ newInfectionsIncrease: false })
        this.setState({ loading: false })
    }

    populateData(data, tabletop){
        //Grab county stats from "countyRank" sheet tab
        //Remove last element because it's just column titles
        let countyData = tabletop.sheets("countyRank").all();
        countyData.splice(countyData.length-1,1);
        //Grab zone status data from "zoneStatus" sheet tab
        let zoneData = tabletop.sheets("zoneStatus").all();
        //Grab historical data from "dataSnapshot" sheet tab
        let provinceData = tabletop.sheets("dataSnapshot").all();
        //Grab data with no commas for parsing purposes
        let noCommas = tabletop.sheets("dataSnapshotNoCommas").all();
        //Grab health unit info from "healthUnitInfo" sheet tab
        let healthUnitInfo = tabletop.sheets("healthUnitInfo").all();
        
        //Debug to console
        //console.log(countyData);
        //console.log(provinceData);
        //console.log(healthUnitInfo);

        //Put all data in state
        this.setState({
            indexForToday: 0,
            countyData: countyData,
            provinceData: provinceData,
            noCommasData: noCommas,
            healthUnits: healthUnitInfo,
            zoneStatus: zoneData
        })

        this.checkForData();
        this.setInfectionChangeText();
    }

    //Request user location data from Google API
    //getUserCounty(location){
        
        /*Google API shit, maybe fuck this shit, we'll see
        let test = "48.693584, -93.635469";
        let latlong = location.coords.latitude + "," + location.coords.longitude;
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+test+'&result_type=administrative_area_level_2&key='+apiKey)
            .then(({data}) => {       
                console.log(data);
                console.log("User located in: " + data.results[0].address_components[0].short_name);
            })*/
    //}
    render(){
        return (
            <div className="container">
                    { this.state.loading === true ? <span class="loader">Loading...</span> : <SimpleSlider zoneStatus = {this.state.zoneStatus} healthUnits = {this.state.healthUnits} noCommasData = {this.state.noCommasData} todaysData={this.state.todaysData} noData={this.state.noData} countyData={this.state.countyData} provinceData={this.state.provinceData} newInfectionsIncrease={this.state.newInfectionsIncrease}/>}
            </div>
        )
    }
}

export default Home;
