import React from 'react';
import { Rating } from '@mui/material';

export default function Card (props) {
    const data = props.data;

    const conversionItems = [
      {
        name: "Freddos",
        price: "0.25",
        url: "https://groceries.asda.com/product/small-chocolate-bars-bags/cadbury-dairy-milk-freddo-chocolate-bar/910003106423",
        image: "https://ui.assets-asda.com/dm/asdagroceries/96049945_T1?defaultImage=asdagroceries/noImage&resMode=sharp2&id=fSNRx0&fmt=webp&dpr=off&fit=constrain,1&wid=864&hei=864&qlt=50"
      },
      {
        name: "bottles of Golden Orchard Fabric Softener",
        price: "1.90",
        url: "https://groceries.asda.com/product/fabric-conditioner-softeners/asda-golden-orchard-fabric-softener-33-washes/1000001205292",
        image: "https://ui.assets-asda.com/dm/asdagroceries/5054781764274_T1?defaultImage=asdagroceries/noImage&resMode=sharp2&id=ITkSV3&fmt=webp&dpr=off&fit=constrain,1&wid=864&hei=864"
      },
      {
        name: "litres of Whole Milk",
        price: "1.45",
        url: "https://groceries.asda.com/product/whole-milk/asda-whole-milk/20502",
        image: "https://ui.assets-asda.com/dm/asdagroceries/20332167_T1?defaultImage=asdagroceries/noImage&resMode=sharp2&id=lLbSd3&fmt=webp&dpr=off&fit=constrain,1&wid=864&hei=864&qlt=50"
      },
      {
        name: "cans of Chopped Tomatoes",
        price: "1",
        url: "https://groceries.asda.com/product/tinned-tomatoes/napolina-chopped-tomatoes-in-a-rich-tomato-juice/19537",
        image: "https://ui.assets-asda.com/dm/asdagroceries/5010061001613_T1?defaultImage=asdagroceries/noImage&resMode=sharp2&id=y0ISd0&fmt=webp&dpr=off&fit=constrain,1&wid=864&hei=864&qlt=50"
      },
      {
        name: "bottles of Heinz Tomato Ketchup",
        price: "3.40",
        url: "https://groceries.asda.com/product/tomato-ketchup/heinz-tomato-ketchup/47159256",
        image: "https://ui.assets-asda.com/dm/asdagroceries/0000050457243_T1?defaultImage=asdagroceries/noImage&resMode=sharp2&id=YtES50&fmt=webp&dpr=off&fit=constrain,1&wid=564&hei=564&qlt=50"
      },
      {
        name: "packs of Warburtons Crumpets",
        price: "0.9",
        url: "https://groceries.asda.com/product/crumpets/warburtons-crumpets/36479",
        image: "https://ui.assets-asda.com/dm/asdagroceries/5010044000701_T1?defaultImage=asdagroceries/noImage&resMode=sharp2&id=vgeST0&fmt=webp&dpr=off&fit=constrain,1&wid=564&hei=564&qlt=50"
      },
    ]

    const getPrice = (priceData) => {
      let symbol = "?";
      switch (priceData.currencyCode) {
        case "GBP": {
          symbol = "£";
          break;
        }

        default: {
          symbol = "?";
          break;
        }
      }

      let price = priceData.priceIncTax;
      let originalDisplay = <></>;

      if (priceData.isOnPromotion) {
        originalDisplay = <p
          className='card__cost--original'
          >
            {symbol}{priceData.wasPriceIncTax.toFixed(2)}
          </p>
      }

      let monthlyDisplay = <></>;

      if (priceData.monthlyFinanceEstimate) {
        const item = conversionItems[Math.floor(Math.random()*conversionItems.length)];
        const itemAmount = Math.round((price / item.price) * 100) / 100;

        monthlyDisplay = <div className='card__monthly'>
          <img height='50' width='50' src={item.image} alt={item.name}/>
          <p>Finance from just {itemAmount} <a href={item.url}>{item.name}</a> / month!</p>
        </div>
      }
      
      return <div className='card__price'>
        <div className='card__cost'>
          <p
          className='card__cost--current'
          >
            {symbol}{price.toFixed(2)}
          </p>
          {originalDisplay}
        </div>
        {monthlyDisplay}
      </div>
    };

    const getStock = (stockData) => {
      let result = <></>;

      if (stockData.status === "G") {
        result = <p className='card__stock--yes'>In Stock</p>
      } else {
        result = <p className='card__stock--no'>Not Available</p>
      }

      return result;
    };

    const getReviews = (averageRating, reviewsCount) => {
      let result = <></>;

      if (averageRating) {
        result = <div className='card__reviews'>
          <Rating 
          readOnly={true}
          value={averageRating}
          precision={0.1}
          />
          <p>{reviewsCount}</p>
        </div>
      }

      return result;
    };

    return <div className='card'>
        <div className='card__top'>
          <a 
          className='card__image' 
          href={"https://www.victorianplumbing.co.uk" + data.slug}
          target='_blank'
          rel="noreferrer"
          >
            <img 
            src={data.image.url} 
            alt={data.image.attributes.imageAltText}
            />
          </a>
        </div>
        <div className='card__bottom'>
          <div className='card__title'>
            <div className='card__brand-wrapper'>
              <a 
              className='card__brand' 
              href={"https://www.victorianplumbing.co.uk" + data.brand.slug}
              target='_blank'
              rel="noreferrer"
              >
                <img 
                className='card__brand-image' 
                src={data.brand.brandImage.url} 
                alt={data.brand.brandImage.attributes.imageAltText}
                />
              </a>
            </div>
            <a 
            className='card__name'
            href={"https://www.victorianplumbing.co.uk" + data.slug}
            target='_blank'
            rel="noreferrer"
            >
              {data.productName}
            </a>
          </div>
          <div className='card__details'>
            {getPrice(data.price)}
            {getReviews(data.averageRating, data.reviewsCount)}
            {getStock(data.stockStatus)}
          </div>
        </div>
      </div>
}