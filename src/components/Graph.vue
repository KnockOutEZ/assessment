<template>
  <div class="grid md:grid-cols-2">
    <div class="hello" ref="chartdiv"></div>
    <div class="" id="chartdiv"></div>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
am4core.addLicense("ch-custom-attribution");

export default {
  name: "Graph",
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

    chart.paddingRight = 20;

    let data = [];
    let visits = 10;
    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({
        date: new Date(2018, 0, i),
        name: "name" + i,
        value: visits,
      });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;

    let chart1 = am4core.create("chartdiv", am4charts.PieChart);

    // Add data
    chart1.data = [
      {
        country: "Jeans",
        litres: 501.9,
      },
      {
        country: "Hoodies",
        litres: 301.9,
      },
      {
        country: "T-shirts",
        litres: 201.1,
      },
      {
        country: "Sweater",
        litres: 165.8,
      },
      {
        country: "Flip-flops",
        litres: 139.9,
      },
      {
        country: "Shorts",
        litres: 128.3,
      },
      {
        country: "Skirt",
        litres: 99,
      },
      {
        country: "Swimsuit",
        litres: 60,
      },
      {
        country: "Jacket",
        litres: 50,
      },
    ];

    // Add and configure Series
    let pieSeries = chart1.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  },

  beforeUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style scoped>
.hello {
  width: 100%;
  height: 400px;
}

#chartdiv {
  width: 100%;
  height: 340px;
}
</style>