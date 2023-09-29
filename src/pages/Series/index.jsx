import { Container } from './style'
import { SectionSeries } from '../../components/SectionSeries'
import { useEffect, useState } from 'react'
import { getTopSeries, getPopularSeries } from '../../service/getData'

export const Series = () => {
    const [topSeries, setTopSeries] = useState()
    const [series, setSeries] = useState()

    useEffect(() => {
        async function getSeries() {
            setTopSeries(await getTopSeries())
            setSeries(await getPopularSeries())
        }

        getSeries()

    }, [])

    return (
        <Container>
            {topSeries && (<SectionSeries info={topSeries} />)}
        </Container>
    )
}