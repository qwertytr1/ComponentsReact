import React, { RefObject, useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './switch.module.css'
type SwitchBox = {
    label: string;
    type?: string;
    field: string;
    register: UseFormRegister<FieldValues>;
    error: FieldErrors<FieldValues>;
    options: string[];
}
function Switcher({ label, field, error, register, options }: SwitchBox) {
    return (
        <div className={styles.switcher}>
            <span>{options[0]}</span>
            <input className={styles.checkbox} type="checkbox" data-testid="gender" {...register(field)} />
            <span>{options[1]}</span>
            {label && (
                <label className="form-checkLabel" htmlFor={field}>
                    {label}
                </label>
            )}
            {<div className="error">{error[field]?.message?.toString()}</div>}
        </div>

    )
}
export default Switcher;