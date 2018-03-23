import { doctorLookup } from './js/doctor-lookup.js';
import './styles.css'

const displayDoctors = function(response) {
  // if (response.data.profile == 0) {
  //   console.log(response.data.practices);
  //   $('#doctor-results').text("There are no doctors that match your search.")
  // } else {
  console.log(response.data.length);
    for(let i = 0; i < response.data.length; i++) {
      let firstName = response.data[i].profile.first_name;
      let lastName = response.data[i].profile.last_name;
      console.log(firstName);
      $('#doctor-results').append(" " + '<li>' + firstName + " " + lastName + '</li>');
    }
  }


$(document).ready(function() {
  $("#doctor-search").submit(function(event) {
    event.preventDefault();

    const name = $("#name").val();
    const medicalIssue = $("#medical-issue").val();
    console.log(name);
    console.log(medicalIssue);

    let newDoctorSearch = new doctorLookup(name, medicalIssue);
    $("#doctor-search").hide();

    newDoctorSearch.getDoctors(name, displayDoctors);
  })

})
