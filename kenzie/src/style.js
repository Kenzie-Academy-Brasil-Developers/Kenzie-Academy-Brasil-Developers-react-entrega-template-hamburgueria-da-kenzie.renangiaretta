import styled from "styled-components";

export const StyledApp = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 650px) {
        gap: 1.5rem;
    }
`