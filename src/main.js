import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency';

let getElements = function(response) {
  let outputAmt = 0;
  if (response.conversion_rates.AED) {
    outputAmt = response.conversion_rates.AED * response;
  } else if (response.conversion_rates.EUR) {
    outputAmt = response.conversion_rates.EUR * response;
  } else if (response.conversion_rates.JPY) {
    outputAmt = response.conversion_rates.JPY * response;
  } else if (response.conversion_rates.INR) {
    outputAmt = response.conversion_rates.INR * response;
  } else if (response.conversion_rates.GBP) {
    outputAmt = response.conversion_rates.GBP * response;
  } else {
    $("#noCurrency").text();
  }
  $("#output").html(outputAmt);
};


async function makeApiCall(input, choice) {
  const response = await Currency.get(input, choice);
  getElements(response);
}

$(document).ready(function() {
  $("#convert-currency").submit(function(event) {
    event.preventDefault();

    let input = $("#us-dollars").val();
    let choice = $("#other-currency").val();
    
    console.log('')
    console.log('input', input);
    makeApiCall(input, choice);
  });
});

