import styled from "styled-components";

export const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;

    @media (max-width: 650px) {
        gap: 1.5rem;
    }
`