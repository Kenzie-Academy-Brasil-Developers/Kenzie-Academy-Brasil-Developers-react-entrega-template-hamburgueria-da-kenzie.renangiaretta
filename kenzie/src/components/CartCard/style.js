import styled from "styled-components";


export const StyledCartCard = styled.li`
    width: 90%;
    border: 1.5px solid var(--color-grey-20);
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    animation-name: animationeIn;
    animation-duration: 1s;

    img {
        width: 70px;
    }
    .cardLeftContainer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .textsContainer {
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
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
        background-color: var(--color-primary);
        color: var(--color-grey-0);
        height: 4rem;
        padding: 0px 20px 0px 20px;
        border-radius: 0.5rem;
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