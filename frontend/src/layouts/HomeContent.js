import './index.css'
import useWindowDimensions from '../util/windowsHeightWidth'

const HomeContent = () => {
  const { width } = useWindowDimensions()

  return (
    <div className=" flex-cont">
      <div className="columns  has-text-weight-semibold s">
        <div className="is-mobile-new">
          <h2 className={width > 400 ? 't' : 'is-size-5'}>
            EXCLUSIVE DESIGNER CLOTHING
          </h2>
          <p className="content-p-tag">
            Robert Graham’s high-end clothing collection includes long and short
            sleeve button-downs, men’s polos and tees, Limited Edition dress
            shirts, women’s dresses, jackets and fashion accessories, designer
            shoes, premium loungewear and outerwear, and bedding and home
            accessories.
          </p>
        </div>

        <div className="is-mobile-new">
          <h2 className={width > 400 ? ' t' : 'is-size-5'}>
            DRESS UP YOUR LUXE LIFESTYLE
          </h2>
          <p className="content-p-tag">
            Make a statement in Robert Graham’s visionary line of men’s fashion
            and luxury women’s clothing. Defined by expert craftsmanship and
            exquisite attention to detail, our leading lifestyle clothing brand
            offers the modern man and woman one-of-a-kind designs that embody
            the elegance and style of American Eclectic.
          </p>
        </div>
        <div className="is-mobile-new">
          <h2 className={width > 400 ? 't' : 'is-size-5'}>
            DRESS UP YOUR LUXE LIFESTYLE
          </h2>
          <p className="content-p-tag">
            Make a statement in Robert Graham’s visionary line of men’s fashion
            and luxury women’s clothing. Defined by expert craftsmanship and
            exquisite attention to detail, our leading lifestyle clothing brand
            offers the modern man and woman one-of-a-kind designs that embody
            the elegance and style of American Eclectic.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeContent
