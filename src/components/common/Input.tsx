import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Modern Input component with emergency design system
 * Compatible with your existing Input component API
 */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      icon,
      className,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className="mb-4">
        {label && (
          <label
            htmlFor={props.name}
            className="block text-sm font-medium text-foreground mb-1"
          >
            {label}
            {required && <span className="text-critical ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            disabled={disabled}
            className={cn(
              'w-full px-4 py-2 border rounded-lg',
              'bg-background text-foreground',
              'transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
              'disabled:bg-muted disabled:cursor-not-allowed disabled:opacity-50',
              error ? 'border-critical focus:ring-critical' : 'border-input',
              icon && 'pl-10',
              className
            )}
            {...props}
          />
        </div>

        {error && (
          <p className="mt-1 text-sm text-critical">{error}</p>
        )}

        {helperText && !error && (
          <p className="mt-1 text-sm text-muted-foreground">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

/**
 * Textarea variant
 */
interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  rows?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      rows = 4,
      className,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className="mb-4">
        {label && (
          <label
            htmlFor={props.name}
            className="block text-sm font-medium text-foreground mb-1"
          >
            {label}
            {required && <span className="text-critical ml-1">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          rows={rows}
          disabled={disabled}
          className={cn(
            'w-full px-4 py-2 border rounded-lg resize-vertical',
            'bg-background text-foreground',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            'disabled:bg-muted disabled:cursor-not-allowed disabled:opacity-50',
            error ? 'border-critical focus:ring-critical' : 'border-input',
            className
          )}
          {...props}
        />

        {error && (
          <p className="mt-1 text-sm text-critical">{error}</p>
        )}

        {helperText && !error && (
          <p className="mt-1 text-sm text-muted-foreground">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

/**
 * Select variant
 */
interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options?: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      options = [],
      placeholder = 'Wybierz opcję',
      className,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className="mb-4">
        {label && (
          <label
            htmlFor={props.name}
            className="block text-sm font-medium text-foreground mb-1"
          >
            {label}
            {required && <span className="text-critical ml-1">*</span>}
          </label>
        )}

        <select
          ref={ref}
          disabled={disabled}
          className={cn(
            'w-full px-4 py-2 border rounded-lg',
            'bg-background text-foreground',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            'disabled:bg-muted disabled:cursor-not-allowed disabled:opacity-50',
            error ? 'border-critical focus:ring-critical' : 'border-input',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && (
          <p className="mt-1 text-sm text-critical">{error}</p>
        )}

        {helperText && !error && (
          <p className="mt-1 text-sm text-muted-foreground">{helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Input;
