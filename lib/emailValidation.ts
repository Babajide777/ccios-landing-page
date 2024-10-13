const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nigerianPostalCodeRegex = /^[0-9]{6}$/;

const isValidEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

const isValidNigerianPostalCode = (postalCode: string): boolean => {
  return nigerianPostalCodeRegex.test(postalCode);
};

export { isValidEmail, isValidNigerianPostalCode };
