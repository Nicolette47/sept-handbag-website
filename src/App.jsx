import './App.css'
import Button from './components/Buttons/Button.jsx';
import handybag from './assets/bag_1.png';
import stylishbag from './assets/bag_2.png';
import simplebag from './assets/bag_3.png';
import trendybag from './assets/bag_4.png';
import Product from './components/Product/Product.jsx';

function App() {

    function textButton(text) {
        return console.log(text);
    }


    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>
                <button type="button" onClick={() => textButton("To the collection")}>To the collection</button>
                <button type="button" onClick={() => textButton("Shop all bags")}>Shop all bags</button>
                <button type="button" onClick={() => textButton("Pre-orders")} disabled={true}>pre-orders</button>
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
                price={400 +',-'}
                />

                <Product
                    isBestSeller={true}
                    imagebag={stylishbag}
                    title='The stylish bag'
                    price={250 +',-'}
                />

                <Product
                    isBestSeller={true}
                    imagebag={simplebag}
                    title='The simple bag'
                    price={300 +',-'}
                />

                <Product
                    isBestSeller={true}
                    imagebag={trendybag}
                    title='The trendy bag'
                    price={150 +',-'}
                />

            </main>
        </>
    )
}

export default App
