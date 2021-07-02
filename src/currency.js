export default class Currency {  
    static async get(choice) {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${choice}`);
        if (!response.ok) {
          console.log("response", response)
          throw Error(response.statusText);
        }
        return response.json();
      } catch(error) {
        return error.message;
      }
    }
  }