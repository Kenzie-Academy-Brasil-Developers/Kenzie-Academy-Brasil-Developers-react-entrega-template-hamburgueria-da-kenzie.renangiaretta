import styled from "styled-components";

export const StyledCartTotal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    min-height: 10rem;
    gap: 1rem;
    border-top: 0.2rem solid var(--color-grey-20);
    background-color: var(--color-grey-0);

    .textsContainer {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 2rem;
    }
    h2 {
        font-weight: 1000;
        font-size: 2rem;
        line-height: 0.24rem;
        color: var(--color-grey-100);
    }
    span {
        font-weight: 800;
        font-size: 2rem;
        line-height: 2.4rem;
        color: var(--color-grey-50);
    }
    button {
        width: 95%;
        height: 6rem;
        margin-top: 1rem;
        border: 0.2rem solid var(--color-grey-50);
        border-radius: 0.8rem;
        background-color: var(--color-grey-20);
        color: var(--color-grey-50);
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 1.9rem;
    }
    button:hover {
        filter: brightness(90%);
    }
`