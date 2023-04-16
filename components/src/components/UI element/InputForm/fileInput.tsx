import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type TypeInFileInput = {
  label: string;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors<FieldValues>;
  field: string;
};
function FileInput({ label, error, register, field }: TypeInFileInput) {
  return (
    <div>
      <div>
        <label>
          {label}
          <input
            type="file"
            {...register(field, {
              required: 'Your need to upload picture',
            })}
          />
        </label>
        {<div className="error">{error[field]?.message?.toString()}</div>}
      </div>
    </div>
  );
}

export default FileInput;
