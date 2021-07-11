import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency';

function getElements(response, selectedCurr, dollars) {
  //console.log('in getElements, response', response);
  let results;
  //console.log('in getElements, response.conversion_rates', response.conversion_rates);
  if (response.conversion_rates) {
    results = response.conversion_rates;
    //console.log("res", results);
    if (selectedCurr === 'AED') {
      $("#showAED").text(`United Arab Emirate: ${results.AED * dollars}`); 
    } else if (selectedCurr === "EUR") {
      $("#showEUR").text(`European EURO: ${results.EUR * dollars}`);
    } else if (selectedCurr === "JPY") {
      $("#showJPY").text(`Japanese Yen: ${results.JPY * dollars}`);
    } else if (selectedCurr === "INR") {
      $("#showINR").text(`Indian Rupee: ${results.INR * dollars}`);
    } else if (selectedCurr === "GBP") {
      $("#showGBP").text(`British Pound: ${results.GBP * dollars}`);
    } else {
      $("#noNum").show();
    }

  } else {
    results = results.conversion_rates;
  }
}


$(document).ready(function() {
  $("#convert-currency").submit(function(event) {
    event.preventDefault();
    $("#us-dollars").val('');
    const input = $("#other-currency").val();
    const usDollar = parseInt($("#us-dollars").val());
  
    Currency.getConvert(input)
      .then(function(response) {
        getElements(response, input, usDollar);
        if(response instanceof Error) {
          throw Error('error to get to res');
        }
      });  
  });
});