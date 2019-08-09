"use strict";
// User Visits Site

// User Enters state to search for park
// User submits entry
function submitQuery() {
  let $query = $(".input-field").val();
  let $resultsNumber = $("#js-max-results").val;
  $(".submit-button").on("click", function(event) {
    event.preventDefault();
    fetchData($query, $resultsNumber);
  });
}

// Format query
function createQueryEndpoint(params) {}

//Fetch data from NPS API
function fetchData(query, maxResults = 10) {
  const params = {
    API_KEY: npsKey.my_key,
    q: query,
    limit: maxResults
  };

  const npsBaseUrl = "https://developer.nps.gov/api/v1";
}

// Display results to DOM
function displayResults() {}

// Document ready
$(document).ready(function() {
  console.log("App ready, waiting for query!");
  submitQuery();
});
