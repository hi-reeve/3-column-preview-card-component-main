import styled from "styled-components";

export const Button = styled.button`
    font-family: "Lexend Deca", sans-serif;
	width: max-content;
    color: ${({ color }) => `var(${color})`};
    background: var(--very-light-gray);
    padding: .75rem 2rem;
    border: 2px solid var(--very-light-gray);
    border-radius: 9999px;
    cursor: pointer;
    &:hover {
        background: transparent;
        color: var(--very-light-gray);

        transition: all 0.3s ease-in-out;
    }
`;
