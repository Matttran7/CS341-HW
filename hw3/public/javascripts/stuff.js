$(document).ready(function(){
  $("#orderButton").click(function(){
    var amount_ = $("select#amount").val();
    var toppingRadio = $("input[name='Cheesecake_topping']:checked").val();
    var notes = $("textarea#fnotes").val();
    // check for substring
    Lnotes = notes.toLowerCase();
    var word = "vegan";
    let check = Lnotes.includes(word);
    if(check){
      alert("Product contains dairy");
    }

    // Replace with thank you
    $("table#formTable").replaceWith(
      "<h1>Thank you! your order has been placed: "+ amount_ + " " + toppingRadio +"</h1>"+
      "<h4>" + notes + "</h4>"
    );
    $("#QuantityP").replaceWith();
    $("#notesP").replaceWith();
    $("#fnotes").replaceWith();
    $("#orderButton").replaceWith();

  }); // .click
}); // .ready

function changeText(input){
    document.getElementById('dateButton').innerText = input;
}