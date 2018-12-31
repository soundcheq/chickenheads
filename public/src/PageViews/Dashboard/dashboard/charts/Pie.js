import React from "react";
import styled from 'styled-components'
import * as style from '../../_Variables'

var Chart = require("chart.js")
Chart.defaults.global.defaultFontFamily = "'Proxima', sans-serif"
Chart.defaults.global.legend.display = false;

export default class Pie extends React.Component {
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
          <InnerContainer>
            <canvas style={{ width: 60, height: 60 }}
            ref={node => (this.node = node)} />
            <Circle>{this.props.display}</Circle>
          </InnerContainer>

          <Description>{this.props.chartTitle}</Description>
        </Container>

     
    );
  }
}

const Container = styled.div`
width: ${props => props.size ? props.size : '25%'}
${style.f}
${style.column}
${style.allCenter}
position: relative;
padding: 0;
margin: 0;
`

const InnerContainer = styled.div`
width: 80%;
${style.f}
${style.allCenter}
`

const Circle = styled.div`
width: 50px;
height: 50px;
border-radius: 25px;
background: black;
position: absolute;
${style.f}
${style.allCenter}
font-size: 1.3em;
color: white;
`
const Description = styled.p`
position: relative;
bottom: 0;
font-size: 0.8em;
margin-top: 8%;
`