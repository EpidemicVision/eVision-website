import { Box, Center, chakra, useColorModeValue } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'

export const Tool: FunctionComponent = () => {
    return (
        <Box
            position={'relative'}
            height={'1500px'}
            width={'full'}
            overflow={'show'}
            id="tool">
            <Center>
                <chakra.h1
                    py={5}
                    fontSize={48}
                    fontWeight={'bold'}
                    color={useColorModeValue('gray.700', 'gray.50')}>
                    Tool
                </chakra.h1>
            </Center>
            <iframe
                src="http://20.121.209.136:5008"
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="eVision Tool"
            />
        </Box >

    )
}
