import { getImages } from "../../utils/getImages";
import { Title, Container } from "./style";

export const Credits = ({ credits }) => {
    return (
        <>
            <Title>Credits</Title>
            {credits && (
                <Container>
                    {credits.slice(0,5).map((artist) =>(
                        <div key={artist.id}>
                            <img src={getImages(artist.profile_path)} alt="artist"/>
                            <p>{artist.original_name}</p>
                        </div>
                    ))}
                </Container>
            )}
        </>
    )
}