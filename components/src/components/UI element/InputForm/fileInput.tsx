import React, { RefObject } from 'react';

type TypeInFileInput = {
    label: string;
    reference: RefObject<HTMLInputElement>;
    error: string;
    name: string;
};

class FileInput extends React.Component<TypeInFileInput> {
    render(): React.ReactNode {
        return (
            <div>
                <div>
                    <label>
                        {this.props.label}
                        <input type="file" ref={this.props.reference} />
                    </label>
                    {<div className="error">{this.props.error}</div>}
                </div>
            </div>
        );
    }
}

export default FileInput;