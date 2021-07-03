import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency';

function getElements(response) {
  let results;
  if (response.conversion_rates) {
    results = response.conversion_rates.results;
  } else {
    results = response.results;
  }
}

for (input in results) {
  if (results.conversion_rates === "AED") {
    $("#showAED").text(`United Arab Emirate: ${results.conversion_rates.AED}`)
  }
}
$(document).ready(function() {
  $("#convert-currecny").submit(function(event) {
    event.preventDefault();

    const input = $("#other-currency").val();
    const usDollar = parseInt($("#us-dollars")).val();

    Currency.getConvert(input)
      .then(function(response) {
        getElements(response);
      });  
  });
});