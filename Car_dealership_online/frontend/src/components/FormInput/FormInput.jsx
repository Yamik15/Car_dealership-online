import './FormInput.css'

export default function FormInput({
    placeholder = "",
    value,
    onChange,
    type = "text",
    disabled = false,
    error = false,
    className = ""
}){
    const handleChange = (e) => {
        onChange(e.target.value)
    }

    return(
        <div className={`input-field ${className} ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}>
            <input
                type={type}
                className="input-field__input"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
    )
}