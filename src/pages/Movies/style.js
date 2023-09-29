import styled from "styled-components";

export const Container = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    @media screen and (max-width: 600px) {
    margin-top: 15%;
}
`