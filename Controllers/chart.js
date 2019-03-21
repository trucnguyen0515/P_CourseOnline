import * as CanvasJS from '../Public/js/canvas';
import '../Public/js/easyPiechart';

chartCourse();
chartAvenue();
chartPie();

function chartPie()
{
    $(function () {
        $('.chart').easyPieChart({
            barColor: "#fff",
            trackColor: "rgba(0,0,0,.2)",
            easing: 'easeOutBounce',
            size: '100',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        var chart = window.chart = $('.chart').data('easyPieChart');
        $('.js_update').on('click', function () {
            chart.update(Math.random() * 200 - 100);
        });
    });
}
function chartAvenue()
{
    var chart = new CanvasJS.Chart("chartAvenue", {
        animationEnabled: true,  
        backgroundColor: "transparent",
        color: "#fff",
        height: 300,
        zoomEnabled: true, 
        zoomType: "xy",
        title: {
            text: "Thống kê doanh thu",
            verticalAlign: "top",
            padding: {
                bottom: 10,
              },
            horizontalAlign: "center",
            fontSize: 20,
            fontFamily: "roboto",
            fontColor: "#fff",
        },
        subtitles: [{
            fontFamily: "roboto",
            fontColor: "rgba(255,255,255,.7)",
            text: "Đơn vị USD",
           
            padding: {
                bottom: 20,
              },
        }],
        axisY: {
            fontFamily: "roboto",
            fontColor: "#fff",
            valueFormatString: "#0,,.",
            suffix: "mn",
            prefix: "$",
            labelFontColor: "#fff"
        },
        axisX:{
            labelFontColor: "#fff"
        },
        data: [{
            indexLabelFontColor: "#fff",
            type: "splineArea",
            color: "rgba(54,158,173,.7)",
            markerSize: 5,
            xValueFormatString: "YYYY",
            yValueFormatString: "$#,##0.##",
            dataPoints: [
                { x: new Date(2004, 0), y: 3289000 },
                { x: new Date(2005, 0), y: 3830000 },
                { x: new Date(2006, 0), y: 2009000 },
                { x: new Date(2007, 0), y: 2840000 },
                { x: new Date(2008, 0), y: 2396000 },
                { x: new Date(2009, 0), y: 1613000 },
                { x: new Date(2010, 0), y: 2821000 },
                { x: new Date(2011, 0), y: 2000000 },
                { x: new Date(2012, 0), y: 1397000 },
                { x: new Date(2013, 0), y: 2506000 },
                { x: new Date(2014, 0), y: 2798000 },
                { x: new Date(2015, 0), y: 3386000 },
                { x: new Date(2016, 0), y: 4700000 },
                { x: new Date(2017, 0), y: 4900000 },
            ]
        }]
        });
    chart.render();    
}

function chartCourse()
{
    var chart = new CanvasJS.Chart("chartCourse", {
        backgroundColor: "transparent",
        color: "#fff",
        animationEnabled: true,
        title: {
            text: "Biểu đồ thống kê khóa học",
            fontSize: 20,
            verticalAlign: "top",
            padding: {
                bottom: 10,
              },
            horizontalAlign: "center",
            fontFamily: "roboto",
            fontColor: "#fff",
        },
        subtitles: [{
            fontFamily: "roboto",
            fontColor: "rgba(255,255,255,.7)",
            text: "Năm 2017",
           
            padding: {
                bottom: 20,
              },
        }],
        data: [{
            fontFamily: "roboto",
            indexLabelFontColor: "#fff",
            type: "pie",
            indexLabelFontSize: 13,
            radius: 80,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0\"%\"",
            click: explodePie,
            dataPoints: [{
                    y: 45.5,
                    label: "Javascript",
                    color: "#f7e018",
                },
                {
                    y: 20,
                    label: "Java",
                    color: "#d0393e",
                },
                {
                    y: 18,
                    label: "C#",
                    color: "#5cb754",
                },
                {
                    y: 5,
                    label: "Angular"
                },
                {
                    y: 7,
                    label: "PHP",
                    color: "#6182b9",
                },
                {
                    y: 4.5,
                    label: "C++",
                    color: "#669ad3",

                }
            ]
        }]
    });
    chart.render();

    function explodePie(e) {
        for (var i = 0; i < e.dataSeries.dataPoints.length; i++) {
            if (i !== e.dataPointIndex)
                e.dataSeries.dataPoints[i].exploded = false;
        }
    }

}