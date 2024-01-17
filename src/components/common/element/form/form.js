import {useContext} from "react";
import {FormProvider} from "../../../../context/formContext";
import ModalContext from "../../../../context/modalContext";
import {saveTask} from "../../../../utils/fake";

const Form = ({children, ...rest}) => {

    const modalContext = useContext(ModalContext);

    const handleSetData = (newData) => {
        const old = modalContext.getModalItem();

        modalContext.setModalItem({...old, ...newData});
    }

    const handleGetData = () => {
        return modalContext.getModalItem();
    }

    const handleSubmit = e => {
        e.preventDefault();

        const data = modalContext.getModalItem();

        // call backend to save data
        const res = saveTask(data);

        if (res.status) {
            modalContext.closeModal();
        }




        console.log('backend call')
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