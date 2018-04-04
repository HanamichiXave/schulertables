!function(e){
	"use strict";
	var a=function(){
		this.$realData=[]};

	a.prototype.createStackedChart=function(e,a,r,t,o,d){
		Morris.Bar({element:e,
					data:a,
					xkey:r,
					ykeys:t,
					stacked:!0,
					labels:o,
					hideHover:"auto",
					resize:!0,
					gridLineColor:"#eeeeee",
					barColors:d})},

	a.prototype.createDonutChart=function(e,a,r){
		Morris.Donut({element:e,data:a,resize:!0,colors:r})},

	a.prototype.init=function(){
		var e=[{label:"New",value:1e3},
			{label:"Old",value:523},
			{label:"Dropped",value:25},
			{label:"Transferee",value:25}];

	this.createDonutChart("studentGradeBreakdown",e,["#3498db","#5fbeaa","#c0392b","#fdac5a"]);
		var grade1 = $('#grade1').val();
		var grade2 = $('#grade2').val();
		var grade3 = $('#grade3').val();
		var grade4 = $('#grade4').val();
		var grade5 = $('#grade5').val();
		var grade6 = $('#grade6').val();
		var grade7 = $('#grade7').val();
		var grade8 = $('#grade8').val();
		var grade9 = $('#grade9').val();
		var grade10 = $('#grade10').val();
		var grade11 = $('#grade11').val();
		var grade12 = $('#grade12').val();
		var a =[{y:"Grade 1",a:grade1},
			{y:"Grade 2",a:grade2},
			{y:"Grade 3",a:grade3},
			{y:"Grade 4",a:grade4},
			{y:"Grade 5",a:grade5},
			{y:"Grade 6",a:grade6},
			{y:"Grade 7",a:grade7},
			{y:"Grade 8",a:grade8},
			{y:"Grade 9",a:grade9},
			{y:"Grade 10",a:grade10},
			{y:"Grade 11",a:grade11},
			{y:"Grade 12",a:grade12}];
		this.createStackedChart("student-grade-breakdown",a,"y",["a"],["Number of Students"],["#5fbeaa"])},
	e.GRAPHS=new a,e.GRAPHS.Constructor=a}
	(window.jQuery),function(e){"use strict";e.GRAPHS.init()}(window.jQuery);