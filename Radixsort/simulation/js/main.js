var comparisonCount = 0;

var bestArr = [];
var AvgArr = [];
var wstArr = [];
var radix_srt=function(arr) {
	var n = arr.length;
	comparisonCount++;
    var m = getMax(arr, n);
comparisonCount++;	
    for (var exp = 1; Math.floor(m/exp) > 0; exp = exp*10){
		comparisonCount++;
	    countSort(arr, n, exp);
	}		
	return arr;		      
}
var getMax = function(arr, n) {
    var max = arr[0]; 
	comparisonCount++;
    for (var i = 1; i < n; i++){
comparisonCount++;		
        if (arr[i] > max){
comparisonCount++;			
            max = arr[i];
		}
	}		
    return max; 
}
var countSort = function (arr, n, exp) {
		   var i;
		   comparisonCount++;
           var output = [];
		   comparisonCount++;
		   for (i = 0; i < n; i++) 
                   output[ i ]=0;
			           					   
           var count = [0,0,0,0,0,0,0,0,0,0];
			comparisonCount++;	
           for (i = 0; i < n; i++){
				comparisonCount++;
		   count[ Math.floor(arr[i]/exp)%10 ]++;} 
           for (i = 1; i < 10; i++) {
			   comparisonCount++;
		   count[i] += count[i - 1];} 
           
           for (i = n - 1; i >= 0; i--){
                   output[count[ Math.floor(arr[i]/exp)%10 ] - 1] = arr[i]; 
					comparisonCount++;	
                   count[ Math.floor(arr[i]/exp)%10 ]--; 
        }
           for (i = 0; i < n; i++) {
			   comparisonCount++;
                   arr[i] = output[i]; 
		   }

}


 $('a.btn').click(function(event) {
    event.preventDefault();
bestArr = [];
AvgArr = [];
wstArr = [];
var j = 1;
    $.each( [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], function( i, val ) {
    var arr = [];
    $('.form'+val+' input[type=text]').each(function(index) {
      if($(this).val() != "") {
        arr.push(parseInt($(this).val()));
      }
    });
    console.log(arr);
    $("#array"+val+"arr").text("Unsorted array - " + arr.toString());
comparisonCount = 0;
$("#sort"+val+" .sort-value").empty();
$("#sort"+val+" .sort-value").append(" " + radix_srt(arr) + ",");
labelTxt = "";
if( j % 5 == 1)
labelTxt = "5"
if( j % 5 == 2)
labelTxt = "10"
if( j % 5 == 3)
labelTxt = "15"
if( j % 5 == 4)
labelTxt = "20"
if( j % 5 == 0)
labelTxt = "25"
if(j <= 5 ){
bestArr.push({ y: comparisonCount, label: labelTxt})
}
if(j > 5 && j <= 10){
AvgArr.push({ y: comparisonCount, label: labelTxt})
}
if(j > 10 ){
wstArr.push({ y: comparisonCount, label: labelTxt})
}
    $('.comparison-count'+val+" .sort-value").empty();
    $('.comparison-count'+val+" .sort-value").text(" " + radix_srt(comparisonCount));
j++;
    });

DrawChart();
  });


DrawChart = function(){
   var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
      text: "Radix Sort : Running Time"  
      },
      data: [
      {        
        type: "spline",
showInLegend: true,
legendText: "Best Case",
color: "Green",
        dataPoints: bestArr
      },
        {        
        type: "spline",
showInLegend: true,
legendText: "Average Case",
color: "RoyalBlue",
        dataPoints: AvgArr
      },
        {        
        type: "spline",
showInLegend: true,
legendText: "Worst Case",
color: "Red",
        dataPoints: wstArr
      }
      ]
    });

    chart.render();

}
  /*-- CHART JS --*/
  window.onload = function () {
 
 

  }