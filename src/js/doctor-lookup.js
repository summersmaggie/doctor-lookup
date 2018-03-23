export class doctorLookup {
  constructor(name, medicalIssue) {
    this.name = name;
    this.medicalIssue = medicalIssue;
  }

  getDoctors(name, displayDoctors) {
    const apiKey = process.env.exports.apiKey;

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`).then(function(response)
  {
    displayDoctors(response);
  })
    .fail(function(error) {
      $('.api-error').text(`There was an error processing your request: ${error.responseTest}. Please try again.`)
    });
  }
}
