import React, { RefObject } from "react";
type TypeForCheckbox = {
    label: string;
    type?: string;
    name: string;
    reference: RefObject<HTMLInputElement>;//for access to DOW element
    error: string;
}
