import fondoAudio from "./img/fondo-audio.png"
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import ListaTarjetas from "./ListaTarjetas";


const SeccionAudio = ({ producto }) => {

    return (
        <Box
            display="flex"
            flexDir="column"
            flexWrap="wrap">
            
            <Box
                backgroundImage={fondoAudio}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                w="100%"
                h={["40vh", "50vh", "100vh"]}
                >
                    <Flex
                        flexDirection="column"
                        justify="center"
                        align="center"
                        rowGap={["65px" ,"70px", "130px"]}
                        >
                            <Heading
                                as="h2"
                                color="--backg-color"
                                fontFamily='--first-font'
                                fontSize={["3rem", "3.5rem", "6rem"]}
                                mt={["40px", "70px", "150px"]}
                                letterSpacing="8px"
                                textAlign="center"
                                textShadow="1px 1px 2px #000000"
                                    >Audio</Heading>
                            <Text
                                color="--backg-color"
                                fontFamily='--first-font'
                                fontWeight="semibold"
                                fontSize={["1.4rem", "1.7rem", "3rem"]}
                                letterSpacing="4px"
                                textAlign="center"
                                    >Tú pulsas el botón, nosotros hacemos el resto</Text>
                    </Flex>
            </Box>
            <Flex
                w="100%"
                flexDir="column"
                justify="center"
                align="center"
                >
                    <Heading
                        mt="50px"
                        color="--backg-color"
                        textShadow="1px 1px 2px #000000"
                        >¡Elegi el tuyo!</Heading>
                    <ListaTarjetas producto={producto}/>
            </Flex>
        </Box>
    )
}

export default SeccionAudio
