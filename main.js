"use strict";
// User Visits Site

// User Enters state to search for park
// User submits entry
function submitQuery() {
    $query = 
}

// Format query
function createQueryEndpoint() {}

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
