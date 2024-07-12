

const initialState = {
  flatOffProduct: {imgSrc:'/assets/bikes/bike-desc.png',
  bikeDetails:{
  name:'30% Off',
  price:'$100',
  model:'PEUGEOT - LR01',
  description:"The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
  specification:'good at speed'
}},
  productList: [
    {imgSrc:'/assets/bikes/bike-desc.png',
    bikeDetails:{name:'Road Bike',
    model:'PEUGEOT - LR01', price:'$ 1,999.99',
    description:"The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
    specification:'good at speed'
}
  },
    {imgSrc:'/assets/bikes/helmet.png',
    bikeDetails:{name:'Road Helmet',
    model:'SMITH - Trade', price:'$ 120',
    description:"The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
    specification:'Safer Than Most'

}
  },
    {imgSrc:'/assets/bikes/btech-bike.png', bikeDetails:{name:'Road Helmet',
    model:'SMITH - Trade', price:'$ 120', description:"The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
    specification:'Safer Than Most'
}},
    {imgSrc:'/assets/bikes/robert-bike.png', bikeDetails:{name:'Road Helmet',
    model:'SMITH - Trade', price:'$ 120',  description:"The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
    specification:'Safer Than Most'
}},
  ],
  currentProductValue:{}
};

const ProductListReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return {
        ...state,
      };
    case 'SET_CURRENT_PRODUCT_VALUE':
      return {
        ...state,
        currentProductValue:action.payload
      };
      return {
        ...state,
        user: {},
        errorMessage: "",
        isLoggedIn: false,
        loading: true,
      };
    default:
      return state;
  }
};

export default ProductListReducer;