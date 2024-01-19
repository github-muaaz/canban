import {useState} from "react";
import {FormProvider} from "../../../../context/formContext";

const Form = ({children, onSubmit, ...rest}) => {

    const [data, setData] = useState();

    const handleSetData = (newData) => {
        setData(prev => ({...prev, ...newData}));
    }

    const handleGetData = () => {
        return data;
    }

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit(e, data);
    }

    const context = {
        setData: handleSetData,
        getData: handleGetData,
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