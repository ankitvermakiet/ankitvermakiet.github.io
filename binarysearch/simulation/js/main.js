var comparisonCount = 0;

var bestArr = [];
var AvgArr = [];
var wstArr = [];


function binarySearch(arr,l,r,x) 
    { 	
		comparisonCount++;
        if (r >= l) { 
		comparisonCount++;
            var mid = l + Math.floor((r - l) / 2);
			comparisonCount++;
            if (arr[mid] == x) {
				comparisonCount++;
                return mid; 
			}
  
            if (arr[mid] > x){
				comparisonCount++;
                return binarySearch(arr, l, mid - 1, x); 
			}
			comparisonCount++;
            return binarySearch(arr, mid + 1, r, x); 
        } 
		comparisonCount++;
        return -1; 
    } 




 $('a.btn').click(function(event) {
    event.preventDefault();
bestArr = [];
AvgArr = [];
wstArr = [];
var j = 1;
    $.each( [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], function( i, val ) {
    var arr = [];
var barr= [];
    $('.form'+val+' input[type=text]').each(function(index) {
      if($(this).val() != "") {
        arr.push(parseInt($(this).val()));
      }
    });
    console.log(arr);
    $("#sort"+val+" .sort-value").empty();
    $("#sort"+val+" .sort-value").append(" " + binarySearch(arr,0,arr.length-2,arr[arr.length-1]));

    //$("#array"+val).text("Searched Element Index = " + binarySearch(arr,0,arr.length-2,arr[arr.length-1]));
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
      text: "Binary Search : Running Time"  

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
  
  window.onload = function () {
 
 

  }