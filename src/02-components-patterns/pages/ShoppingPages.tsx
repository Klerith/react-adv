import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"



export const ShoppingPages = () => {

    const productData = {
        id: '1',
        title: 'CoffeMug',
        img: ''
    }


    return (
        <div>
            <h1> Shopping Pages</h1>
            <hr />
            <br />

            <div style={{ display:'flex', flexDirection: 'row', flexWrap: 'wrap'}}>

                <ProductCard product={ productData } >
                    <ProductCard.Image />
                    <ProductCard.Title title={ 'Caffe argentino' } />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={ productData } >
                    <ProductImage img='./coffee-mug.png'/>
                    <ProductTitle title="Hola Mundo"/>
                    <ProductButtons  />
                </ProductCard>
            </div>
        </div>
    )
}
