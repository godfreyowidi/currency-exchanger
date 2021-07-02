import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency';


$(document).ready(function() {
  $("#convert-currency").submit(function(event) {
    event.preventDefault;

    let input = $("#us-dollars").val();
    let choice = $("#other-currency").val();
    
    let response = await Currency.get(input)

    .then(function(results) {
        if (results instanceof Error) {
          throw Error("err");
        }
        let outputAmt = 0;
        if (choice === "AED") {
          outputAmt = response.conversion_rates.AED * input;
        } else if (choice === "EUR") {
          outputAmt = response.conversion_rates.EUR * input;
        }
    })
  });
});