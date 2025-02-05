import { Box, Card, CardBody, Image, Heading, Text, CardFooter, Button, Link} from "@chakra-ui/react";
import TarjetaEscrtorio from "./TarjetaEscrtorio";
import Swal from "sweetalert2";


const TarjetaMobile = (props) => {

    const modalCarrito = (prod) => {
        Swal.fire({
            width: "300px",
            title: prod.titulo,
            text: "Producto agregado correctamente",
            imageUrl: prod.img,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }
    const caracteristicas = (prod) => {
        Swal.fire({
            width: "300px",
            title: "Caracteristicas Generales",
            text: prod.caracteristicas
        })
    }

    return (
        <Box
            >
            <TarjetaEscrtorio prod={props.prod}/>

        <Card 
            maxW={["200px", "230px" ,"230px"]}
            display={["block", "block", "none"]}
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
                    />

                <Heading
                    as="h3"
                    fontSize="1.4rem"
                    mt="30px"
                    color="--white-color"
                    fontFamily="--first-font"
                    fontWeight="semibold"
                    >{props.prod.titulo}</Heading>
                <Text
                    fontWeight="semibold"
                    fontSize="1.25rem"
                    mt="20px"
                    color="--white-color"
                    fontFamily="--first-font"
                    >{props.prod.precio}</Text>

            </CardBody>
            <CardFooter
                mt="-15px"
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center">
                <Button
                    onClick={() => modalCarrito(props.prod)}
                    borderRadius="20px"
                    h="2rem"
                    w="5rem"
                    color="--third-color"
                    bg="--white-color"
                    _hover={{
                        boxShadow:"dark-lg",
                    }}
                    fontFamily="--second-font"
                    fontSize="1rem"
                    >{props.prod.boton}</Button>
                
                <Link
                        textAlign="center"
                        w="100px"
                        fontFamily="--second-font"
                        color="--white-color"
                        fontWeight="bold"
                        mt="10px"
                        _hover={{
                            color:"--first-color"
                        }}
                        onClick={() => caracteristicas(props.prod)}
                        >
                            Ver Detalles</Link>
            </CardFooter>
        </Card>
        </Box>

    )
}

export default TarjetaMobile
