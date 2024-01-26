import {useState} from "react";
import {FormProvider} from "../../../../context/formContext";

const Form = ({children, onSubmit, ...rest}) => {

    const [data, setData] = useState();
    const [errors, setErrors] = useState();

    const handleSetData = newData => {
        for (let key in errors) {
            if (newData[key] && newData[key].trim().length > 0){
                const temp = {...errors};
                delete temp[key];
                setErrors({...temp});
            }
        }

        setData(prev => ({...prev, ...newData}));
    }

    const handleGetData = () => data;

    const handleGetErrors = () => errors;

    const handleSetErrors = newError => setErrors(prev => ({...prev, ...newError}))

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit(e, data, handleSetErrors);
    }

    const context = {
        setData: handleSetData,
        getData: handleGetData,
        setErrors: handleSetErrors,
        getErrors: handleGetErrors,
    }

    return (
        <FormProvider value={context}>
            <form onSubmit={handleSubmit} {...rest}>
                {children}
            </form>
        </FormProvider>
    )
}

export default Form;