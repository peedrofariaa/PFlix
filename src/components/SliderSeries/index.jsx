import { CardSerie } from '../CardSerie'
import { Container } from './style'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules';
import React, { useState, useEffect } from "react"

export const SliderSeries = ({ info, title, isTrue }) => {
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 600px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(max-width: 600px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <Container>
            <h2>{title}</h2>
            <Swiper grabCursor spaceBetween={10} slidesPerView={'auto'} freeMode={true} pagination={{ clickable: true }} modules={[FreeMode, Pagination]}>
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardSerie item={item} text={true} isShow={isTrue} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}