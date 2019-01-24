import React from 'react';
import useField from '../hooks/useField';

const asField = Component => props => {
  const { 
    field, 
    validate, 
    initialValue, 
    validateOnChange, 
    validateOnBlur,
    onValueChange,
    notify,
    ...rest } = props;
  const fieldProps = {
    validate,
    initialValue, 
    validateOnChange, 
    validateOnBlur,
    onValueChange,
    notify,
  };

  const { fieldState, fieldApi, purify } = useField(field, fieldProps);
   
  return purify(
    <Component
      fieldApi={fieldApi}
      fieldState={fieldState}
      field={field}
      {...rest}
    />
  );
};

export default asField;
