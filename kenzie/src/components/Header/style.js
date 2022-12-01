import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 10rem;

    img {
        width: 20rem;
    }
    div {
        width: 365px;
        height: 60px;
        border-radius: 0.5rem;
        border: 2px solid var(--color-grey-20);
        padding: 0px 10px 0px 15px;
        background-color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 380px) {
        width: 100%;
        min-width: 200px;
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
    }


`