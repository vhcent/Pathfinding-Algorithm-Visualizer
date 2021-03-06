import React, { Component } from 'react';
import "./Node.css";

export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        const {row, column, isStart, isFinish, isWall, isWeight, nodeColor, onMouseDown, onMouseEnter, onMouseUp} = this.props;
        var extraClassName='';
        if (isStart) {
            extraClassName='start';
        }
        else if (isFinish) {
            extraClassName='finish';
        }
        else if (isWall) {
            extraClassName='wall'
        }
        else if (isWeight) {
            extraClassName='weight';
        }
        // console.log('R:' + row + ": " + column);
        return (<div style={{ backgroundColor: nodeColor}}
                id={`node-${row}-${column}`}
                className={`node ${extraClassName}`}
                onMouseDown = {() => onMouseDown(row, column)}
                onMouseEnter = {() => onMouseEnter(row, column)}
                onMouseUp = {() => onMouseUp(row, column)}>
                </div>);
    }
}

