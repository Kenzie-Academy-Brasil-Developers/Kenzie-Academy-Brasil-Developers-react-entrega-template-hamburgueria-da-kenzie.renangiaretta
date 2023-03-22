import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 10rem;
    background-color: var(--color-grey-0);

    img {
        width: 20rem;
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 36.5rem;
        height: 5rem;
        padding: 0rem 1rem 0rem 1.5rem;
        border-radius: 0.5rem;
        margin: 1rem 0rem;
        border: 0.2rem solid var(--color-grey-20);
        background-color: #FFFFFF;

        @media (max-width: 380px) {
        width: 100%;
        min-width: 20rem;
        margin: 0 auto;
    }
    }
    .filter-input {
        width: 80%;
        height: 80%;
        /* background-color: red; */
        border: none;
    }
    button {
        width: 25%;
    }

    @media (max-width: 650px) {
        flex-direction: column;
        gap: 1rem;
    }


`