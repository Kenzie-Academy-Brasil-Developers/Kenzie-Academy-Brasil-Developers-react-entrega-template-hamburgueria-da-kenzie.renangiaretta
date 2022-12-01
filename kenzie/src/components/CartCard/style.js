import styled from "styled-components";


export const StyledCartCard = styled.li`
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    width: 90%;
    padding: 0.5rem;
    border: 0.15rem solid var(--color-grey-20);
    border-radius: 0.5rem;
    animation-name: animationeIn;
    animation-duration: 1s;

    img {
        width: 7rem;
    }
    .cardLeftContainer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .textsContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        margin-left: 1rem;
        word-wrap: break-word;
    }
    .cardTitle {
        margin-left: 0;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: var(--color-grey-100);
    }
    .cardCategory {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: var(--color-grey-50);
    }
    button {
        height: 4rem;
        padding: 0rem 2rem 0rem 2rem;
        border-radius: 0.5rem;
        background-color: var(--color-primary);
        color: var(--color-grey-0);
    }
    button:hover {
        filter: brightness(115%);
    }

    @keyframes animationeIn {
        0% {opacity: 0}
        100% {opacity: 1}
    }
    @keyframes animationeOut {
        0% {opacity: 1}
        100% {opacity: 0}
    }

`