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
      // for (var i = 0; i < hours.length; i++)
      //     var hourBtn = $('<button>');
      //     hourBtn.addClass('hour-button btn btn-info');
      //     hourBtn.attr('data-letter', hours[i]);
      //     hourBtn.text(hours[i]);
      //     buttonListEl.append(hourBtn);

      
      var saveBtn = $('.saveBtn9');
      saveBtn.on('click', function () {
        var hour1 = $(this).siblings('.description9').val();
        localStorage.setItem("9am", hour1);
        // var getTask = localStorage.getItem("9am");
      
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

      var saveBtn = $('.saveBtn1');
      saveBtn.on('click', function () {
      var hour5 = $(this).siblings('.description1').val();
        localStorage.setItem("1pm", hour5);
      });

      var saveBtn = $('.saveBtn2');
      saveBtn.on('click', function () {
      var hour6 = $(this).siblings('.description2').val();
        localStorage.setItem("2pm", hour6);
      });

      var saveBtn = $('.saveBtn3');
      saveBtn.on('click', function () {
      var hour7 = $(this).siblings('.description3').val();
        localStorage.setItem("3pm", hour7);
      });

      var saveBtn = $('.saveBtn4');
      saveBtn.on('click', function () {
      var hour8 = $(this).siblings('.description4').val();
        localStorage.setItem("4pm", hour8);
      });

      var saveBtn = $('.saveBtn5');
      saveBtn.on('click', function () {
      var hour9 = $(this).siblings('.description5').val();
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
$('#currentDay').text(displayTime.format('dddd, MMM-DD-YYYY, hh:mm A'));
});

