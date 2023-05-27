import React from "react";
import { ReactPropTypes } from "react";
import PropTypes from 'prop-types'


class Counter extends React.Component{
    static defaultPrpos={
        color:'red',
    }
    // static PropTypes={
    //     color:PropTypes.string,
    // }
    
    state = {   
        value:0,
        color:this.props.color,
    }
    
    onClick=()=>{
    // this.setState(prevState=> ({
    //    value:prevState.value+1
    //   }))
     this.setState(({value}) => ({
        value:value+1
         }))
    }

    onContextMenu=(e)=>{
        e.preventDefault();
        this.setState(({value}) => ({
            value:(value>=1 ? value-1:0)

            // 조건 ? 참 실행문:거짓실행문
            // value 가 1보다 크다면은 value-1 아니라면은 0을 
             }))
    }
    render(){
        const {color,value} = this.state
        return(
            <div onClick={this.onClick} 
            onContextMenu={this.onContextMenu}
            style = {{...style,backgroundColor:color } }>
               {value}
            </div>
        );
    }
}
const style={
    width:'100px',
    height:'100px',
    display:'inline-block',
    borderRadius:'50px',
    textAlign:'center',
    lineHeight:'100px',
    userSelect:'none',
    fontSize:'3rem',
    margin:'1rem',

}
export default  Counter;