var comparisonCount = 0;

var bestArr = [];
var AvgArr = [];
var wstArr = [];


var Insertion_srt = function(arr) {
	//Insertion sort
  var n = arr.length;  // Store length of array
  var i,j,key;  // Declare k for later use
  
 comparisonCount++;
  for(j=1;j<n;j++) {  // Outer loop because a bubble sort needs to run as many swapping loops as the array is long
    comparisonCount++;
    comparisonCount++;
	key=arr[j];
	i=j-1;
	comparisonCount++;
    while(i>=0&&arr[i]>key) { //Inner loop performs the sorting   
	  comparisonCount++;
      comparisonCount++; 	  
       arr[i+1]=arr[i];
	   comparisonCount++; 
	  i=i-1;
	}
	comparisonCount++;
	arr[i+1]=key;
	comparisonCount++;
  }  
  
  return arr;

}

 
var swapNumbers = function(i, j, arr) {  //Method to perform swap
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
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
$("#sort"+val+" .sort-value").append(" " + Insertion_srt(arr) + ",");
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
    $('.comparison-count'+val+" .sort-value").text(" " + Insertion_srt(comparisonCount));
j++;
    });

DrawChart();
  });


DrawChart = function(){
   var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
      text: "Insertion Sort : Running Time"  
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