// heap sort
var comparisonCount = 0;

var bestArr = [];
var AvgArr = [];
var wstArr = [];

function heapSort(array) {

var a;
a = array;
  // Build our max heap.
  buildMaxHeap(array);
  comparisonCount++;

  // Find last element.
  lastElement = array.length - 1;
  comparisonCount++;

  // Continue heap sorting until we have
  // just one element left in the array.
  while(lastElement > 0) {
    swap(array, 0, lastElement);

    heapify(array, 0, lastElement);
comparisonCount++;
    lastElement -= 1;
	comparisonCount++;
  }
  return a;
}


function swap(array, firstItemIndex, lastItemInde) {
  var tmp = array[firstItemIndex];
 
  // Swap first and last items in the array.
  array[firstItemIndex] = array[lastItemInde];
  array[lastItemInde] = tmp;
  comparisonCount++;
  comparisonCount++;
  comparisonCount++;
}

function buildMaxHeap(array) {
  var i;
  i = array.length / 2 - 1;
  comparisonCount++;
  i = Math.floor(i);

  // Build a max heap out of
  // all array elements passed in.
  while (i >= 0) {
	  comparisonCount++;
    heapify(array, i, array.length);
	comparisonCount++;
    i -= 1;
  }
}

function heapify(heap, i, max) {
  var index, leftChild, righChild;
 
  while(i < max) {
    index = i;

    leftChild = 2*i + 1;
    righChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) {
		comparisonCount++;
      index = leftChild;
    }

    if (righChild < max && heap[righChild] > heap[index]) {
		comparisonCount++;
      index = righChild;
    }
     
    if (index == i) {
      return;
    }

    swap(heap,i, index);
   comparisonCount++;
    i = index;
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
$("#sort"+val+" .sort-value").append(" " + heapSort(arr) + ",");
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
    $('.comparison-count'+val+" .sort-value").text(" " + heapSort(comparisonCount));
j++;
    });

DrawChart();
  });


DrawChart = function(){
   var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
      text: "Heap Sort : Running Time"  
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