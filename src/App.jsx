import './App.css'
import Button from './components/Buttons/Button.jsx';
import handybag from './assets/bag_1.png';
import stylishbag from './assets/bag_2.png';
import simplebag from './assets/bag_3.png';
import trendybag from './assets/bag_4.png';
import Product from './components/Product/Product.jsx';
import brand from './assets/brand.png';
import us from './assets/our_story.png';
import Section from "./components/SectionTile/Section.jsx";

function App() {

    function textButton(text) {
        return console.log(text);
    }

    //<button type="button" onClick={() => textButton("To the collection")}>To the collection</button>
    //<button type="button" onClick={() => textButton("Shop all bags")}>Shop all bags</button>
    //<button type="button" onClick={() => textButton("Pre-orders")} disabled={true}>pre-orders</button>

    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>

                <Button
                    type='button'
                    buttontext='To the collection'
                    onClick={() => textButton('To the collection')}
                    ondisabled={false}
                />
                <Button
                    type='button'
                    buttontext='Shop all bags'
                    onClick={() => textButton('Shop all bags')}
                    ondisabled={false}
                />
                <Button
                    type='button'
                    buttontext='pre-orders'
                    onClick={() => textButton('pre-orders')}
                    ondisabled={true}
                />
            </nav>

            <main>

                <Product
                    isBestSeller={true}
                    imagebag={handybag}
                    title='The handy bag'
                    price={400 + ',-'}
                />

                <Product
                    isBestSeller={true}
                    imagebag={stylishbag}
                    title='The stylish bag'
                    price={250 + ',-'}
                />

                <Product
                    isBestSeller={true}
                    imagebag={simplebag}
                    title='The simple bag'
                    price={300 + ',-'}
                />

                <Product
                    isBestSeller={true}
                    imagebag={trendybag}
                    title='The trendy bag'
                    price={150 + ',-'}
                />

            </main>

            <footer>
                <Section>
                    <h2>the brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum itaque iusto? Ad at enim id
                        iure labore laborum nulla officia praesentium, quam quas qui sunt vel voluptas. Laudantium,
                        qui.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi illum nihil rerum temporibus?
                        Consectetur laborum laudantium molestias numquam recusandae rem.</p>
                </Section>
                <Section>
                    <img src={brand} alt="logo bedrijf"/>
                </Section>
                <Section>
                    <img src={us} alt="the 2 designers"/>
                </Section>
                <Section>
                    <h2>our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque distinctio doloribus esse,
                        facere incidunt molestias nam necessitatibus placeat, quaerat quam recusandae repellendus
                        voluptatum? Officiis.</p>
                </Section>
            </footer>
        </>
    )
}

export default App
