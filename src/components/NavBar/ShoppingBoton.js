import React from "react";
import { Box } from "@chakra-ui/react";
import shopping from "../../img/NavIconos/Shopping.png";
import { useState } from "react";
import ShoppingModal from "./ShoppingModal";



const ShoppingBoton = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Box
        width={["45px", "50px", "55px"]}
        >
            <img
                onClick={toggle}
                display={isOpen ? "block" : "none"}
                className="hoverIcon" 
                style={{
                cursor: "pointer"
            }} src={shopping} alt="" />
            <Box
                >
                <ShoppingModal toggle={toggle} isOpen={isOpen}/>
            </Box>
        </Box>
    )
}

export default ShoppingBoton