export function processForm({
  fullName,
  phoneNumber,
  emailAddress
}) {
  if (fullName && phoneNumber && emailAddress) {
    alert(`
      Thank you for submitting your info, ${fullName}!
      Your phone number is ${phoneNumber},
      and your email address is ${emailAddress}.
    `);
  } else {
    const isFullNameAbsent = !fullName
      ? 'Full name'
      : '';
    const isPhoneNumberAbsent = !phoneNumber
      ? ' Phone number'
      : '';
    const isEmailAddressAbsent = !emailAddress
      ? ' Email address'
      : '';
    alert(
      `Missing fields: ${isFullNameAbsent}${isPhoneNumberAbsent}${isEmailAddressAbsent}`
    );
  }
}

const tlds = ['.com', '.org', '.net'];
export function validateField(data, name) {
  switch (name) {
    case 'fullName': {
      return /^[a-z A-Z\s]*$/.test(data);
    }
    case 'phoneNumber': {
      return (
        !isNaN(data) && `${data}`.length === 10
      );
    }
    case 'emailAddress': {
      return (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
          data
        ) &&
        tlds.some((tld) => data.includes(tld))
      );
    }
    default:
      return false;
  }
}
