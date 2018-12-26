import React from "react";
import styled from 'styled-components'
import * as style from '../_Variables'


var Chart = require("chart.js")
Chart.defaults.global.defaultFontFamily = "'Proxima', sans-serif"
Chart.defaults.global.legend.display = false;

export default class MacroChart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "RSVPs",
            data: [2, 12, 19, 3, 10, 12, 5, 7, 10, 15, 10, 30],
            fill: false,
            borderColor: "#ffbe0b"
          },
          {
            label: "CHEQs",
            data: [5, 3, 25, 7, 11, 10, 9, 2, 15, 18, 15, 20],
            fill: false,
            borderColor: "#12db00",
          }
        ]
      }
    });
  }

  render() {
    return (
      <Container>
        <ChartBar>
            <LI>Now</LI>
            <LI>Last Event</LI>
            <LI>Last Week</LI>
            <LI>Quarter</LI>
            <LI>Last Event</LI>
            <LI>6 Months</LI>
            <LI>Year</LI>
        </ChartBar>

        <canvas
          style={{ width: 700, height: 250 }}
          ref={node => (this.node = node)}
        />

      </Container>
    );
  }
}

const Container = styled.section`
${style.f}
${style.column}
`

const ChartBar = styled.div`
${style.f}
${style.center}
justify-content: space-evenly;
width: 700px;
height: 25px;
background: #efefef;
border-radius: 15px;
margin: 10px 0px;
`

const LI = styled.li`
list-style-type: none;
margin: 0px 10px;
cursor: pointer;
font-size: 0.9em;

:hover {
  color: gray;
}
`