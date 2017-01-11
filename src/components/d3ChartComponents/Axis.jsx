import React from 'react';
import  * as d3 from 'd3';

export default class Axis extends React.Component {

  componentDidUpdate() {
    this.renderAxis();
  }

  componentDidMount() {
    this.renderAxis();
  }

  renderAxis() {
    let node  = this.refs.axis;
    let axis = this.props.orient === 'left' ? d3.axisLeft().scale(this.props.scale) : d3.axisBottom().scale(this.props.scale);
    d3.select(node).call(axis);
  }

  render() {
    return <g className="axis" ref="axis" transform={this.props.translate}></g>
  }
}
