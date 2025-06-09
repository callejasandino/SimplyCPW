export const formatPhoneNumber = (phoneNumber) => {
    
    let input = String(phoneNumber);
    // Remove all non-digit characters
    input = input.replace(/\D/g, '');
    // Format based on length
    if (input.length > 0) {
      input = '(' + input;
    }
    if (input.length > 4) {
      input = input.slice(0, 4) + ') ' + input.slice(4);
    }
    if (input.length > 9) {
      input = input.slice(0, 9) + '-' + input.slice(9, 13);
    }
    return input;
}; 