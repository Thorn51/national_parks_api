"use strict";
// User Visits Site

// User Enters state to search for park
// User submits entry
function submitQuery() {
  $(".submit-button").on("click", function(event) {
    event.preventDefault();
    let $stateCode = $(".select-state")
      .val()
      .toLowerCase();
    let $resultsNumber = $("#js-max-results").val();
    fetchData($stateCode, $resultsNumber);
  });
}

// Format query
function createQueryEndpoint(params) {
  const queryString = Object.keys(params).map(
    key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  );
  return queryString.join("&");
}

//Fetch data from NPS API
function fetchData(stateCode, resultsNumber) {
  const params = {
    api_key: npsKey.my_key,
    stateCode: stateCode,
    limit: resultsNumber
  };

  const npsBaseUrl = "https://developer.nps.gov/api/v1/";
  const npsDataTarget = "parks?";
  const endPoint = createQueryEndpoint(params);
  const dataFields = "&fields=images,addresses,fullname";
  const fetchUrl = npsBaseUrl + npsDataTarget + endPoint + dataFields;
  console.log(fetchUrl);

  fetch(fetchUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(parksJson) {
      console.log(parksJson);
      displayResults(parksJson);
    });
}

// Display results to DOM
function displayResults(parksJson) {
  $(".results-section").empty();
  let parkDetails = parksJson.data;
  console.log(parkDetails);
  for (let i = 0; i < parkDetails.length; i++) {
    $(".results-section").append(
      `<div class="park-details">
        <div class="park-image">
          <title class="image-title">${parkDetails[i].images[0].title}</title>
          <img src="${parkDetails[i].images[0].url}" alt="${parkDetails[i].images.altText}"/>
        </div>
        <div class="park-description">
          <h2 class="park-full-name">${parkDetails[i].fullName}</h2>
          <p class="description">${parkDetails[i].description}</p>
          <a href="${parkDetails[i].url}" class="more-info-link">More Information</a>
          <h2 class="directions">Directions</h2>
          <p class="directions-info">${parkDetails[i].directionsInfo}</p>
          <a href="${parkDetails[i].directionsUrl}" class="directions-url">Directions</a>
        </div>
      </div>`
    );
  }
}

// Document ready
$(document).ready(function() {
  console.log("App ready, waiting for query!");
  submitQuery();
});
