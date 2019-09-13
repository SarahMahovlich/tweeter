$(document).ready(function() {
  console.log('it works');

  $("#target").on('input', function() {
    let counter = 140 - this.value.length;
  
    if (counter >= 0) {
      $('#counter').text(counter).removeClass("counterRed");
    } else if (counter <= 0) {
      $("#counter").text(counter).addClass("counterRed");
    }

  });
  
});
