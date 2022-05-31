import {
  ProductContainer,
  ProductHeading,
  WrapProduct,
  ProductCard,
  ProductsImg,
  ProductDetails,
  ProductName,
  ProductDesc,
  ProductPrice,
  ProductButton
} from '../Products/ProductsElements'



const Products = ({heading, data}) => {
  return (
   <>
   <ProductContainer id='pizza'>
       <ProductHeading>{heading}</ProductHeading>
       <WrapProduct >
          {
            data.map((product, index) => {
              return(
                <ProductCard key={index}>
                  <ProductsImg img={product.img} alt={product.alt} />
                 <ProductDetails>
                    <ProductName>{product.name}</ProductName>
                    <ProductDesc>{product.desc}</ProductDesc>
                    <ProductPrice>{product.price}</ProductPrice>
                    <ProductButton>{product.button}</ProductButton>
                 </ProductDetails>
                </ProductCard>              
                )
            }
            )
          }
       </WrapProduct>
   </ProductContainer>
   </>
  )
}

export default Products