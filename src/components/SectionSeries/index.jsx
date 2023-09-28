import {CardSerie} from '../CardSerie'
import { Container, BoxCards } from "./style"

export const SectionSeries = ({ info }) => {
    return (
        <>
            <Container>
                {info.map((item, index) => (
                    <BoxCards key={index}>
                        <CardSerie item={item} text={false} />
                    </BoxCards>
                ))}
            </Container>
        </>
    )
}