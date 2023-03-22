import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    justify-content: space-between;
    width: 80%;
    @media (max-width: 650px) {
        align-items: center;
        flex-direction: column-reverse;
        margin: 0 auto;
        gap: 3rem;
    }
`