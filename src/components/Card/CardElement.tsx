import styled from "styled-components";
import { Button } from "@/components/ButtonElement";
export const CardContainer = styled.div`
    min-height: 60vh;
    background-color: ${({ color }) => `var(${color})`};
    padding: 4rem;
    &:first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    &:last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    @media screen and (max-width: 525px) {
        padding: 2rem;
        &:first-child {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom-left-radius: 0px;
        }
        &:last-child {
            border-top-right-radius: 0px;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
        }
    }
`;

export const CardContent = styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const CardTitle = styled.h1`
    font-family: "Big Shoulders Display", cursive;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--very-light-gray);
    margin-top: auto;
`;

export const CardDescription = styled.p`
    font-family: "Lexend Deca", sans-serif;
    font-weight: lighter;
    line-height: 1.5rem;
    color: var(--very-light-gray);
    margin-top: auto;
`;

export const CardIcon = styled.img`
    width: 52px;
`;

export const CardButton = styled(Button)`
    margin-top: auto;
`;
