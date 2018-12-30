import React from "react";
import styled from 'styled-components'
import * as style from '../../_Variables'

var Chart = require("chart.js")
Chart.defaults.global.defaultFontFamily = "'Proxima', sans-serif"
Chart.defaults.global.legend.display = false;

export default class RsvpGraph extends React.Component {
constructor(props) {
    super(props);
    }
  componentDidMount() {
    const node = this.node;

    var myPie = new Chart(node, {
        type: 'pie',
        data: {
          labels: ["RSVPs"],
          datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#f7f7f7"],
            data: [400, 200]
          }]
        },
        options: {
          title: {
            display: false
          }
        }
    });
  }

  render() {
    return (
        <Container>
       
        <Circle>
        <canvas ref={node => (this.node = node)} />
        </Circle>
        </Container>
    );
  }
}


const Container = styled.div`
width: 200px;

background: 'green';

`

const Circle = styled.div`
width: 150px;
background: 'red';

`
