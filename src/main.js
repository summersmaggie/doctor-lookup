import { doctorLookup } from './js/doctor-lookup.js';
import './styles.css'

const displayDoctors = function(response) {
  if (response.data.length == 0) {
    $('#doctor-results').text("There are no doctors that match your search.");
  } else {
    for(let i = 0; i < response.data.length; i++) {
      let firstName = response.data[i].profile.first_name;
      let lastName = response.data[i].profile.last_name;

      let street = response.data[i].practices[0].visit_address.street;
      let city = response.data[i].practices[0].visit_address.city;
      let state = response.data[i].practices[0].visit_address.state;
      let zipcode = response.data[i].practices[0].visit_address.zip;
      let newPatients = response.data[i].practices[0].accepts_new_patients;

      let phone = response.data[i].practices[0].phones;

      let website = (website === undefined) ? "None" : response.data[i].practices[0].website;

      $('#doctor-results').append(
          `<h4>${firstName} ${lastName}</h4>
          <p>${street} ${city} ${state} ${zipcode}</p> <p><strong>Accepts new patients?</strong> ${newPatients}</p>
          <p><strong>Phone Number:</strong> ${phone[0].number}</p>
          <p><strong>Website:</strong> ${website}</p><hr>`);
      }
    }
  }

const displaySpecialities = function(response) {
  console.log(response);
  if (response.data.length == 0) {
    $('#doctor-results').text("There are no doctors that match your search.")
  } else {
    for(let i = 0; i < response.data.length; i++) {
      let firstName = response.data[i].profile.first_name;
      let lastName = response.data[i].profile.last_name;

      let street = response.data[i].practices[0].visit_address.street;
      let city = response.data[i].practices[0].visit_address.city;
      let state = response.data[i].practices[0].visit_address.state;
      let zipcode = response.data[i].practices[0].visit_address.zip;
      let newPatients = response.data[i].practices[0].accepts_new_patients;

      let phone = response.data[i].practices[0].phones;
      let website = (website === undefined) ? "None" : response.data[i].practices[0].website;
      let speciality = response.data[i].specialties[0].name;

      $('#doctor-results').append(
          `<h4>${firstName} ${lastName}</h4>
          <p>${street} ${city} ${state} ${zipcode}</p> <p><strong>Accepts new patients?</strong> ${newPatients}</p>
          <p><strong>Phone Number:</strong> ${phone[0].number}</p>
          <p><strong>Speciality:</strong> ${speciality}</p>
          <p><strong>Website:</strong> ${website}</p><hr>`);
    }
  }
}

$(document).ready(function() {
  $("#doctor-search").submit(function(event) {
    event.preventDefault();
    $("#search-form").hide();

    const name = $("#name").val();
    let newDoctorSearch = new doctorLookup(name);

    newDoctorSearch.getDoctors(name, displayDoctors);
    $("#reset").show();
  });

  $("#speciality-search").submit(function(event) {
    event.preventDefault();
    $("#search-form").hide();

    const medicalIssue = $("#medical-issue").val();
    let newSpecialitySearch = new doctorLookup(medicalIssue);

    newSpecialitySearch.getSpecialities(medicalIssue, displaySpecialities)
    $("#reset").show();
  });

  $("#reset").click(function() {
    location.reload();
  })
})
