import { Card, CardBody, Image, Heading, Text, Button, Link } from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";

const TarjetaEscrtorio = (props) => {

    const [visible, setVisible] = useState(false)

    function over(e) {
        setVisible(true);
    }
    function out(e) {
        setVisible(false);
    }

    const modalCarrito = (prod) => {
        Swal.fire({
            heightAuto: "true",
            title: prod.titulo,
            text: "Producto agregado correctamente",
            imageUrl: prod.img,
            imageWidth: 250,
            imageHeight: 250,
            imageAlt: 'Custom image',
        })
    }
    const caracteristicas = (prod) => {
        Swal.fire({
            width: "500px",
            title: "Caracteristicas Generales",
            text: prod.caracteristicas
        })
    }

    return (

            <Card
                w="250px"
                h="360px"
                _hover={{
                    h:"490px",
                    boxShadow: "dark-lg",
                }}
                transition= "0.1s"
                onMouseOver={over}
                onMouseOut={out}
                display={["none", "none", "block"]}
                justify="center"
                align="center"
                bg="rgba(80, 67, 117, .8)"
                >
                <CardBody
                    display="flex"
                    flexDirection="column"
                    justify="center"
                    align="center"
                    >
                    <Image
                        src={props.prod.img}
                        maxW="100%"
                        h="auto"
                        alignSelf="center"
                        objectFit="cover"
                        />

                    <Heading
                        as="h3"
                        fontSize="1.5rem"
                        mt="30px"
                        color="--white-color"
                        fontFamily='--first-font'
                        fontWeight="extrabold"
                            >{props.prod.titulo}</Heading>

                    <Text
                        fontFamily="--first-font"
                        fontWeight="medium"
                        color="--white-color"
                        textAlign="left"
                        mt="10px"
                        fontSize=".9rem"
                        textOverflow="ellipsis"
                        display={visible ? "inline" : "none"}
                            >{props.prod.descripcion}</Text>

                    <Text
                        fontWeight="semibold"
                        fontSize="1.25rem"
                        mt="10px"
                        color="--white-color"
                        fontFamily='--first-font'
                        display={visible ? "inline" : "none"}
                        textAlign="left"
                            >{props.prod.precio}</Text>

                        <Button
                            onClick={() => modalCarrito(props.prod)}
                            borderRadius="20px"
                            color="--third-color"
                            bg="--white-color"
                            _hover={{
                                boxShadow:"dark-lg",
                            }}
                            fontFamily="--second-font"
                            fontSize="1rem"
                            w="100px"
                            alignSelf="center"
                            mt="20px"
                            display={visible ? "inline" : "none"}
                                >{props.prod.boton}</Button>
                        
                        <Link
                            alignSelf="center"
                            w="100px"
                            display={visible ? "inline" : "none"}
                            fontFamily="--second-font"
                            color="--white-color"
                            fontWeight="bold"
                            m="8px"
                            _hover={{
                                color:"--first-color"
                            }}
                            onClick={() => caracteristicas(props.prod)}
                            >
                                Ver Detalles</Link>
                </CardBody>
            </Card>
    )
}

export default TarjetaEscrtorio
