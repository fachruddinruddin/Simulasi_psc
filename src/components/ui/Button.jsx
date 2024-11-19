import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  ...props
}) => {
  // Base styles untuk semua tombol
  const baseStyles =
    "rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition";

  // Varian tombol
  const variants = {
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500",
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    warning: "bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-500",
  };

  // Ukuran tombol
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};

export default Button;
