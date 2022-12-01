import styled from "styled-components";


export const StyledProductCard = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20rem;
    height: 28rem;
    border: 0.2rem solid var(--color-grey-20);
    border-radius: 0.5rem;
    background-color: var(--color-grey-20);
    animation-name: animationeIn;
    animation-duration: 1.5s;

    img {
        width: 12rem;
        height: 12rem;
        background-color: var(--color-grey-20);
        object-fit: cover;
    }
    
    .downHalfContainer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 60%;
        background-color: var(--color-grey-0);
   
    }
    .textsContainer {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 60%;
        margin-top: 1rem;
        margin-left: 1rem;
        gap: 0.2rem;
    }

    h2 {
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.4rem;
    }
    h3 {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: var(--color-grey-50);
    }
    span {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: var(--color-primary);
    }

    @keyframes animationeIn {
        0% {opacity: 0}
        100% {opacity: 1}
    }
    button {
        margin: 0rem 0rem 1rem 1rem;
    }
    button:hover{
        filter: brightness(115%);
    }
`