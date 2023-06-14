import * as Yup from 'yup';

const validName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const validNumber =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .matches(
      validName,
      ' Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer'
    )
    .required('Please enter a Name'),
  number: Yup.string()
    .min(5, 'Too Short!')
    .matches(
      validNumber,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Please enter a Number'),
});
