$(function () {
  let dataY = ['白银市第一', '甘肃中心', '会宁县人民', '白银市中学', '白银市第一', '白银市第一',  '白银市第一'];
  let dataX = [504, 340, 736, 61, 328, 49, 920, 407];

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#283b56"
        }
      }
    },
    color: ["#04BDF6"],
    // legend: {
    //   data: ["就诊人次"]
    // },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "1%",
      top: "1%",
      containLabel: true
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [
      {
        type: "value",
        scale: true,
        name: "总价:元",
        min: 0,
        boundaryGap: [0.2, 0.2],
        axisLine: {
          lineStyle: {
            color: "#03B6F0"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: dataY,
        axisLine: {
          lineStyle: {
            color: "#03B6F0"
          }
        }
      }
    ],
    series: [
      {
        name: "就诊人次",
        type: "bar",
        data: dataX,
        label: {
          normal: {
            show: true,
            position: "right"
          }
        }
      }
    ]
  };

  var myChart = echarts.init(document.getElementById("patientTrend"));
  myChart.setOption(option);
});