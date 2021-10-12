const countries = [
    {
      image: "https://flagpedia.net/data/flags/w580/de.png",
      country: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/au.png",
      country: "Australia",
      population: "91,657,312",
      region: "Aus",
      capital: "Canberra"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/in.png",
      country: "India",
      population: "1,3179,984,812",
      region: "Asia",
      capital: "New Delhi"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/kr.png",
      country: "South Korea",
      population: "40,400,000",
      region: "Asia",
      capital: "Seoul"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/us.png",
      country: "United States of America",
      population: "323,947,000",
      region: "North America",
      capital: "Washington,D.C"
    }
  ];
//   const div=document.createElement("div")
//  div.className="row"
//  div.innerHTML=`
//  <div class="col-12 col-sm-6 col-md-3 col-lg-3">
//  <div class="flag">
//  </div></div>`
//  document.body.append(div)

// const image=document.createElement("img")
// image.src=countries[0].image
// image.alt="image"
// document.querySelector(".flag").append(image)

// const flagdetails=document.createElement("div")
// flagdetails.className="flag_details"
// document.querySelector(".flag").append(flagdetails)

//  const country=document.createElement("p")
//  country.className="heading"
//  country.innerText=countries[0].country;
//  document.body.querySelector(".flag_details").append(country)

//  const population=document.createElement("p")
//  population.innerText="population:"+countries[0].population
//  document.body.append(population)

//  const region=document.createElement("p")
//  region.innerText="Region:"+countries[0].region
//  document.body.append(region)

//  const capital=document.createElement("p")
//  capital.innerText="Capital:"+countries[0].capital
//  document.body.append(capital)

//  document.body.querySelector(".flag_details").append(country,population,region,capital)

 
document.body.innerHTML=`
<section class="container">
<div id="flags" class="row">
</div>
</section>`
countries.forEach(data => {
const flags=document.querySelector("#flags")
  flags.innerHTML+=`
  <div class="col-12 col-sm-6 col-md-3 col-lg-3">
  <div class="flag-container">
  <img 
    src=${data.image} 
    class="flag"
  />
  <h3>${data.country}</h3>
  <p><b>population:</b>${data.population}</p>
  <p><b>region:</b>${data.region}</p>
  <p><b>capital:</b>${data.capital}</p>
  </div></div>`
});
