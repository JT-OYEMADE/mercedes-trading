type BaseInputProps = {
  id: string;
  label?: string | React.ReactNode;
  error?: any;
  width?: string;
  showOptional?: boolean;
  required?: boolean;
  placeholder?: string;
  className?: string;
  hasError?: boolean;
  isPhoneInput?: boolean;
  disabled?: boolean;
  labelClassName?: string;
  [key: string]: any;
};
export type TextfieldProps = BaseInputProps & {
  type?: string;
  prefixIcon?: any;
  surfixIcon?: any;
  width?: string;
};
export interface SelectfieldOptions {
  label: string;
  value: string;
}
export interface SelectfieldProps {
  id: string;
  label?: string;
  error?: any;
  width?: string;
  placeholder?: string;
  className?: string;
  hasError?: boolean;
  disabled?: boolean;
  ringColor?: string;
  options: SelectfieldOptions[];
  labelClassName?: string;
  [key: string]: any;

}
export interface SelectFieldProps {
  id: string;
  placeholder: string;
  options: SelectfieldOptions[];
  extraLabel?: string;
  isMulti?: boolean;
  isLoading?: boolean;
  defaultValue?: SelectfieldOptions;
  label?: string;
  labelStyles?: React.CSSProperties;
  isSearchable?: boolean;
  searchPlaceholder?: string;
  labelClassName?: string;
  error?: string;
  extra?: string;
  disabled?: boolean;
  isRequired?: boolean;
  showOptional?: boolean;
  required?: boolean;
  onChange: (value: SelectfieldOptions | SelectfieldOptions[]) => void;
  onOpen?: () => void;
  width?: string;
}
export interface MultiSelectFieldProps extends Omit<SelectFieldProps, 'defaultValue'> {
  defaultValue?: SelectfieldOptions[];
}
// export interface CustomInputProps extends InputProps {
//   label: string;
//   control: Control<FieldValues>;
//   name: string;
//   formState: FormState<FieldValues>;
//   description?: string;
//   rows?: number;
//   uploadProps?: UploadProps;
//   renderUpload?: React.ReactNode;
//   loadOptions?: () => Promise<any>;
//   onInputChange?: (value: string) => void;
//   mode?: "multiple" | "tags";
//   maxTagCount?: "responsive";
//   groupClassName?: string;
//   fullWidth?: boolean;
//   treeData?: any[];
//   treeSearchValue?: string;
//   setTreeSearch?: (v: string) => void;
//   onTreeLoadData?: any;
//   dateProps?: {
//     defaultPickerValue?: any;
//     disabledDate?: any;
//     showTime?: boolean;
//     value?: any;
//     name?: string;
//     onChange?: (date: any, dateString: any) => void;
//   };
//   loading?: boolean;
//   radioOptions?: {
//     name: React.ReactNode;
//     label: string;
//   }[];
//   options?: {
//     value: string;
//     label: string;
//   }[];
//   onSelect?: (a?: any, b?: any) => any;
//   addNew?: boolean;
// }
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  fullWidth?: boolean;
  labelColorClass?: string;
  surfixClass?: string;
  type?: 'button' | 'submit';
  size?: 'sm' | 'md' | 'lg';
  state?: 'primary' | 'secondary' | 'tetiary';
  prefixIcon?: React.ReactElement;
  surfixIcon?: React.ReactElement;
}
export interface CardProps {
  className?: string;
  title: string;
  number: string;
  summary: string;
}
export type TextAreaFieldProps = BaseInputProps & {
  rows?: number;
};