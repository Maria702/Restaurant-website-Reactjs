import {
  FeatureContainer,
  FeatureTitle,
  FeatureText,
  FeatureBtn,
  FContainer
} from '../Features/FeaturesElemnts'

const NewFeatures = () => {
  return (
    < >
      <FeatureContainer>
        <FeatureTitle>  Deal Of the Day! </FeatureTitle>
        <FeatureText >
          Buy one get one Free. <br />
          Buy a large pizza, get a medium pizza free!

        </FeatureText>
        <FeatureBtn id='dessert'> Order Now!</FeatureBtn>
      </FeatureContainer>
    </>
  )
}





const Features = () => {
  return (
    < >
      <FContainer>
        <FeatureTitle>  A Burger </FeatureTitle>
        <FeatureText id='fastfood'>
          Without CHEESE  is Like <br />
          a Huge without SQUEEZE
        </FeatureText>
      </FContainer>
    </>
  )
}


export {
  Features,
  NewFeatures
}