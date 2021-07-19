import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency';

function getElements(response, selectedCurr, dollars) {
  let results;
  if (response.conversion_rates) {
    results = response.conversion_rates;
    if (selectedCurr === 'AED') {
      $("#showCurrency").text(`Conversion of ${dollars} USD to ${selectedCurr} is: ${results.AED * dollars}`); 
    } else if (selectedCurr === "EUR") {
      $("#showCurrency").text(`Conversion of ${dollars} USD to ${selectedCurr} is: ${results.EUR * dollars}`);
    } else if (selectedCurr === "JPY") {
      $("#showCurrency").text(`Conversion of ${dollars} USD to ${selectedCurr} is: ${results.JPY * dollars}`);
    } else if (selectedCurr === "INR") {
      $("#showCurrency").text(`Conversion of ${dollars} USD to ${selectedCurr} is: ${results.INR * dollars}`);
    } else if (selectedCurr === "GBP") {
      $("#showCurrency").text(`Conversion of ${dollars} USD to ${selectedCurr} is: ${results.GBP * dollars}`);
    } else {
      $("#showCurrency").text("An error occurred, please check your inputs and try again.");
    }
  }
}

$(document).ready(function() {
  $("#convert-currency").submit(function(event) {
    event.preventDefault();
    $("#showResult").val('');
    //$("#showAED, #showEUR, #showJPY, #showINR, #showGBP, #error").val('');
    const input = $("#other-currency").val();
    const usDollar = parseInt($("#us-dollars").val());
    console.log("us dollars", $("#us-dollars").val());
    $("#us-dollars").val('');
    
    
    if (!input || !usDollar) {
      $("#showCurrency").html("An error occurred, please enter a valid number input and select a currency.");
    } else {
      Currency.getConvert(input)
        .then(function(response) {

          getElements(response, input, usDollar);
          if(response instanceof Error) {
            throw Error('error to get to res');
          }
        })
        .catch(function (error) {
          console.log("error", error)
          $("#showCurrency").html("An error occurred, please check your inputs and try again.");
        });  
    }
    //$("#convert-currency").reset();
  });
});