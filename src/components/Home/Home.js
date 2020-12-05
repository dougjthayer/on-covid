import React from 'react';
import Tabletop from 'tabletop';
import SimpleSlider from '../SimpleSlider/SimpleSlider'

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

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
            newInfectionsChangeText: "",
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
            countyData: {

            }
        }
        this.init = this.init.bind(this);
        this.populateData = this.populateData.bind(this);
    }

    componentDidMount(){
        this.init();
    }

    componentWillUnmount(){

    }

    init(){
        this.setState({ loading: true })
        var tabletop = Tabletop.init({
            key: "14L2_NpdD9oJaHVeGSBNDnmYqdgmakbbscUIsXP-fUic",
            simpleSheet: true,
            callback: this.populateData
        })
        .then((data) => this.populateData(data, tabletop), this.setState({ loading: false }))
        .catch((err) => console.warn(err))
    }

    populateData(data, tabletop){
        let todaysData = tabletop.sheets("stats").elements[0];
        console.log(tabletop.sheets("stats").elements[0]);
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
            }
        })
        if (Math.sign(parseInt(todaysData.newInfectionsPercentChange)) === 1)
            this.setState({ newInfectionsChangeText: "Increase today" })
        else  
            this.setState({ newInfectionsChangeText: "Decrease today" })
        
    }

    /*
    Date: {this.state.generalData.date} <br />
                   New Infections Today:  {this.state.generalData.newInfectionsToday} <br />
                   New Infections Yesterday: {this.state.generalData.newInfectionsYesterday} <br />
                   Increase in New Infections:  {this.state.generalData.newInfectionsPercentChange} <br />
                   Deaths Today: {this.state.generalData.deathsToday} <br />
                   Total Deaths: {this.state.generalData.deathsTotal} <br />
                   Tests Completed: {this.state.generalData.testsCompleted} <br />
                   Test Positivity Rate: {this.state.generalData.testsPositivity} <br />
                   Hospitalized: {this.state.generalData.hospitalized} <br />
                   ICU: {this.state.generalData.icu} <br />
                   ICU Percent: {this.state.generalData.icuPercent} <br />
                   Ventilator: {this.state.generalData.ventilator} <br />
                   Ventilator Percent: {this.state.generalData.ventilatorPercent} <br />
    */
    render(){
        return (
            <div className="container">
                <div className="main-text">
                    <SimpleSlider generalData={this.state.generalData} newInfectionsChangeText={this.state.newInfectionsChangeText}/>
                </div>
            </div>
        )
    }
}

export default Home;
