import { doctorLookup } from './js/doctor-lookup.js';
import './styles.css'

const displayDoctors = function(response) {
  if (response.data.length == 0) {
    $('#doctor-results').text("There are no doctors that match your search.")
  } else {
    for(let i = 0; i < response.data.length; i++) {

      let firstName = response.data[i].profile.first_name;
      let lastName = response.data[i].profile.last_name;

      let street = response.data[i].practices[i].visit_address.street;
      let city = response.data[i].practices[i].visit_address.city;
      let state = response.data[i].practices[i].visit_address.state;
      let zipcode = response.data[i].practices[i].visit_address.zip;

      let newPatients =
      response.data[i].practices[i].accepts_new_patients;


      $('#doctor-results').append(" " + '<p>' + firstName + " " + lastName + ", " + street + " " + city + ", " + state + " " + zipcode + '</p>' + '<p>' + "<strong>Accepts new patients?</strong>" + " " + newPatients + '</p>');
    }
  }
}

$(document).ready(function() {
  $("#doctor-search").submit(function(event) {
    event.preventDefault();

    const name = $("#name").val();
    const medicalIssue = $("#medical-issue").val();

    let newDoctorSearch = new doctorLookup(name, medicalIssue);
    $("#doctor-search").hide();

    newDoctorSearch.getDoctors(name, displayDoctors);
  })

})
