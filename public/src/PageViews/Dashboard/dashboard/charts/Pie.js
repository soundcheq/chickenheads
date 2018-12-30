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
    const color = this.props.cheq ? '#12db00' : '#ffbe0b'
    var myPie = new Chart(node, {
        type: 'pie',
        data: {
          labels: ["RSVPs"],
          datasets: [{
            label: "Population (millions)",
            backgroundColor: [color, "#f7f7f7"],
            data: [400, this.props.count]
          }]
        },
        options: {
          title: { display: false },
          elements: { arc: { borderWidth: 0 } }
        }
    });
  }

  render() {
    return (
        <Container>
         <canvas
         style={{ width: 100, height: 100 }}
         ref={node => (this.node = node)} />
         <Circle>{this.props.display}</Circle>
        </Container>
    );
  }
}


const Container = styled.div`
width: 25%;
${style.f}
${style.allCenter}
position: relative;
padding: 0;
margin: 0;

`

const Circle = styled.div`
width: 60px;
height: 60px;
border-radius: 30px;
background: black;
position: absolute;
${style.f}
${style.allCenter}
font-size: 1.3em;
color: white;
`
