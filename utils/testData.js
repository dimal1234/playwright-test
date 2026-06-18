/**
 * Generates a unique set of user registration data on every call.
 * Using a timestamp + random suffix in the email avoids collisions
 * with "email already exists" errors on repeated test runs.
 */
function generateUserData() {
    const uniqueId = `${Date.now()}_${Math.floor(Math.random() * 100000)}`;
  
    return {
      name: "Test",
      email: `test.qa_${uniqueId}@test.com`,
      password: "test123",
      gender: "male", // maps to #id_gender1
      dob: {
        day: "1",
        month: "5",
        year: "2000",
      },
      newsletter: true, // #optin checkbox
      firstName: "Test",
      lastName: "qa",
      company: "Company",
      address: "20 test road",
      country: "Australia",
      state: "VIC",
      city: "Melbourne",
      zipcode: "3000",
      mobileNumber: "0401234567",
    };
  }
  
  module.exports = { generateUserData };