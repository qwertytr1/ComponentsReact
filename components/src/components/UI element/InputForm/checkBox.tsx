import React, { useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
type TypeForCheckbox = {
  label: string;
  field: string;
  register: UseFormRegister<FieldValues>; //for access to DOW element
  error: FieldErrors<FieldValues>;
};
function CheckBox({ label, field, error, register }: TypeForCheckbox) {
  const [isChecked] = useState(false);
  return (
    <div className="form-checked">
      <input
        type="checkbox"
        id={field}
        defaultChecked={isChecked}
        {...register(field, {
          required: 'You want to answer on this question',
        })}
      />
      <label className="formCheckedLabel" htmlFor={field}>
        {label}
      </label>
      {
        <div className="errorInCheck" data-testid="error">
          {error[field]?.message?.toString()}
        </div>
      }
    </div>
  );
}
export default CheckBox;
