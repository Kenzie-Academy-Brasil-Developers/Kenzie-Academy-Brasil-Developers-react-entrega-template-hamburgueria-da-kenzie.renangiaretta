import styled from "styled-components";

export const StyledMain = styled.main`
    width: 80%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 650px) {
        flex-direction: column;
        margin: 0 auto;
        align-items: center;
        gap: 3rem;
    }
`