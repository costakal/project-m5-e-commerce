import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Loading = () => {
    return (
        <Wrapper>
            <Loader
                type="TailSpin"
                color="grey"
                height={100}
                width={100}
                timeout={0} 
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: 200px;
    display: flex;
    justify-content: center;
`;

export default Loading;
