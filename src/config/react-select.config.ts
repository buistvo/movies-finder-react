import { Colors } from '../Colors';

export const CustomStyles = {
  container: (provided: any) => ({
    ...provided,
    backgroundColor: Colors.Background,
  }),
  menu: (provided: any) => ({
    ...provided,
    color: Colors.White,
    backgroundColor: Colors.Background,
  }),
  option: (provided: any) => ({
    ...provided,
    color: Colors.White,
    backgroundColor: Colors.Background,
    ':hover': {
      backgroundColor: Colors.PrimaryRed,
    },
  }),
  control: (provided: any) => ({
    ...provided,
    borderColor: null,
    backgroundColor: Colors.Background,
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: Colors.SecondaryText,
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: Colors.White,
    backgroundColor: Colors.Background,
  }),
};
