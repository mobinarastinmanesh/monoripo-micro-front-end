import React from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: ButtonType;
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  ripple?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

export interface ButtonViewProps extends ButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  combinedClasses: string;
}

export interface ButtonWrapProps extends ButtonProps {
  children: React.ReactNode;
}

export interface ButtonState {
  isLoading: boolean;
  isPressed: boolean;
}

