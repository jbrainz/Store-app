import Carousel from 'react-elastic-carousel'
import Product from './Product'
import useWindowDimensions from '../util/windowsHeightWidth'

const Slider = ({ products, history, match }) => {
  const { width } = useWindowDimensions()
  return (
    <Carousel
      enableAutoPlay={true}
      pagination={false}
      autoPlaySpeed={4000}
      showArrows={false}
      itemsToShow={width <= 430 ? 1 : 4}
      enableMouseSwipe={false}
      easing="cubic-bezier(.28,.91,.62,.08)"
      tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
      transitionMs={700}
      itemPadding={width <= 430 ? [5, 10] : [5, 30]}
    >
      {products.map((product) => (
        <Product match={match} history={history} key={product._id} product={product} />
      ))}
    </Carousel>
  )
}

export default Slider
