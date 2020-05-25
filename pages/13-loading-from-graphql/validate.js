const validate = (values) => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  const authorErrors = {}
  if (!values.author || !values.author.firstName) {
    authorErrors.firstName = 'Required'
  }
  if (!values.author || !values.author.lastName) {
    authorErrors.lastName = 'Required'
  }
  if (Object.keys(authorErrors).length) {
    errors.author = authorErrors
  }
  if (!values.year) {
    errors.year = 'Required'
  } else if (isNaN(values.year)) {
    errors.year = 'Must be a number'
  }
  return errors
}
export default validate
