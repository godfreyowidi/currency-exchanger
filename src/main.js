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

    Currency.get(input);
  });
});