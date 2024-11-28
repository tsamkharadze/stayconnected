import { PropsWithChildren } from "react";

const ScreenLg: React.FC<PropsWithChildren> = ({children}) => {
    return(
        <div className="max-w-screen-xl mx-4 sm:mx-12 md:mx-16 2xl:mx-auto">
            {children}
        </div>
    )
}
export default ScreenLg
