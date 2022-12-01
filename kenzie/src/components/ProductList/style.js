import styled from "styled-components";

export const StyledProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-content: center;
    align-items: center;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        margin: 0 auto;
    }

    @media (max-width: 950px) {
        grid-template-columns: 1fr;
        margin: 0 auto;
    }
`