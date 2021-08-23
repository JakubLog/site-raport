import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

interface props {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  label?: string;
}

const FormField = React.forwardRef<HTMLInputElement, props>(({ id, name, placeholder, type = 'text', label = 'Label', ...rest }, inputRef) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name} placeholder={placeholder} type={type} ref={inputRef} {...rest} />
    </>
  );
});

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string
};

export default FormField;
