import { Formik, ErrorMessage } from 'formik';
import { SignupSchema } from '../../options/validForm';
import {
  Label,
  Forma,
  Input,
  Button,
  Overlay,
  ModalDiv,
  Title,
} from './Modal.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRood = document.querySelector('#modal-root');

function Modal({ onClose, onSubmit }) {
  const name = '';
  const number = '';

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
    onClose();
  };

  useEffect(() => {
    const handlerEscapeClick = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handlerEscapeClick);

    return window.removeEventListener('keydown', handlerEscapeClick);
  }, [onClose]);

  const handlerBackdropClick = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handlerBackdropClick}>
      <ModalDiv>
        <Title>Phonebook</Title>

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
      </ModalDiv>
    </Overlay>,
    modalRood
  );
}

export default Modal;
