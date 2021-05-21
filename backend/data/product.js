const products = [
  {
    name: 'Soularized Sport Shirt',
    image: '/uploads/sport-shirt1.jpg',
    description:
      'A subtle grid camo print pops in neon colors across this long sleeve cotton sport shirt with the perfect amount of modern stretch.',
    brand: 'Classic Fit',
    category: 'men',
    price: 89.99,
    countInStock: 4,
    rating: 4.5,
    numReviews: 5,
    collectionsData: 'Sport Shirt',
    size: ['M', 'L', 'S'],
  },
  {
    name: 'NewSted Sport Shirt',
    image: '/uploads/sport-shirt2.jpg',
    description:
      'An allover botanical block print creates a piece of #WearableArt across this breezy linen blend long sleeve sport shirt. Contrast trim at the inner placket makes for a surprise and delight every time.',
    brand: 'Tailored Fit',
    category: 'men',
    price: 49.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    collectionsData: 'Sport Shirt',
    size: ['M', 'L', 'S'],
  },
  {
    name: 'NewSted Sport Shirt',
    image: '/uploads/sport-shirts.jpg',
    description:
      'An allover botanical block print creates a piece of #WearableArt across this breezy linen blend long sleeve sport shirt. Contrast trim at the inner placket makes for a surprise and delight every time.',
    brand: 'Tailored Fit',
    category: 'men',
    price: 49.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    collectionsData: 'Sport Shirt',
    size: ['M', 'L', 'S'],
  },
  {
    name: 'Andretti Short Sleeve',
    image: '/uploads/short-sleve.jpg',
    description: `This solid paisley jacquard is cut 
    from a cotton stretch blend, featuring tonal 
    trims at the cuffs and yoke. A staple for the 
    season, we made it in multiple colors. 
    Also available as a long sleeve.`,
    brand: 'Classic Fit',
    category: 'men',
    price: 49.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    collectionsData: 'Short Sleeve',
    size: ['L', 'S', 'XL'],
  },
  {
    name: 'INN JET Short Sleeve Knit',
    image: '/uploads/short-sleve2.jpg',
    description: `This solid paisley jacquard is cut 
    from a cotton stretch blend, featuring tonal 
    trims at the cuffs and yoke. A staple for the 
    season, we made it in multiple colors. 
    Also available as a long sleeve.`,
    brand: 'Classic Fit',
    category: 'men',
    price: 49.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 1,
    collectionsData: 'Short Sleeve',
    size: ['L', 'S', 'XL'],
  },
  {
    name: 'Rock Funk Soul Short Sleeve',
    image: '/uploads/short-sleve3.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Tailored Fit',
    category: 'men',
    price: 49.99,
    countInStock: 2,
    rating: 4.0,
    numReviews: 2,
    collectionsData: 'Short Sleeve',
    size: ['L', 'S', 'XL'],
  },
  {
    name: 'Rock Funk Soul Short Sleeve',
    image: '/uploads/polo-1.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Tailored Fit',
    category: 'men',
    price: 49.99,
    countInStock: 7,
    collectionsData: 'Polos',
    size: ['L', 'S', 'XL'],
  },
  {
    name: 'Rock Funk Soul Short Sleeve',
    image: '/uploads/polo-2.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Classic Fit',
    category: 'men',
    price: 49.99,
    countInStock: 7,
    collectionsData: 'Polos',
    size: ['L', 'S', 'XL'],
  },
  {
    name: 'Rock Funk Soul Short Sleeve',
    image: '/uploads/polo-3.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Graham Fit',
    category: 'men',
    price: 49.99,
    countInStock: 7,
    collectionsData: 'Polos',
    size: ['L', 'S', 'XL'],
  },
  {
    name: 'T-Shirts collectionsData',
    image: '/uploads/t-shirt-1.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Classic Fit',
    category: 'men',
    price: 49.99,
    countInStock: 7,
    collectionsData: 'T-Shirts',
    size: ['XL', 'M', 'XL'],
  },
  {
    name: 'T-Shirts collectionsData',
    image: '/uploads/t-shirt-2.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Classic Fit',
    category: 'men',
    price: 49.99,
    countInStock: 4,
    collectionsData: 'T-Shirts',
    size: ['XL', 'M', 'XL'],
  },
  {
    name: 'T-Shirts collectionsData',
    image: '/uploads/t-shirt.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Classic Fit',
    category: 'men',
    price: 49.99,
    countInStock: 4,
    collectionsData: 'T-Shirts',
    size: ['XL', 'M', 'XL'],
  },
  {
    name: 'Dress-Shirts collectionsData',
    image: '/uploads/dress-shirt-1.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Classic Fit',
    category: 'men',
    price: 49.99,
    countInStock: 4,
    collectionsData: 'Dress Shirts',
    size: ['S', 'XL', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Sports-Coats collectionsData',
    image: '/uploads/sport-coats.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Classic Fit',
    category: 'men',
    price: 49.99,
    countInStock: 4,
    collectionsData: 'Sports Coats',
    size: ['S', 'XL', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Dress-Shirts collectionsData',
    image: '/uploads/dress-shirt-3.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Classic Fit',
    category: 'men',
    price: 49.99,
    countInStock: 4,
    collectionsData: 'Dress Shirts',
    size: ['S', 'XL', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Dress-Shirts collectionsData',
    image: '/uploads/dress-shirt-4.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Roberts Fit',
    category: 'men',
    price: 49.99,
    countInStock: 4,
    collectionsData: 'Dress Shirts',
    size: ['S', 'XL', 'XS'],
    rating: 4.7,
    numReviews: 6,
  },
  {
    name: 'Dress-Shirts collectionsData',
    image: '/uploads/dress-shirt.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Roberts Fit',
    category: 'men',
    price: 49.99,
    countInStock: 4,
    collectionsData: 'Dress Shirts',
    size: ['S', 'XL', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Sport Coats collectionsData',
    image: '/uploads/sport-coats-3.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Roberts Fit',
    category: 'men',
    price: 49.99,
    countInStock: 4,
    collectionsData: 'Sports Shirts',
    size: ['S', 'XL', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Sport Coats collectionsData',
    image: '/uploads/sport-coats-2.jpg',
    description: `This solid paisley jacquard is cut 
      from a cotton stretch blend, featuring tonal 
      trims at the cuffs and yoke. A staple for the 
      season, we made it in multiple colors. 
      Also available as a long sleeve.`,
    brand: 'Roberts Fit',
    category: 'men',
    price: 49.99,
    countInStock: 4,
    collectionsData: 'Sports Shirts',
    size: ['S', 'XL', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Ladies Top collectionsData',
    image: '/uploads/top-1.jpg',
    description: `A soft magnolia print in 
    creamy whites with touches of purple and 
    orange blooms across this long sleeve blouse.
     Luxuriate in this modern relaxed fit with a 
     gently tapered waist and long sleeve with French cuff.
    `,
    brand: 'Sallys Fit',
    category: 'women',
    price: 49.99,
    countInStock: 4,
    collectionsData: 'Top',
    size: ['XL', 'S', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Ladies Top collectionsData',
    image: '/uploads/top-2.jpg',
    description: `A soft magnolia print in 
    creamy whites with touches of purple and 
    orange blooms across this long sleeve blouse.
     Luxuriate in this modern relaxed fit with a 
     gently tapered waist and long sleeve with French cuff.
    `,
    brand: 'Sallys Fit',
    category: 'women',
    price: 49.99,
    countInStock: 4,
    collectionsData: 'Top',
    size: ['XL', 'S', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Ladies Bottom collectionsData',
    image: '/uploads/buttom.jpg',
    description: `Fitted with the perfect amount 
    of feminine and flirty flare, this new tropical 
    print skirt begs for sun-kissed moments. 
    `,
    brand: 'Tailored Fit',
    category: 'women',
    price: 49.99,
    countInStock: 6,
    collectionsData: 'Bottom',
    size: ['XL', 'S', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Ladies Bottom collectionsData',
    image: '/uploads/buttom-3.jpg',
    description: `Fitted with the perfect amount of feminine and 
    flirty flare, 
    this new tropical print skirt begs for sun-kissed moments. 
    `,
    brand: 'Tailored Fit',
    category: 'women',
    price: 50.99,
    countInStock: 6,
    collectionsData: 'Bottom',
    size: ['XL', 'S', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Ladies Bottom collectionsData',
    image: '/uploads/buttom.jpg',
    description: `Fitted with the perfect amount of 
    feminine and flirty flare, this new tropical print
     skirt begs for sun-kissed moments.
    `,
    brand: 'Tailored Fit',
    category: 'women',
    price: 50.99,
    countInStock: 6,
    collectionsData: 'Bottom',
    size: ['XL', 'S', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Ladies Bottom collectionsData',
    image: '/uploads/dress-1.jpg',
    description: `Float thru the new season in 
    lightweight watercolor and bird print chiffon.
     A low v-neck, maxi length and ruffle trims add
     romance for a showstopping, sweeping effect.
    `,
    brand: 'Classic Fit',
    category: 'women',
    price: 50.99,
    countInStock: 6,
    collectionsData: 'Dresses',
    size: ['XL', 'S', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Ladies Bottom collectionsData',
    image: '/uploads/dress-2.jpg',
    description: `Float thru the new season in 
    lightweight watercolor and bird print chiffon.
     A low v-neck, maxi length and ruffle trims add
     romance for a showstopping, sweeping effect.
    `,
    brand: 'Classic Fit',
    category: 'women',
    price: 50.99,
    countInStock: 6,
    collectionsData: 'Dresses',
    size: ['XL', 'S', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Ladies Bottom collectionsData',
    image: '/uploads/dress-3.jpg',
    description: `Float thru the new season in 
    lightweight watercolor and bird print chiffon.
     A low v-neck, maxi length and ruffle trims add
     romance for a showstopping, sweeping effect.
    `,
    brand: 'Classic Fit',
    category: 'women',
    price: 50.99,
    countInStock: 6,
    collectionsData: 'Dresses',
    size: ['XL', 'S', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Ladies Bottom collectionsData',
    image: '/uploads/WF19525_MONROE_BLACK_1_1_400x-jacket.jpg',
    description: `Float thru the new season in 
    lightweight watercolor and bird print chiffon.
     A low v-neck, maxi length and ruffle trims add
     romance for a showstopping, sweeping effect.
    `,
    brand: 'Classic Fit',
    category: 'women',
    price: 50.99,
    countInStock: 6,
    collectionsData: 'Jackets',
    size: ['XL', 'S', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Ladies Bottom collectionsData',
    image: '/uploads/MicrosoftTeams-image_2_400x-jacket.jpg',
    description: `Float thru the new season in 
    lightweight watercolor and bird print chiffon.
     A low v-neck, maxi length and ruffle trims add
     romance for a showstopping, sweeping effect.
    `,
    brand: 'Classic Fit',
    category: 'women',
    price: 50.99,
    countInStock: 6,
    collectionsData: 'Jackets',
    size: ['XL', 'S', 'XS'],
    rating: 4.0,
    numReviews: 5,
  },
]

export default products
