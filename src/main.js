import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency';

let getElements = (response) => {
  let outputNum = 0;
  for (let choice of response) {
    if (response.conversion_rate) {
      outputNum *= `<h1>${choice}</h1>`;
    }
  }  
  $('#output').append(outputNum);
};

async function makeAPICall(input, choice) {
  const response = await Currency.get(input, choice);
  getElements(response);
}

$(document).ready(function() {
  $("#convert-currency").submit(function(event) {
    event.preventDefault;

    let input = $("#us-dollars").val();
    let choice = $("#other-currency").val();
    
    makeAPICall(input, choice);
  });
});