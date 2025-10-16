import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./Button";

/**
 * Modern Modal component with emergency design system
 * Compatible with your existing Modal component API
 */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'critical' | 'warning';
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  onCancel,
  confirmText = 'Potwierdź',
  cancelText = 'Anuluj',
  loading = false,
  size = 'md',
  variant = 'default'
}: ModalProps) => {
  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen && !loading) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, loading, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  };

  const headerColors = {
    default: 'border-border',
    critical: 'border-critical/20 bg-critical/5',
    warning: 'border-warning/20 bg-warning/5'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={!loading ? onClose : undefined}
      />

      {/* Modal */}
      <div
        className={cn(
          'relative bg-card border border-border rounded-lg shadow-lg',
          'w-full',
          sizeClasses[size],
          'max-h-[90vh] flex flex-col'
        )}
      >
        {/* Header */}
        <div className={cn(
          'flex items-center justify-between px-6 py-4 border-b',
          headerColors[variant]
        )}>
          {title && (
            <h3 className="text-lg font-semibold text-foreground">
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            disabled={loading}
            className="ml-auto p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Zamknij"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4 overflow-y-auto flex-1">
          {children}
        </div>

        {/* Footer with actions */}
        {(onConfirm || onCancel) && (
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border bg-muted/30">
            {onCancel && (
              <Button
                variant="ghost"
                onClick={onCancel}
                disabled={loading}
              >
                {cancelText}
              </Button>
            )}
            {onConfirm && (
              <Button
                variant={variant === 'critical' ? 'critical' : variant === 'warning' ? 'warning' : 'primary'}
                onClick={onConfirm}
                loading={loading}
                disabled={loading}
              >
                {confirmText}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
