var timeDisplayel = $('#currentDay');
var hours = $('#hoursDay');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

      
      var saveBtn = $('.saveBtn9');
      saveBtn.on('click', function () {
        var hour1 = $(this).siblings('.description9').val();
        localStorage.setItem("9am", hour1);
      });
      
      var saveBtn = $('.saveBtn10');
      saveBtn.on('click', function () {
      var hour2 = $(this).siblings('.description10').val();
        localStorage.setItem("10am", hour2);
      });

      var saveBtn = $('.saveBtn11');
      saveBtn.on('click', function () {
      var hour3 = $(this).siblings('.description11').val();
        localStorage.setItem("11am", hour3);
      });

      var saveBtn = $('.saveBtn12');
      saveBtn.on('click', function () {
      var hour4 = $(this).siblings('.description12').val();
        localStorage.setItem("12pm", hour4);
      });

      var saveBtn = $('.saveBtn13');
      saveBtn.on('click', function () {
      var hour5 = $(this).siblings('.description13').val();
        localStorage.setItem("1pm", hour5);
      });

      var saveBtn = $('.saveBtn14');
      saveBtn.on('click', function () {
      var hour6 = $(this).siblings('.description14').val();
        localStorage.setItem("2pm", hour6);
      });

      var saveBtn = $('.saveBtn15');
      saveBtn.on('click', function () {
      var hour7 = $(this).siblings('.description15').val();
        localStorage.setItem("3pm", hour7);
      });

      var saveBtn = $('.saveBtn16');
      saveBtn.on('click', function () {
      var hour8 = $(this).siblings('.description16').val();
        localStorage.setItem("4pm", hour8);
      });

      var saveBtn = $('.saveBtn17');
      saveBtn.on('click', function () {
      var hour9 = $(this).siblings('.description17').val();
        localStorage.setItem("5pm", hour9);
      });
     
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  
// TODO: Add code to display the current date in the header of the page.
var displayTime = dayjs();
$('#currentDay').text(displayTime.format('dddd, MMM-DD-YYYY, HH:mm'));


// Loop through each time block
$(".time-block").each(function() {
  // Get the hour of this time block
  var blockHour = ($(this).attr("id")).substring(5);
  console.log(blockHour)
  // Compare the current hour with the time block's hour
  if (blockHour < displayTime.hour()) {
    // Add the past class
    $(this).addClass("past");
  } else if (blockHour == displayTime.hour()) {
    // Add the present class
    $(this).addClass("present");
  } else {
    // Add the future class
    $(this).addClass("future");
  }
  
  // check local storage for blockhour to see if there is input
  if(localStorage.getItem(value) !== null) {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
    }
    // do something if there is an input in the local storage for blockhour
    function returnInput() {
      var textArea = ".text"
      textArea.textContent = localStorage.getItem(key);
    }
    returnInput();
  }
    
});
});