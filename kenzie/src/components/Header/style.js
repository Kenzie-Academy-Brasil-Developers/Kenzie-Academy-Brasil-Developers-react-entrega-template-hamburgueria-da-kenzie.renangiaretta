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
        height: 6rem;
        padding: 0rem 1rem 0rem 1.5rem;
        border-radius: 0.5rem;
        border: 0.2rem solid var(--color-grey-20);
        background-color: #FFFFFF;

        @media (max-width: 380px) {
        width: 100%;
        min-width: 20rem;
        margin: 0 auto;
    }
    }
    input {
        width: 80%;
        height: 100%;
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