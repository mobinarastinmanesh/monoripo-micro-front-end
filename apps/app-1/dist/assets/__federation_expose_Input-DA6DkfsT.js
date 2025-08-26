import { importShared } from './__federation_fn_import-D-HRJ5Kf.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';

const {useState,useId} = await importShared('react');
const Input = ({
  value,
  defaultValue,
  placeholder,
  variant = "default",
  size = "md",
  type = "text",
  disabled = false,
  readOnly = false,
  required = false,
  error = false,
  success = false,
  fullWidth = false,
  className = "",
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
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  "aria-invalid": ariaInvalid,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const generatedId = useId();
  const inputId = id || generatedId;
  const helperId = helperText ? `${inputId}-helper` : void 0;
  const errorId = errorText ? `${inputId}-error` : void 0;
  const baseClass = "input";
  const variantClass = `input-${variant}`;
  const sizeClass = `input-${size}`;
  const fullWidthClass = fullWidth ? "input-full" : "";
  const errorClass = error ? "input-error" : "";
  const successClass = success ? "input-success" : "";
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;
  const leftIconClass = hasLeftIcon ? "input-with-left-icon" : "";
  const rightIconClass = hasRightIcon ? "input-with-right-icon" : "";
  const bothIconsClass = hasLeftIcon && hasRightIcon ? "input-with-both-icons" : "";
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
    className
  ].filter(Boolean).join(" ");
  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };
  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };
  const ariaAttributes = {
    ...ariaLabel && { "aria-label": ariaLabel },
    ...ariaDescribedby && { "aria-describedby": ariaDescribedby },
    ...ariaInvalid !== void 0 && { "aria-invalid": ariaInvalid },
    ...error && { "aria-invalid": true },
    ...helperId && { "aria-describedby": helperId },
    ...errorId && { "aria-describedby": errorId },
    ...required && { "aria-required": true }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-container", children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "label",
      {
        htmlFor: inputId,
        className: `input-label ${required ? "required" : ""}`,
        children: label
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-wrapper", children: [
      leftIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "input-icon-left", children: leftIcon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: inputId,
          name,
          type,
          value,
          defaultValue,
          placeholder,
          className: combinedClasses,
          disabled,
          readOnly,
          required,
          autoComplete,
          autoFocus,
          maxLength,
          minLength,
          pattern,
          onChange,
          onFocus: handleFocus,
          onBlur: handleBlur,
          onKeyDown,
          onKeyUp,
          ...ariaAttributes,
          ...props
        }
      ),
      rightIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "input-icon-right", children: rightIcon })
    ] }),
    errorText && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: errorId, className: "input-error-text", children: errorText }),
    helperText && !errorText && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: helperId, className: "input-helper-text", children: helperText })
  ] });
};

export { Input as default };
