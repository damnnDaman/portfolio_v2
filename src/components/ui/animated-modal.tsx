"use client";
import { cn } from "../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  ButtonHTMLAttributes,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface ModalFooterProps {
  children: ReactNode;
  className?: string;
  onClose?: () => void;
}

interface CloseIconProps {
  onClose: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export function Modal({ children }: { children: ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}

export const ModalTrigger = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { setOpen } = useModal();
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
        className
      )}
      onClick={() => setOpen(true)}
    >
      {children}
    </button>
  );
};

export const ModalContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col flex-1 p-8 md:p-10 relative", className)}>
      {children}
    </div>
  );
};

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className,
}) => {
  const { setOpen } = useModal();
  
  return (
    <div
      className={cn(
        "flex justify-end p-4 bg-gray-100 dark:bg-neutral-900 relative",
        className
      )}
    >
      {React.Children.map(children, child => {
        if (
          React.isValidElement<ButtonHTMLAttributes<HTMLButtonElement>>(child) && 
          typeof child.props.children === 'string' && 
          child.props.children.toLowerCase() === 'close'
        ) {
          return React.cloneElement(child, {
            ...child.props,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              child.props.onClick?.(e);
              setOpen(false);
            }
          });
        }
        return child;
      })}
    </div>
  );
};

const Overlay = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(10px)",
      }}
      exit={{
        opacity: 0,
        backdropFilter: "blur(0px)",
      }}
      className={cn("fixed inset-0 h-full w-full bg-black bg-opacity-50", className)}
    />
  );
};

const CloseIcon: React.FC<CloseIconProps> = ({ onClose }) => {
  return (
    <motion.button
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-4 right-4 p-2 rounded-full z-[2050] transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-black dark:text-white h-4 w-4 transition duration-200"
      >
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </motion.button>
  );
};


export const ModalBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { open, setOpen } = useModal();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => setOpen(false));

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 isolate" style={{ zIndex: 9999 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(10px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            className="fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full flex items-center justify-center"
          >
            <Overlay />
            <motion.div
              ref={modalRef}
              className={cn(
                "relative min-h-[50%] max-h-[90%] md:max-w-[40%] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl flex flex-col flex-1 overflow-hidden",
                className
              )}
              initial={{
                opacity: 0,
                scale: 0.5,
                rotateX: 40,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                rotateX: 10,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 15,
              }}
            >
              <CloseIcon onClose={() => setOpen(false)} />
              {children}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

export {
  type ModalContextType,
  type ModalFooterProps,
  type CloseIconProps,
};