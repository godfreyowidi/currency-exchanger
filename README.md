# Currency Exchanger

#### A user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won). The user should then see the total amount they entered in converted currency. 

#### By Godfrey Owidi

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _JQUERY_
* _Node.js_
* _Webpack_
* _Jest_
* _Enslint_
* _Babel_
* _Exchange Rate API_

## Description
#### This is a currency converter application where the user enters an amount in dollars and selects the currency they want to be outputted. It achieves this by consuming a currency exchanger API. The project functionality is divided into main.js as the user interface logic and currency.js as the service logic. The project is bundled and processed using node.js as the runtime environment.

## Installation

* _Computer (PC/Mac)_
* _Internet Connection_
* _Browser_

## Setup Requirements

1. Clone the project repository from [Github](https://github.com/godfreyowidi/currency-exchanger)
2. Identify the directory currency-exchanger and navigate to it using the terminal command ```cd``` currency-exchanger
3. While inside the working directroy (currency-exchanger), open the project on editor preferably VS code using the terminal command ```code .```
4. Visit the [ExchangeRate-API site](https://www.exchangerate-api.com/). Input your email address and click the ```Get Free Key``` button.
5. You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click ```Get Started!```
6. At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.
7. Create a ```.env``` file in the root folder of the project and store the token as an assignment to a variable ```API_KEY```
8. Include the ```.env``` into the ```.gitignore``` file and compile by running ```npm install``` to install all the dependencies.

## Known Bugs
* _No known bugs_

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contact Information
[Email](godfreyowiidi@gmail.com)