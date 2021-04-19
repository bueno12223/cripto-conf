import React from "react"
import {Link } from 'react-router-dom'

import "./styles/badges.css"

import Badges from "../components/badges"
import Loader from "../components/loader"


class BadgesList extends  React.Component {
    state = {
        loading: true,
        error: null,
        data: []
    }
    
    componentDidMount(){
        this.fetchData()
    }
    fetchData = async () => {
        try{
            for (let index = 1; index <= 6; index++) {
                const data = await fetch("https://rickandmortyapi.com/api/character/" + index)
                const results = await data.json()
                this.state.data.push(results)
            }
            this.setState({loading:false})
        }catch(e){
            this.setState({loading:false, error: e})
        }
    }

    render() {
        if(this.state.loading === true){
            return <Loader></Loader>
        }
         
        return(<React.Fragment>

            
        <div className="Badges__hero"></div>

            <div className="Badges_buttons">

            </div>
            <div className="Badges__list">
            <Link to="/badgesNew"><button className="btn">Nuevo Bage</button></Link>
                <div className="Badges__conatiner">
                <Badges badges={this.state.data} />
                    
                </div>
            </div>


        </React.Fragment>

        );

    }
}
export default BadgesList