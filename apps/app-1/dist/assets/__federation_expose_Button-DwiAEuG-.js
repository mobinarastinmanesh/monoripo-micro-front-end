import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  className = "",
  fullWidth = false,
  icon,
  iconOnly = false,
  ripple = false,
  ...props
}) => {
  const baseClass = "btn";
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const fullWidthClass = fullWidth ? "btn-full" : "";
  const loadingClass = loading ? "btn-loading" : "";
  const iconClass = icon ? "btn-icon" : "";
  const iconOnlyClass = iconOnly ? "btn-icon-only" : "";
  const rippleClass = ripple ? "btn-ripple" : "";
  const combinedClasses = [
    baseClass,
    variantClass,
    sizeClass,
    fullWidthClass,
    loadingClass,
    iconClass,
    iconOnlyClass,
    rippleClass,
    className
  ].filter(Boolean).join(" ");
  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };
  const isDisabled = disabled || loading;
  const ariaAttributes = {
    ...props["aria-label"] && { "aria-label": props["aria-label"] },
    ...props["aria-describedby"] && {
      "aria-describedby": props["aria-describedby"]
    },
    ...loading && { "aria-busy": true },
    ...isDisabled && { "aria-disabled": true }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type,
      className: combinedClasses,
      onClick: handleClick,
      disabled: isDisabled,
      ...ariaAttributes,
      children: [
        icon && !iconOnly && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "btn-icon-start", children: icon }),
        iconOnly ? icon : children,
        icon && iconOnly && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "btn-icon-end", children: icon })
      ]
    }
  );
};

export { Button as default };
