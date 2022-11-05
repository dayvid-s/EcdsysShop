// i decifrate the code, first: need be with short name, without space.
//second: if some image give bug, she just will show up if you reload the app
//thirty: have a lot of images called png, that don't is a trully png.
//TODO: buy with stripe.
export const Products = [
  
  {
    id: 1,
    category: 'product',
    productName: 'MacBook Pro',
    productPrice: '21.779,10',
    description:
      'Criado para todos os tipos de criativos, incluindo desenvolvedores, fotógrafos, cineastas, artistas 3D, produtores musicais e muito mais, o MacBook Pro de 14,2" da Apple com M1 Pro Chip é a estação de trabalho móvel profissional definitiva para o usuário final.O sistema possui o chip Apple M1 Pro 8-Core, que fornece a potência e o desempenho necessários para lidar com seus fluxos de trabalho profissionais.',
    isOff: true,
    offPercentage: 10,
    productImage:  require('../assets/images/mbp14.png'),
    isAvailable: true,
    // productImageList: [
      // require('../assets/images/Mi1.png'),
      // require('../assets/images/Mi2.png'),
      // require('../assets/images/Mi3.png'),
    // ],
  },{
    id: 2,
    category: 'product',
    productName: 'Boat Partypal 50',
    productPrice: '3.190,00',
    description:
      'Mergulhe no som estéreo de 20 W RMS com o poderoso alto-falante Bluetooth Party Pal 50. Defina as vibrações da festa da maneira certa com os LEDs RGB. Mantenha as preocupações afastadas e festeje à beira da piscina com IPX5 resistente a respingos! Get, set, grooving como Party Pal 50 vem com uma reprodução poderosa de 4,5 horas. Acesse o Instant Voice Assistant e aproveite os vários modos de conectividade - USB, AUX, Bluetooth v5.1 e FM.',
    isOff: true,
    offPercentage: 10,
    productImage: require('../assets/images/speaker.png'),
    isAvailable: true,
    isRecomended: true,
    // productImageList: [
      // require('../assets/images/Mi1.png'),
      // require('../assets/images/Mi2.png'),
      // require('../assets/images/Mi3.png'),
    // ],
  },
  {
    id: 2,
    category: 'product',
    productName: 'Fone JBL Tune 710BT',
    productPrice: '320,00',
    rating: 4.5,
    evaluationsTotal : 234,
    description:
    'Mergulhe no som estéreo de 20 W RMS com o poderoso alto-falante Bluetooth Party Pal 50. Defina as vibrações da festa da maneira certa com os LEDs RGB. Mantenha as preocupações afastadas e festeje à beira da piscina com IPX5 resistente a respingos! Get, set, grooving como Party Pal 50 vem com uma reprodução poderosa de 4,5 horas. Acesse o Instant Voice Assistant e aproveite os vários modos de conectividade - USB, AUX, Bluetooth v5.1 e FM.',
    isOff: true,
    offPercentage: 10,
    productImage: {uri:'https://www.jbl.com.br/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw021189f9/1.JBL_TUNE_710BT_Product%20Image_Hero_White.png'},
    isAvailable: true,
    isRecomended: true,
    specifications: ['Branco', 'Preto'],
    productImageList: [
      require('../assets/images/boat1.png'),
      require('../assets/images/boat1.png'),
      require('../assets/images/boat1.png'),
    ],
  },
  {
    id: 20,
    category: 'product',
    productName: 'Notebook Acer Nitro 5',
    productPrice: '4.099,00',
    description:
      'Um trem expresso direto para o centro da ação está chegando. O notebook gamer Acer Aspire Nitro 5 é a nova geração, com uma configuração que não treme para os jogos mais pesados. Embarque agora e prepare-se para a potência máxima.       Processador Intel Core i5 10ª Geração ',
    isOff: true,
    offPercentage: 10,
    productImage: require('../assets/images/notebookAcer05.png'),
    isAvailable: true,
    isRecomended: true,
    specifications: ['Branco', 'Preto']
    // productImageList: [
      // require('../assets/images/Mi1.png'),
      // require('../assets/images/Mi2.png'),
      // require('../assets/images/Mi3.png'),
    // ],
  },  
  {
    id: 4,
    category: 'product',
    productName: 'Playstation 5',
    productPrice: '4.599,00',
    productImage: require('../assets/images/ps5.png'),
    description:
        'Um trem expresso direto para o centro da ação está chegando. O notebook gamer Acer Aspire Nitro 5 é a nova geração, com uma configuração que não treme para os jogos mais pesados. Embarque agora e prepare-se para a potência máxima.Processador Intel Core i5 10ª Geração ',
      isOff: true,
      offPercentage: 10,
      isAvailable: true,
      isRecomended: true,
    
      // productImageList: [
        // require('../assets/images/Mi1.png'),
        // require('../assets/images/Mi2.png'),
        // require('../assets/images/Mi3.png'),
        // ],
      },
      {
        id: 5,
        category: 'product',
      productName: 'Iphone 11',
      productPrice: '2.799,00',
      description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
      isDayOffer: true,
      offPercentage: 10,
        
      productImage: require('../assets/images/iphone11preto.png'),
      // productImage: {uri:'https://assets.stickpng.com/images/5e90a856c7c8f9000434dd97.png'},
      isAvailable: true,
      productImageList: [
        require('../assets/images/Mi1.png'),
        require('../assets/images/Mi2.png'),
        require('../assets/images/Mi3.png'),
      ],
    },
    {
    },
    {
      id: 10,
      category: 'product',
      productName: 'MI Super Bass',
      productPrice: 179,
      description:
        'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
      isOff: true,
      offPercentage: 10,
      productImage: require('../assets/images/Mi3.png'),
      isAvailable: true,
      productImageList: [
        require('../assets/images/Mi1.png'),
        require('../assets/images/Mi2.png'),
        require('../assets/images/Mi3.png'),
      ],
    },
    {
      id: 11,
      category: 'product',
      productName: 'Boat Rockerz 450',
      productPrice: 1499,
      description:
        'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
      isOff: false,
      productImage: require('../assets/images/boat1.png'),
      isAvailable: true,
      productImageList: [
        require('../assets/images/boat1.png'),
        require('../assets/images/boat2.png'),
        require('../assets/images/boat3.png'),
      ],
    },
    {
      id: 12,
      category: 'accessory',
      productName: 'Boat Airdopes 441',
      productPrice: 1999,
      description:
        'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
      isOff: true,
      offPercentage: 18,
      productImage: require('../assets/images/boatairpods1.png'),
      isAvailable: true,
      productImageList: [
        require('../assets/images/boatairpods1.png'),
        require('../assets/images/boatairpods2.png'),
        require('../assets/images/boatairpods3.png'),
      ],
    },
    {
      id: 13,
      category: 'accessory',
      productName: 'boAt Bassheads 242',
      productPrice: 399,
      description:
        'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
      isOff: false,
      productImage: require('../assets/images/boatbassheads1.png'),
      isAvailable: true,
      productImageList: [
        require('../assets/images/boatbassheads1.png'),
        require('../assets/images/boatbassheads2.png'),
        require('../assets/images/boatbassheads3.png'),
      ],
    },
    {
      id: 14,
      category: 'accessory',
      productName: 'boAt Rockerz 255 Pro+',
      productPrice: 1499,
      description:
        'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
      isOff: false,
      productImage: require('../assets/images/boatrockerz1.png'),
      isAvailable: false,
      productImageList: [
        require('../assets/images/boatrockerz1.png'),
        require('../assets/images/boatrockerz2.png'),
        require('../assets/images/boatrockerz3.png'),
      ],
    },
    {
      id: 15,
      category: 'accessory',
      productName: 'Boult Audio AirBass Propods TWS',
      productPrice: 1299,
      description:
        'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
      isOff: false,
      productImage: require('../assets/images/boultairbass1.png'),
      isAvailable: true,
      productImageList: [
        require('../assets/images/boultairbass1.png'),
        require('../assets/images/boultairbass2.png'),
        require('../assets/images/boultairbass3.png'),
      ],
    },
  ];