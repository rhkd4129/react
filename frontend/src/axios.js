import React from "react";
import axios from "axios";


class Axios extends React.Component{
    state ={
        episodeList:[],
    }


    componentDidMount(){
         const apiUrl = '';
         const parmas={
            q:'mr-robot',
            embed:'episodes',

         };

    axios.get(apiUrl,{parmas})
         .then(response=>{
            const {data} = response;
            console.log(response)
         })
         .catch(error=>{
            console.error(error)
         });
    }
    render(){
        const {episodeList} = this.state()
        return(<div>

        </div>)
    }
}