import './FormForSelection.css'
import { useState, useRef, useEffect } from 'react';


export default function FormForSelection({
    placeholder = "",
    options = [],
    value,
    onChange,
    disabled = false,
    error = false,
    errorMessage = "",
    className = ""
    }) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [])

    const handleSelect = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    }

    const selectedOption = options.find(opt => opt.value === value)
    return (
        <div 
        className={`dropdown-select ${className} ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}
        ref={dropdownRef}
        >
        <div 
            className={`dropdown-select__header ${isOpen ? 'open' : ''}`}
            onClick={() => !disabled && setIsOpen(!isOpen)}
        >
            <span className="dropdown-select__placeholder">
            {selectedOption ? selectedOption.label : placeholder}
            </span>
            <img src="./icons/Arrow_to_open.svg" alt="" />
        </div>

        {isOpen && options.length > 0 && (
            <div className="dropdown-select__list">
            {options.map((option) => (
                <div
                key={option.value}
                className={`dropdown-select__item ${value === option.value ? 'selected' : ''}`}
                onClick={() => handleSelect(option.value)}
                >
                {option.label}
                </div>
            ))}
            </div>
        )}

        {isOpen && options.length === 0 && (
            <div className="dropdown-select__list">
            <div className="dropdown-select__item empty">Нет доступных опций</div>
            </div>
        )}

        {error && errorMessage && (
            <div className="dropdown-select__error">{errorMessage}</div>
        )}
        </div>
  )
}