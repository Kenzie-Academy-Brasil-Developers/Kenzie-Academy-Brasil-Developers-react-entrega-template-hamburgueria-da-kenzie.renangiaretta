import styled from "styled-components";

export const StyledCart = styled.div`
    display: flex;
    flex-direction: column;
    width: 36.5rem;
    height: 53rem;
    border: 0.1rem solid var(--color-grey-20);
    border-radius: 0.5rem;

    .cartTitle {
        display: flex;
        align-items: center;
        width: 100%;
        height: 6.5rem;
        background-color: var(--color-primary);
        color: var(--color-grey-0);
        border-radius: 0.5rem 0.5rem 0rem 0rem;
    }
    h2 {
        margin-left: 2rem;
    }
    .cartCardContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 30%;
        background-color: var(--color-grey-0);
        border-radius: 0rem 0rem 0.5rem 0.5rem;
        overflow-y: scroll;
        scroll-behavior: smooth;
        flex-wrap: wrap;

        ::-webkit-scrollbar {
        width: 0.8rem;
        }

        ::-webkit-scrollbar-track {
        background: var(--color-grey-0);
        }

        ::-webkit-scrollbar-thumb {
        background-color: var(--color-grey-20);
        border-radius: 2rem;
        border: 0.3rem solid var(--color-grey-20);
        }

    }
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 1rem;
        gap: 1rem;
    }
`