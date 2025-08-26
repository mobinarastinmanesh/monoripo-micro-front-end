import React from 'react';
import './styles.css';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  fullWidth = false,
  icon,
  iconOnly = false,
  ripple = false,
  ...props
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const fullWidthClass = fullWidth ? 'btn-full' : '';
  const loadingClass = loading ? 'btn-loading' : '';
  const iconClass = icon ? 'btn-icon' : '';
  const iconOnlyClass = iconOnly ? 'btn-icon-only' : '';
  const rippleClass = ripple ? 'btn-ripple' : '';

  const combinedClasses = [
    baseClass,
    variantClass,
    sizeClass,
    fullWidthClass,
    loadingClass,
    iconClass,
    iconOnlyClass,
    rippleClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  const isDisabled = disabled || loading;

  const ariaAttributes = {
    ...(props['aria-label'] && { 'aria-label': props['aria-label'] }),
    ...(props['aria-describedby'] && {
      'aria-describedby': props['aria-describedby'],
    }),
    ...(loading && { 'aria-busy': true }),
    ...(isDisabled && { 'aria-disabled': true }),
  };

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={handleClick}
      disabled={isDisabled}
      {...ariaAttributes}
    >
      {icon && !iconOnly && <span className="btn-icon-start">{icon}</span>}
      {iconOnly ? icon : children}
      {icon && iconOnly && <span className="btn-icon-end">{icon}</span>}
    </button>
  );
};

export default Button;
