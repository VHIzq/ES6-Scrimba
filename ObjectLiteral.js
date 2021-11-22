/* function addressMaker(city, state){
  const newAddress = {city, state};

  console.log(newAddress.city, newAddress.state);
}
addressMaker("CDMX", "Mexico"); */

//Challenge
function addressMaker(address) {
  const newAddress = {
      city: address.city,
      state: address.state,
      country: 'United States'
  };
  
}

function addressMaker(address) {
  const {city, state} = address;
  const newAddress = {city, state, country: 'United States'};

  console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
  
}
addressMaker({city: 'Austin', state: 'Texas'}); 
addressMaker({city: "CDMX", state: "Mexico"});


function addressBUilder(address){
  const {city, state, country, zipcode, reference} = address;
  console.log(`The suspect lives at ${city} on ${state} state. That is in ${country}. It's zipcode is ${zipcode} and the reference is ${reference}`);
}
addressBUilder({city: "CDMX", state: "Mexico", country: "Mexican Republic", zipcode: "04600", reference: "chicken roaster front of the hose"})

/* addressMaker({city: 'Austin', state: 'Texas'});

function addressBUilder(city, state, country){
  const newAddress = {city, state, country};
  console.log(newAddress.city, newAddress.state, newAddress.country);

};
addressBUilder({city: 'Austin', state: 'Texas', country: "USA"}); */