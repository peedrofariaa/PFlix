import { Card } from "../Card"
import { Container } from "./style"
import { Swiper, SwiperSlide } from 'swiper/react'


export const Slider = ({ info, title }) => {
    return (
        <Container>
            <h2>{title}</h2>
            <Swiper grabCursor spaceBetween={10} slidesPerView={"auto"}>
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}