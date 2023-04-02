$(function () {
  
  $('.saveBtn').on('click', function () {
    var text = $(this).siblings('.description').val()
    var time = $(this).parent().attr('id')

    localStorage.setItem(time, text)
  })
     
 
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
      
  });

  // load saved data 
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  });