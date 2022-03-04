import { SelectProps, TextFieldProps } from '@mui/material';
import { FormEventHandler } from 'react';

type SelectComponentProps = SelectProps & {
  name: string,
  type: string,
  value: Array<string> | string | { id: string, title: string },
  onChange: FormEventHandler<HTMLFormElement>,
  onBlur: TextFieldProps['onBlur'],
  error: boolean | undefined,
  disabled: boolean,
};

export default SelectComponentProps;
