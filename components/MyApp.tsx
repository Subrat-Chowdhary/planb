// components/MyApp.tsx
import React from 'react';
import { Flex, Text, Button } from '@radix-ui/themes';

const MyApp: React.FC = () => {
    return (
        <Flex direction="column" gap="2" >
            <Text className='text-2xl'>Hello from Radix Themes :)</Text>
            <Button variant='outline' className='w-32'>Let's go</Button>
        </Flex>
    );
};

export default MyApp;
