import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency';

async function makeApiCall(input, choice) {
  const response = await Currency.get(input, choice);
}

$(document).ready(function() {
  $("#convert-currency").submit(function(event) {
    event.preventDefault;

    let input = $("#us-dollars").val();
    let choice = $("#other-currency").val();
    
    makeApiCall(input, choice)

      .then(function(results) {
        if (response instanceof Error) {
          throw Error("err");
        }
        let outputAmt = 0;
        if (choice === "AED") {
          outputAmt = response.conversion_rates.AED * input;
        } else if (choice === "EUR") {
          outputAmt = response.conversion_rates.EUR * input;
        } else if (choice === "JPY") {
          outputAmt = response.conversion_rates.JPY * input;
        } else if (choice === "INR") {
          outputAmt = response.conversion_rates.INR * input;
        } else if (choice === "GBP") {
          outputAmt = response.conversion_rates.GBP * input;
        } else {
          $("#noCurrency").text();
        }
        $("#output").html(outputAmt);
      })
      .catch(function(error) {
        $('#showErrors').text(`There was an error processing your request: ${error}`);
      });
  });
});

