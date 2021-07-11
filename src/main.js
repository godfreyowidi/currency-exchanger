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
      console.log("results AED", results.AED, typeof results.AED);
      console.log("results dollars", dollars, typeof dollars);
      $("#showAED").text(`United Arab Emirate: ${results.AED * dollars}`); 
    } else if (selectedCurr === "EUR") {
      $("#showEUR").text(`European EURO: ${results.EUR * dollars}`);
    } else if (selectedCurr === "JPY") {
      $("#showJPY").text(`Japanese Yen: ${results.JPY * dollars}`);
    } else if (selectedCurr === "INR") {
      $("#showINR").text(`Indian Rupee: ${results.INR * dollars}`);
    } else if (selectedCurr === "GBP") {
      $("#showGBP").text(`British Pound: ${results.GBP * dollars}`);
    } 
  }
}

$(document).ready(function() {
  $("#convert-currency").submit(function(event) {
    event.preventDefault();

    const input = $("#other-currency").val();
    const usDollar = parseInt($("#us-dollars").val());
    console.log("us dollars", $("#us-dollars").val());
    $("#us-dollars").val('');
    
    if (!input) {
      $("#noNum").show();
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
          $("#noNum").show();
        });
    }  
    
  });
});