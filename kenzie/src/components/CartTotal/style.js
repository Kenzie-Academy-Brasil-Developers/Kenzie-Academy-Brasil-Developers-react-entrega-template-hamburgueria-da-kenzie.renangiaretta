import styled from "styled-components";

export const StyledCartTotal = styled.div`
    margin-top: 1rem;
    width: 100%;
    min-height: 100px;
    background-color: var(--color-grey-0);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-top: 2px solid var(--color-grey-20);
    gap: 1rem;
    margin-bottom: 1rem;

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
        line-height: 2.4px;
        color: var(--color-grey-100);
    }
    span {
        font-weight: 800;
        font-size: 2rem;
        line-height: 2.4rem;
        color: var(--color-grey-50);
    }
    button {
        margin-top: 1rem;
        width: 95%;
        height: 60px;
        background-color: var(--color-grey-20);
        color: var(--color-grey-50);
        border: 2px solid var(--color-grey-50);
        border-radius: 8px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 1.9rem;
    }
`