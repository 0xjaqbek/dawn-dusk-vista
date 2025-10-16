import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Modern Button component with emergency design system
 * Compatible with your existing Button component API
 */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'ghost' | 'critical' | 'warning' | 'stable';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      disabled = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Variant styles using emergency design tokens
    const variantClasses = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary',
      danger: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive',
      success: 'bg-stable text-stable-foreground hover:bg-stable/90 focus-visible:ring-stable',
      critical: 'bg-critical text-critical-foreground hover:bg-critical/90 focus-visible:ring-critical shadow-critical',
      warning: 'bg-warning text-warning-foreground hover:bg-warning/90 focus-visible:ring-warning',
      stable: 'bg-stable text-stable-foreground hover:bg-stable/90 focus-visible:ring-stable',
      outline: 'border-2 border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary',
      ghost: 'text-foreground hover:bg-muted focus-visible:ring-muted'
    };

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm h-8',
      md: 'px-4 py-2 text-base h-10',
      lg: 'px-6 py-3 text-lg h-12'
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center font-medium rounded-lg',
          'transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          // Variant
          variantClasses[variant],
          // Size
          sizeClasses[size],
          // Full width
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
