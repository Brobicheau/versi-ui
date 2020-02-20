import React from 'react';
import Hello, { pallete, Button } from 'versi-ui';
import styled from '@emotion/styled';
console.log(Hello, Button, pallete);
const AppContainer = styled.div({
    backgroundColor: pallete.primaryColor,
    width: '100%',
    height: '100%'
})


const App = () => {
    return (
        <AppContainer>
            <Button>Hello!</Button>
        </AppContainer>
    ) 
}

export default App;