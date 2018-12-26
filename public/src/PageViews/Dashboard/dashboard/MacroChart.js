import React from "react";
var Chart = require("chart.js")
Chart.defaults.global.defaultFontFamily = "'Proxima', sans-serif"
class MacroChart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [
          {
            label: "Chart Info",
            data: [2, 12, 19, 3, 10, 12],
            backgroundColor: [ "transparent" ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <canvas
          style={{ width: 500, height: 250 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}

export default MacroChart;