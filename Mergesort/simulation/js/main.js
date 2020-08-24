var comparisonCount = 0;

var bestArr = [];
var AvgArr = [];
var wstArr = [];



var mergeSort = function(arr){
   var len = arr.length;
   if (arr.length <= 1) {
 comparisonCount++;
         return arr;
         }
var leftArr = [];              
var rightArr = [];
   var mid = Math.floor(len/2);
    comparisonCount++;
    for (var i = 0; i < mid; i++) {
		 comparisonCount++;
       leftArr.push(arr[i]);
	   comparisonCount++;
}
comparisonCount++;
for (var i = mid; i < len; i++) {
	 comparisonCount++;
       rightArr.push(arr[i]);
	   comparisonCount++;
}
   //send left and right to the mergeSort to broke it down into pieces
   //then merge those
   return merge(mergeSort(leftArr),mergeSort(rightArr));
}

function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
	   comparisonCount++;
  while(l < lLen && r < rLen){
	   comparisonCount++;
     if(left[l] < right[r]){
		         result.push(left[l++]);
	         }
     else{
		         result.push(right[r++]);
	        }
  }  
  //remaining part needs to be addred to the result
  comparisonCount++;
  return result.concat(left.slice(l)).concat(right.slice(r));
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
$("#sort"+val+" .sort-value").append(" " + mergeSort(arr) + ",");
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
    $('.comparison-count'+val+" .sort-value").text(" " + comparisonCount);
j++;
    });

DrawChart();
  });


DrawChart = function(){
   var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
      text: "Merge Sort : Running Time"  
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