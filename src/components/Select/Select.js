import React from 'react'
import { Field } from '../Field'
import { components } from 'react-select'
import { themeOpts as theme } from '../../styles/theme'
import { SelectElement, IndicatorsContainer } from './Style'

const Indicators = props => (
  <IndicatorsContainer>
    <components.IndicatorsContainer {...props} />
  </IndicatorsContainer>
)

const colourStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: theme.colors.secondary,
    appearance: 'none',
    lineHeight: '1.75',
    padding: '0 58px 0 8px',
    position: 'relative',
    zIndex: '0',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: isFocused ? theme.colors.defaultTextColor : 'transparent',
    boxSizing: 'border-box',
    borderRadius: '6px',
    width: '100%',
    color: isFocused ? theme.colors.white : theme.colors.defaultTextColor,
    transition: 'all 0.3s ease-in-out',
    margin: '0',
    height: '65px',
    boxShadow: 'none',

    ':hover': {
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: theme.colors.defaultTextColor,
    },
  }),
  menu: styles => ({
    ...styles,
    zIndex: '10',
    backgroundColor: theme.colors.blackOdd,
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    color: isSelected ? 'white !important' : theme.colors.defaultTextColor,
    backgroundColor: isSelected ? '#1DA1F2 !important' : null,
    ':active': {
      ...styles[':active'],
      backgroundColor: theme.colors.black,
      color: theme.colors.defaultTextColor,
    },
    ':hover': {
      ...styles[':hover'],
      backgroundColor: theme.colors.black,
      color: theme.colors.defaultTextColor,
    },
  }),
  placeholder: styles => ({ ...styles, color: theme.colors.defaultTextColor }),
  singleValue: styles => ({ ...styles, color: '#ffffff' }),
}

export const Select = ({
  options,
  label,
  placeholder,
  noOptionsMessage,
  widthAuto,
  name,
  ...props
}) => (
  <Field name={name} widthAuto={widthAuto} label={label}>
    <SelectElement
      classNamePrefix="form-select"
      options={options}
      components={{ IndicatorsContainer: Indicators }}
      placeholder={placeholder}
      {...props}
      styles={colourStyles}
      isSearchable={false}
      noOptionsMessage={() => noOptionsMessage}
    />
  </Field>
)
