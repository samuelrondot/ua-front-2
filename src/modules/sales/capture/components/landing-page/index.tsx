// React
import { FC } from "react"
// Common Components
import { Main } from "common/components/main"
// Common Components
import { Footer } from "common/components/footer"
import { Navbar } from "common/components/nabar"
// Module Components
import { CallToActions } from "../call-to-actions"
import { Testimonials } from "../testimonials"
import { Features2 } from "../features-2"
import { Features } from "../features"
import { Brands } from "../brands"
import { Offer } from "../offer"
import { Hero } from "../hero"

type OwnProps = {
    style?: object,
}

export const LandingPage: FC<OwnProps> = (props) => {

    return (
        <>
            <Navbar />
            <Main>
                <Hero />
                <Brands />
                <Features />
                <Offer />
                <Features2 />
                <Testimonials />
                <CallToActions />
            </Main >
            <Footer />
        </>
    )
}