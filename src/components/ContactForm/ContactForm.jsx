import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { SignupSchema } from '../../options/validForm';
import { Label, Forma, Input, Button } from './ContactForm.styled';
function ContactForm({ onSubmit }) {
  const name = '';
  const number = '';

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name, number }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Forma>
        <Label>
          <Input type="text" name="name" placeholder="Name" />
        </Label>
        <ErrorMessage name="name" />
        <Label>
          <Input type="tel" name="number" placeholder="Number" />
        </Label>
        <ErrorMessage name="number" />
        <Button type="submit" aria-label="add contact">
          <BsFillPersonPlusFill />
        </Button>
      </Forma>
    </Formik>
  );
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
