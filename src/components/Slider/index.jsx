import { Card } from "../Card"
import { Container } from "./style"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode } from 'swiper/modules'

export const Slider = ({ info, title, isTrue }) => {
    return (
        <Container>
            <h2>{title}</h2>
            <Swiper grabCursor spaceBetween={10} slidesPerView={"auto"} freeMode={true} pagination={{ clickable: true }} modules={[FreeMode, Pagination]}>
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card item={item} text={true} isShow={isTrue} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}