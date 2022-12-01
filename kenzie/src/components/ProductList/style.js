import styled from "styled-components";

export const StyledProductList = styled.ul`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        margin: 0 auto;
    }

    @media (max-width: 950px) {
        grid-template-columns: 1fr;
        margin: 0 auto;
    }
`