import React, { PropTypes } from "react"
import { whitelistProps } from "./utils"

export const CheckBoxTag = ({ uncheckedValue = 0, ...props }) => {
  const propsWithDefault = { defaultValue: 0, ...props }

  return (
    <span>
      <HiddenFieldTag value={uncheckedValue} />
      <input type="checkbox" {...propsWithDefault} />
    </span>
  )
}

export const ColorFieldTag = (props) => (
  <input type="color" {...props} />
)

export const DateFieldTag = (props) => (
  <input type="date" {...props} />
)

export const DatetimeFieldTag = (props) => (
  <input type="datetime" {...props} />
)

export const DatetimeLocalFieldTag = (props) => (
  <input type="datetime-local" {...props} />
)

export const EmailFieldTag = (props) => (
  <input type="email" {...props} />
)

export const HiddenFieldTag = (props) => (
  <input type="hidden" readOnly {...props} />
)

export const LabelTag = (props) => (
  <label {...whitelistProps(props)} />
)

export const MonthFieldTag = (props) => (
  <input type="month" {...props} />
)

export const NumberFieldTag = (props) => (
  <input type="number" {...props} />
)

export const PasswordFieldTag = (props) => (
  <input type="password" {...props} />
)

export const RadioTag = (props) => (
  <input type="radio" {...props} />
)

export const RangeFieldTag = (props) => (
  <input type="range" {...props} />
)

export const SearchFieldTag = (props) => (
  <input type="search" {...props} />
)

export const SelectTag = (props) => (
  <select {...whitelistProps(props)} />
)

export const SubmitTag = (props) => (
  <input type="submit" {...props} />
)

export const TelephoneFieldTag = (props) => (
  <input type="tel" {...props} />
)

export const TextAreaTag = (props) => (
  <textarea {...whitelistProps(props)} />
)

export const TextFieldTag = (props) => (
  <input type="text" {...props} />
)

export const TimeFieldTag = (props) => (
  <input type="time" {...props} />
)

export const UrlFieldTag = (props) => (
  <input type="url" {...props} />
)

export const WeekFieldTag = (props) => (
  <input type="week" {...props} />
)
