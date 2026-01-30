import './CheckBox.css'
import { useState } from 'react'

export default function CheckBox ({
    label = "Согласие на обработку персональных данных",
    onChange,
    defaultChecked = false
}) {
  const [isChecked, setIsChecked] = useState(defaultChecked)
  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  }
  return (
    <div className='checkbox__wrapper' onClick={handleToggle}>
      <div className={`${'customCheckbox'} ${isChecked ? 'checked' : ''}`}>
        {isChecked && (
          <div className='checkmark'></div>
        )}
      </div>
      <span className='label'>{label}</span>
    </div>
  )
}