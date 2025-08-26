import React, { useState, useId } from 'react';
import './styles.css';
import type { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  value,
  defaultValue,
  placeholder,
  variant = 'default',
  size = 'md',
  type = 'text',
  disabled = false,
  readOnly = false,
  required = false,
  error = false,
  success = false,
  fullWidth = false,
  className = '',
  name,
  id,
  autoComplete,
  autoFocus = false,
  maxLength,
  minLength,
  pattern,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  leftIcon,
  rightIcon,
  label,
  helperText,
  errorText,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-invalid': ariaInvalid,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const generatedId = useId();
  const inputId = id || generatedId;
  const helperId = helperText ? `${inputId}-helper` : undefined;
  const errorId = errorText ? `${inputId}-error` : undefined;

  const baseClass = 'input';
  const variantClass = `input-${variant}`;
  const sizeClass = `input-${size}`;
  const fullWidthClass = fullWidth ? 'input-full' : '';
  const errorClass = error ? 'input-error' : '';
  const successClass = success ? 'input-success' : '';

  // Icon classes
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;
  const leftIconClass = hasLeftIcon ? 'input-with-left-icon' : '';
  const rightIconClass = hasRightIcon ? 'input-with-right-icon' : '';
  const bothIconsClass =
    hasLeftIcon && hasRightIcon ? 'input-with-both-icons' : '';

  const combinedClasses = [
    baseClass,
    variantClass,
    sizeClass,
    fullWidthClass,
    errorClass,
    successClass,
    leftIconClass,
    rightIconClass,
    bothIconsClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const ariaAttributes = {
    ...(ariaLabel && { 'aria-label': ariaLabel }),
    ...(ariaDescribedby && { 'aria-describedby': ariaDescribedby }),
    ...(ariaInvalid !== undefined && { 'aria-invalid': ariaInvalid }),
    ...(error && { 'aria-invalid': true }),
    ...(helperId && { 'aria-describedby': helperId }),
    ...(errorId && { 'aria-describedby': errorId }),
    ...(required && { 'aria-required': true }),
  };

  return (
    <div className="input-container">
      {label && (
        <label
          htmlFor={inputId}
          className={`input-label ${required ? 'required' : ''}`}
        >
          {label}
        </label>
      )}

      <div className="input-wrapper">
        {leftIcon && <span className="input-icon-left">{leftIcon}</span>}

        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={combinedClasses}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          {...ariaAttributes}
          {...props}
        />

        {rightIcon && <span className="input-icon-right">{rightIcon}</span>}
      </div>

      {errorText && (
        <div id={errorId} className="input-error-text">
          {errorText}
        </div>
      )}

      {helperText && !errorText && (
        <div id={helperId} className="input-helper-text">
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Input;
