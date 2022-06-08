import AdaptiveMain from "../components/adaptive/AdaptiveMain/AdaptiveMain";
import triangle from '../images/triangle.svg'
import hexagon from '../images/hexagon.svg'
import spider from '../images/spider.svg'
import circle from '../images/circle.svg'
import zLogo from '../images/zLogo.svg'
import rhombus from '../images/rhombus.svg'
import doubleRhombus from '../images/doubleRhombus.svg'

export default function MainPage() {

    let partners = [
        triangle,
        hexagon,
        spider,
        circle,
        zLogo,
        rhombus,
        doubleRhombus,
    ]

    const partnersLogos = partners.map(partner => {
        return (
            <div className='cards__logo'>
                <img className='logo__img' src={partner} alt="partnersLogo" />
            </div>
        )
    })

    return (
        <main className="content">
            <AdaptiveMain>
                <section className="content__partners">
                    <div className="partners__title">
                        <h1 className='title'>НАШИ ПАРТНЕРЫ</h1>
                    </div>
                    <div className="partners__cards">
                        {partnersLogos}
                    </div>
                </section>
            </AdaptiveMain>
        </main>
    )
}