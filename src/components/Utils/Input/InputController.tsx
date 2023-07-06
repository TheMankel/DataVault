import { useController, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { InputLabelProps } from '@mui/material';

interface IInputControllerProps {
  required?: boolean;
  name: string;
  label: string;
  type?: 'text' | 'number' | 'date' | 'email';
  InputLabelProps?: InputLabelProps;
  multiline?: boolean;
  rows?: number;
}

const InputController = ({
  required = true,
  name,
  label,
  type = 'text',
  InputLabelProps,
  ...rest
}: IInputControllerProps) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  return (
    <TextField
      {...field}
      required={required}
      fullWidth
      ref={field.ref}
      id={name}
      label={label}
      aria-label={label}
      type={type}
      value={field.value}
      error={!!error?.message}
      helperText={error?.message}
      InputLabelProps={InputLabelProps}
      {...rest}
    />
  );
};

export default InputController;
