import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

interface CustomSelectOption<T extends string> {
  label: string;
  value: T;
}

interface CustomSelectProps<T extends string> {
  ariaLabel?: string;
  disabled?: boolean;
  onChange: (value: T) => void;
  options: ReadonlyArray<CustomSelectOption<T>>;
  value: T;
}

export function CustomSelect<T extends string>({
  ariaLabel,
  disabled = false,
  onChange,
  options,
  value,
}: CustomSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const listboxId = useId();

  const selectedIndex = useMemo(
    () => Math.max(0, options.findIndex((option) => option.value === value)),
    [options, value],
  );
  const selectedOption = options[selectedIndex] ?? options[0];

  useEffect(() => {
    if (!open) {
      return;
    }

    setHighlightedIndex(selectedIndex);
  }, [open, selectedIndex]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const highlightedOption = optionRefs.current[highlightedIndex];
    highlightedOption?.focus();
  }, [highlightedIndex, open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function commitSelection(nextValue: T) {
    onChange(nextValue);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function handleTriggerKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (disabled) {
      return;
    }

    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp": {
        event.preventDefault();
        setOpen(true);
        setHighlightedIndex(
          event.key === "ArrowDown"
            ? Math.min(selectedIndex + 1, options.length - 1)
            : Math.max(selectedIndex - 1, 0),
        );
        break;
      }
      case "Enter":
      case " ": {
        event.preventDefault();
        setOpen((current) => !current);
        break;
      }
    }
  }

  function handleOptionKeyDown(
    event: ReactKeyboardEvent<HTMLButtonElement>,
    optionIndex: number,
    optionValue: T,
  ) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setHighlightedIndex((current) => Math.min(current + 1, options.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setHighlightedIndex((current) => Math.max(current - 1, 0));
        break;
      case "Home":
        event.preventDefault();
        setHighlightedIndex(0);
        break;
      case "End":
        event.preventDefault();
        setHighlightedIndex(options.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        commitSelection(optionValue);
        break;
      case "Tab":
        setOpen(false);
        break;
      case "Escape":
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        break;
      default:
        setHighlightedIndex(optionIndex);
        break;
    }
  }

  return (
    <div className={`custom-select${open ? " is-open" : ""}`} ref={rootRef}>
      <button
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        className="custom-select__trigger"
        disabled={disabled}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleTriggerKeyDown}
        ref={buttonRef}
        type="button"
      >
        <span className="custom-select__trigger-text">{selectedOption?.label ?? ""}</span>
        <span aria-hidden="true" className="custom-select__trigger-icon">
          ▾
        </span>
      </button>
      {open ? (
        <div className="custom-select__menu" id={listboxId} role="listbox">
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const isHighlighted = index === highlightedIndex;

            return (
              <button
                aria-selected={isSelected}
                className={`custom-select__option${isSelected ? " is-selected" : ""}${
                  isHighlighted ? " is-highlighted" : ""
                }`}
                key={option.value}
                onClick={() => commitSelection(option.value)}
                onKeyDown={(event) => handleOptionKeyDown(event, index, option.value)}
                onMouseEnter={() => setHighlightedIndex(index)}
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                role="option"
                tabIndex={isHighlighted ? 0 : -1}
                type="button"
              >
                <span>{option.label}</span>
                {isSelected ? <span aria-hidden="true">✓</span> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
