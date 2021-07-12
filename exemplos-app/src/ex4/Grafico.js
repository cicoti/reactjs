import React, { Component } from "react";
import Eixo from "./Eixo";
import {
    Circle
} from "draw-shape-reactjs";
//https://www.npmjs.com/package/draw-shape-reactjs
class Grafico extends Component {

    render() {
        return (
        <div>
        <div
            style={{
                left: '50px',
                height: '50vh',
                width: '50vw',
                position: 'relative'
            }}>
            <Circle center={[400,200]} radius={2} color='#FF0000' />
        </div>
        <div>
        <table border="0"><tr><td align="center" valign="top">X:</td><td>{<Eixo/>}</td><td align="center" valign="top">Y:</td><td>{<Eixo/>}</td></tr></table>
        </div>
        </div>
        );
    }
       

}



export default Grafico;