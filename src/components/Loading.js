import React from 'react';
import styled from 'styled-components';

const Loading = styled.ActivityIndicator`
  top:50%;
  align-self: center;
`;


export default ()=> (<Loading size="large" color="#0000ff" style={{position:'absolute'}}/>)