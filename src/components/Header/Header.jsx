import React from 'react'
import pixel6 from "../../assets/pixel6.png";
import { RiMenuFill } from "@remixicon/react";


const Header = () => {
    return (
        <header className="w-full mb-8 sm:px-8 sm:py-4 px-4 py-2 h-fit flex justify-between items-center">
            <img src={pixel6} alt="logo" className="sm:h-20 sm:w-20 h-12 w-12" />
            <RiMenuFill
                size={32}
                color="red"
            />
        </header>
    )
}

export default Header