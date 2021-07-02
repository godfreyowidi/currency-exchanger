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
    console.log("currency", Currency);
    console.log("env", process.env.API_KEY);
    console.log("choice", choice);

    Currency.get(input)
      .then(results => {
        console.log('res', results);
        if(results instanceof Error) {
          throw Error('error to get to res');
        }
        console.log('res', results);
        const data = results.conversion_rates;

        for (let element of data) {
          if (element.conversion_rates === "AED") {
            console.log("another res", input * data);
          }
        }
      });
  });
});