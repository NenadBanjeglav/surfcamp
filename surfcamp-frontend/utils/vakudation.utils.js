export function allDataFilledIn(formData) {
  return Object.keys(formData).every((el) => formData[el].trim().length > 0);
}
