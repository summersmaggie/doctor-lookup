export class doctorLookup {
  constructor(name, medicalIssue) {
    this.name = name;
    this.medicalIssue = medicalIssue;
  }

  getDoctors(name, displayDoctors) {
    const apiKey = process.env.exports.apiKey;

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.523%2C-122.676%2C500&skip=0&limit=20&user_key=${apiKey}`).then(function(response)
  {
    displayDoctors(response);
  })
    .fail(function(error) {
      $('.api-error').text(`There was an error processing your request: ${error.responseTest}. Please try again.`)
    });
  }

  getSpecialities(medicalIssue, displaySpecialities) {
    const apiKey = process.env.exports.apiKey;
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=45.523%2C-122.676%2C500&skip=0&limit=20&user_key=${apiKey}&query=${medicalIssue}`).then(function(response)
  {
    displaySpecialities(response);
  })
    .fail(function(error) {
      $('.api-error').text(`There was an error processing your request: ${error.responseTest}. Please try again.`)
    });
  }

}
