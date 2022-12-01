import styled from "styled-components";


export const StyledProductCard = styled.li`
    background-color: var(--color-grey-20);
    width: 200px;
    height: 260px;
    border: 2px solid var(--color-grey-20);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    animation-name: animationeIn;
    animation-duration: 1.5s;

    img {
        width: 120px;
        height: 120px;
        background-color: var(--color-grey-20);
        object-fit: cover;
    }
    
    .downHalfContainer{
        width: 100%;
        height: 60%;
        background-color: var(--color-grey-0);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
   
    }
    .textsContainer {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        gap: 0.2rem;
        margin-left: 1rem;
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

    @keyframes moveToRight {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(300px);
      }
    }

    @keyframes animationeIn {
        0% {opacity: 0}
        100% {opacity: 1}
    }
    button {
        margin: 0rem 0rem 1rem 1rem;
    }
`