const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nigerianPostalCodeRegex = /^[0-9]{6}$/;
const usZipCodeRegex = /^\d{5}(-\d{4})?$/;

const isValidEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

const isValidNigerianPostalCode = (postalCode: string): boolean => {
  return nigerianPostalCodeRegex.test(postalCode);
};

const isValidUSZipCode = (zipCode: string): boolean => {
  return usZipCodeRegex.test(zipCode);
};

export { isValidEmail, isValidNigerianPostalCode, isValidUSZipCode };
