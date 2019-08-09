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
  const fetchUrl = npsBaseUrl + npsDataTarget + endPoint;
  console.log(fetchUrl);

  fetch(fetchUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(parksJson) {
      console.log(parksJson);
      console.log(parksJson.data[0].description);
    });
}

// Display results to DOM
function displayResults() {}

// Document ready
$(document).ready(function() {
  console.log("App ready, waiting for query!");
  submitQuery();
});
