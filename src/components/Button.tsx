import {FC} from "react";

export const Button: FC = (props) => {
    return (<button
        role="button"
        className={
            "w-full xs:w-auto text-white uppercase bg-black hover:bg-gray-800 font-black px-8 py-3 mb-6 rounded flex items-center justify-center "
        }
        {...props}
    >
        {props.children}
    </button>)
}