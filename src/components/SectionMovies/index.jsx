import {CardMovie} from '../CardMovie'
import { Container, BoxCards } from "./style"

export const SectionMovies = ({ info }) => {
    return (
        <>
            <Container>
                {info.map((item, index) => (
                    <BoxCards key={index}>
                        <CardMovie item={item} text={false} />
                    </BoxCards>
                ))}
            </Container>
        </>
    )
}