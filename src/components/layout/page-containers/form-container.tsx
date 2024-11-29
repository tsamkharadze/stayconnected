import { PropsWithChildren } from "react";

const FormContainer:React.FC<PropsWithChildren> =({children}) => {
    return(
        <form className='flex flex-col gap-8'>
            {children}
        </form>
    )
}
export default FormContainer;