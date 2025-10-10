$(document).ready(function () {
  const apiUrl = "https://script.google.com/macros/s/AKfycbyptLjtgbdsGLh4ZjNZXGgdtPnywAJl694HFPoc5piB7MQcmQH_gP2UKwq3Zgnp23ld/exec";

  $.getJSON(apiUrl)
    .done(function (data) {
      const $vehicleList = $("#vehicleList");
      $vehicleList.empty(); // Clear existing options

      // Loop through each item in the response
      data.forEach(function (item) {
        // Make sure 'vehicleNo' key exists
        if (item.vehicleNo && item.vehicleNo.trim() !== "") {
          $vehicleList.append(`<option value="${item.vehicleNo.trim()}"></option>`);
        }
      });
    })
    .fail(function (jqxhr, textStatus, error) {
      console.error("Failed to fetch vehicle data:", textStatus, error);
    });
});
