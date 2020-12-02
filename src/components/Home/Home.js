import React from 'react';
import Tabletop from 'tabletop';
import './Home.css';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            generalData: {
                date: "",
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
        Tabletop.init({
            key: "14L2_NpdD9oJaHVeGSBNDnmYqdgmakbbscUIsXP-fUic",
            simpleSheet: true
        })
        .then((data) => this.populateData(data))
        .catch((err) => console.warn(err))
    }

    populateData(newData){
        console.log(newData);
        this.setState({
            generalData: {
                date: newData[0].date,
                newInfectionsToday: newData[0].newInfectionsToday,
                newInfectionsYesterday: newData[0].newInfectionsYesterday,
                newInfectionsPercentChange: newData[0].newInfectionsPercentChange,
                deathsToday: newData[0].deathsToday,
                deathsTotal: newData[0].deathsTotal,
                testsCompleted: newData[0].testsCompleted,
                testsPositivity: newData[0].testsPositivity,
                hospitalized: newData[0].hospitalized,
                icu: newData[0].icu,
                icuPercent: newData[0].icuPercent,
                ventilator: newData[0].ventilator,
                ventilatorPercent: newData[0].ventilatorPercent,
            }
        })
    }
    
    render(){
        return (
            <div className="container">
                <div className="main-text">
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
                </div>
            </div>
        )
    }
}

export default Home;