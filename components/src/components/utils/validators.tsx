type Typedata = {
    [key: string]: string;
};
type TypeMessage = {
    [key: string]: string;
};

type TypeConfig = {
    [key: string]: { [key: string]: { message: string; min?: string } };
};

async function validator(data: Typedata, config: TypeConfig) {
    const errors: { [key: string]: string } = {};
    function validate(method: string, dataInput: string, configOptions: TypeMessage) {
        let statusValidate: boolean | undefined;
        switch (method) {
            case 'isRequired': {
                if (typeof dataInput === 'boolean') {
                    statusValidate = !dataInput;
                } else if (typeof dataInput === 'number') {
                    statusValidate = !dataInput;
                } else {
                    statusValidate = dataInput.trim() === '';
                }
                break;
            }
            case 'isStartCapitalLetter': {
                const firstCapitalRegExp = /^[A-Z]/g;
                statusValidate = !firstCapitalRegExp.test(dataInput);
                break;
            }
            default:
                break;
        }
        if (statusValidate) return configOptions.message;
        return null;
    }
    Object.keys(data).forEach((key) => {
        Object.keys(config[key]).forEach((method) => {
            const error = validate(method, data[key], config[key][method]);
            if (error && !errors[key]) {
                errors[key] = error;
            }
        });
    });
    return errors;
}

export default validator;