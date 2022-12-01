import styled from "styled-components";

export const StyledCart = styled.div`
    display: flex;
    flex-direction: column;
    width: 365px;
    border: 1px solid var(--color-grey-20);
    border-radius: 5px;

    .cartTitle {
        border-radius: 5px 5px 0px 0px;
        background-color: var(--color-primary);
        width: 100%;
        height: 65px;
        display: flex;
        align-items: center;
        color: var(--color-grey-0);
    }
    h2 {
        margin-left: 2rem;
    }
    .cartCardContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--color-grey-0);
        width: 100%;
        min-height: 30%;
        border-radius: 0px 0px 5px 5px;
    }
    ul {
        width: 100%;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
`