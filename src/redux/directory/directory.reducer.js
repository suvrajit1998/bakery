const INITIAL_STATE = {
  sections: [
    {
      title: 'Black Magick',
      imageUrl: 'http://pngimg.com/uploads/cake/cake_PNG13140.png',
      id: 1,
      position: 'left',
      Linkurl: 'shop/hats',
      details:
        'Veniam id labore sunt est nostrud amet sint tempor. Proident enim nostrud ullamco dolore et et culpa eu eu magna dolor reprehenderit. Sint non in duis voluptate non ut excepteur deserunt amet aliquip non id nisi. Minim nisi eu laboris voluptate et officia minim ex qui enim.',
      textposition: 'right'
    },
    {
      title: 'Chocolate',
      imageUrl:
        'https://static.wixstatic.com/media/2cd43b_cbb36fd18b9a422a8a8e82e13ed676b8~mv2.png?dn=2cd43b_cbb36fd18b9a422a8a8e82e13ed676b8~mv2.png',
      id: 2,
      position: 'right',
      Linkurl: 'shop/jackets',
      details:
        'Veniam id labore sunt est nostrud amet sint tempor. Proident enim nostrud ullamco dolore et et culpa eu eu magna dolor reprehenderit. Sint non in duis voluptate non ut excepteur deserunt amet aliquip non id nisi. Minim nisi eu laboris voluptate et officia minim ex qui enim.',
      textposition: 'left'
    },
    {
      title: 'Flourless chocolate cake',
      imageUrl: 'https://www.muffinscakes.com/files/catalog/cakes/cake.png',
      id: 3,
      position: 'left',
      Linkurl: 'shop/sneakers',
      details:
        'Veniam id labore sunt est nostrud amet sint tempor. Proident enim nostrud ullamco dolore et et culpa eu eu magna dolor reprehenderit. Sint non in duis voluptate non ut excepteur deserunt amet aliquip non id nisi. Minim nisi eu laboris voluptate et officia minim ex qui enim.',
      textposition: 'right'
    },
    {
      title: 'Chiffon Cake',
      imageUrl:
        'https://static.wixstatic.com/media/2cd43b_ae6998a94c6344f1956e89ea2892b2f4~mv2.png?dn=2cd43b_ae6998a94c6344f1956e89ea2892b2f4~mv2.png',
      position: 'right',
      id: 4,
      Linkurl: 'shop/womens',
      details:
        'Veniam id labore sunt est nostrud amet sint tempor. Proident enim nostrud ullamco dolore et et culpa eu eu magna dolor reprehenderit. Sint non in duis voluptate non ut excepteur deserunt amet aliquip non id nisi. Minim nisi eu laboris voluptate et officia minim ex qui enim.',
      textposition: 'left'
    },
    {
      title: 'Sponge Cake',
      imageUrl:
        'https://www.freepnglogos.com/uploads/cake-png/cake-png-whit-frozen-custard-four-jacksonville-locations-16.png',
      position: 'left',
      id: 5,
      Linkurl: 'shop/mens',
      details:
        'Veniam id labore sunt est nostrud amet sint tempor. Proident enim nostrud ullamco dolore et et culpa eu eu magna dolor reprehenderit. Sint non in duis voluptate non ut excepteur deserunt amet aliquip non id nisi. Minim nisi eu laboris voluptate et officia minim ex qui enim.',
      textposition: 'right'
    }
  ]
}

const directoryreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryreducer
