import React from "react";
import styled from "styled-components";

export const Container = styled.View`
    background-color: ${props => props.theme.onBackGround}

    flex:1;
    /* justify-content: center; */
    /* align-items: center; */
    
    `

export const HeaderArea = styled.View`
    margin-top: 20%;
    margin-left: 3% ;
    /* margin-right: ; */
    `

export const HeaderText = styled.Text`
    font-weight: 700;
    font-size: 38px;
    margin-left: 20px;
`

// export const HeaderText = styled.Text`
//     font-weight: 700;
//     font-size: 38px;
//     margin-left: 20px;
export const LoginIconsArea = styled.View`
    margin-top: 20%;
    margin-left: 10% ;
        /* margin-right: ; */
//  `