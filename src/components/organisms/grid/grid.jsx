import React, { useState, useEffect } from 'react';
import Card from '../../molecules/card/card';
import { CircularProgress, Select, MenuItem, ListSubheader, Input} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Grid (props) {
  const [data, setData] = useState(null);
  const [sort, setSort] = useState(1);
  const [search, setSearch] = useState("toilets");

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        query: search ? search : "toilets", 
        pageNumber: 0,
        size: 0,
        additionalPages: 0,
        sort: sort
      })
    };

    fetch(
      'https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI',
      requestOptions
      )
      .then(response => response.json())
      .then(json => setData(json.products))
      .catch(error => console.error(error));
  }, [sort, search]);

  return <div className='grid'>
    <div className='grid__toolbar'>
      <Input
      className='grid__search'
      type='text'
      startAdornment={<SearchIcon />}
      onChange={(event) => setSearch(event.target.value)}
      color="success"
      placeholder="Only accepts 'baths' or 'toilets' :("
      />
      <Select 
      className='grid__sort'
      label="Sort by"
      onChange={(event) => setSort(event.target.value)}
      defaultValue={1}
      >
        <MenuItem value={1}>Recommended</MenuItem>
        <ListSubheader>Price</ListSubheader>
        <MenuItem value={2}>Low to High</MenuItem>
        <MenuItem value={3}>High to Low</MenuItem>
        <MenuItem value={4}>Largest Discount</MenuItem>
      </Select>

    </div>
    <div className='grid__items'>
      {data ? data.map((product) => {
        return <div className='grid__card-wrapper'>
          <Card data={product} />
        </div>
      }
      ) : <CircularProgress color="success" />}
    </div>
  </div>
}

//   const staticData = [
//     {
//         "id": "86b6ed51-7585-4955-8cb2-4a63d451fba1-9243F:en-GB",
//         "legacyId": "20476",
//         "legacyVariantId": "20476",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "METCC",
//         "productName": "Metro Rimless Close Coupled Modern Toilet + Soft Close Seat",
//         "slug": "/metro-modern-close-coupled-toilet-with-soft-close-seat",
//         "averageRating": null,
//         "reviewsCount": 0,
//         "questionsCount": 0,
//         "image": {
//             "externalId": "a7631f82-cf5c-479d-aa29-fb869991fb39-924D7",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/metro-modern-close-coupled-toilet-with-soft-close-seat/listingimages/metcc_med.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Metro Rimless Close Coupled Modern Toilet + Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "R",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 189.95,
//             "priceExcTax": 158.29,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": true,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "cceb92cf-6e35-4c4e-8105-0d8f354b2bac-3C26:en-GB",
//             "slug": "/brands/victorian-plumbing",
//             "name": "Victorian Plumbing",
//             "brandImage": {
//                 "externalId": "163e2b74-191c-4035-b105-399f822e61cd-3C25",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/victorian-plumbing/logoimages/vplogon2.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 22.383625
//     },
//     {
//         "id": "9df97b5e-4fef-4e7e-92aa-731c3d354891-858E1:en-GB",
//         "legacyId": "20545",
//         "legacyVariantId": "20545",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "ABTW",
//         "productName": "Alaska Back to Wall Toilet Pan + Soft Close Seat",
//         "slug": "/alaska-back-to-wall-toilet-pan-inc-soft-close-seat",
//         "averageRating": 4.9,
//         "reviewsCount": 15,
//         "questionsCount": 8,
//         "image": {
//             "externalId": "32d1b548-9d62-42a7-a941-ab3c9c62ed98-8594E",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/alaska-back-to-wall-toilet-pan-inc-soft-close-seat/listingimages/lialaskabacktowalltoiletpanincsoftcloseseatp.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Alaska Back to Wall Toilet Pan inc Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 129.9500,
//             "priceExcTax": 108.2900,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": true,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "0e9689bc-f485-4971-bbf4-9e77d4e44944-2980:en-GB",
//             "slug": "/toilets/back-to-wall-toilets",
//             "name": "Back To Wall Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "5c690c91-ae3d-459c-9f60-a80447f63c80-3C69:en-GB",
//             "slug": "/brands/alaska",
//             "name": "Alaska",
//             "brandImage": {
//                 "externalId": "c99a0bf9-e138-4af5-9f71-e4bec8e19bcd-3C68",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/alaska/logoimages/alaskan.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 19.933304
//     },
//     {
//         "id": "8e1bf874-aca8-4413-9c7c-6f5df24640dc-49C02:en-GB",
//         "legacyId": "33916",
//         "legacyVariantId": "33916",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "TRRWC",
//         "productName": "Toreno Round Rimless Close Coupled Toilet + Soft Close Seat",
//         "slug": "/turin-round-rimless-close-coupled-toilet-soft-close-seat",
//         "averageRating": null,
//         "reviewsCount": 0,
//         "questionsCount": 3,
//         "image": {
//             "externalId": "452467c6-8d8e-44ea-8502-b8ddaed5f4ba-49C36",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/turin-round-rimless-close-coupled-toilet-soft-close-seat/listingimages/trrwc_med.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Turin Round Rimless Close Coupled Toilet + Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 219.9500,
//             "priceExcTax": 183.2900,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "94b28d12-f516-469f-943b-dd00e527c053-3BC7:en-GB",
//             "slug": "/brands/turin",
//             "name": "Toreno",
//             "brandImage": {
//                 "externalId": "14ed1670-ef94-44b7-86f2-51d5ee1bda51-3BC6",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/turin/logoimages/toreno_logo.png",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 19.086092
//     },
//     {
//         "id": "facb2b8a-4ea7-4da6-8a0c-61e90d444472-4346D:en-GB",
//         "legacyId": "31618",
//         "legacyVariantId": "31618",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "SE2IN1",
//         "productName": "Seattle Combined Two-In-One Wash Basin + Toilet",
//         "slug": "/seattle-combined-two-in-one-wash-basin-toilet",
//         "averageRating": 4.6,
//         "reviewsCount": 7,
//         "questionsCount": 33,
//         "image": {
//             "externalId": "d31d9be6-1472-41cf-b0f3-93569de2386e-434A8",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/seattle-combined-two-in-one-wash-basin-toilet/listingimages/lise2in1_np.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Seattle Combined Two-In-One Wash Basin + Toilet Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 269.95,
//             "priceExcTax": 224.96,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": 10.12
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "cceb92cf-6e35-4c4e-8105-0d8f354b2bac-3C26:en-GB",
//             "slug": "/brands/victorian-plumbing",
//             "name": "Victorian Plumbing",
//             "brandImage": {
//                 "externalId": "163e2b74-191c-4035-b105-399f822e61cd-3C25",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/victorian-plumbing/logoimages/vplogon2.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 18.776669
//     },
//     {
//         "id": "16673e84-c5a1-4d20-936a-6cd4c93f1447-6C9EA:en-GB",
//         "legacyId": "31047",
//         "legacyVariantId": "31047",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "GR-5IN1-AR",
//         "productName": "Grohe Solido Euro / Arena Complete WC 5 in 1 Pack + FREE TOILET ROLL HOLDER",
//         "slug": "/grohe-solido-euro-arena-complete-wc-5-in-1-pack-39535000",
//         "averageRating": 4.8,
//         "reviewsCount": 4,
//         "questionsCount": 11,
//         "image": {
//             "externalId": "2be4d161-3723-4965-bbb2-91797a5187ed-6CA4C",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/grohe-solido-euro-arena-complete-wc-5-in-1-pack-39535000/listingimages/gr5in1ar_m1.png",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Grohe Solido Euro / Arena Complete WC 5 in 1 Pack + FREE TOILET ROLL HOLDER Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "R",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 499.95,
//             "priceExcTax": 416.63,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": 18.74
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "53fa6be0-c364-48e1-bc82-735caa71b9ca-3A30:en-GB",
//             "slug": "/brands/grohe",
//             "name": "Grohe",
//             "brandImage": {
//                 "externalId": "ddbcc14b-5d5c-46e8-a785-a1a55ed16fbf-3A2F",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/grohe/logoimages/grohe_logo1.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 18.76521
//     },
//     {
//         "id": "a97f520f-922d-4a98-8b1b-4d88e1a29bcb-8FD61:en-GB",
//         "legacyId": "19869",
//         "legacyVariantId": "10829",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "KES-CC-WHT",
//         "productName": "Keswick Traditional Close Coupled Toilet + Soft Close Seat",
//         "slug": "/keswick-traditional-close-coupled-toilet-with-soft-close-seat",
//         "averageRating": 4.7,
//         "reviewsCount": 15,
//         "questionsCount": 0,
//         "image": {
//             "externalId": "fe469690-4aaf-4206-916f-173fd01c6cfa-8FDEF",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/keswick-traditional-close-coupled-toilet-with-soft-close-seat/listingimages/likeswicktraditionalclosecoupledtoiletwithsoftcloseseatprod.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Keswick Traditional Close Coupled Toilet with Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 209.9500,
//             "priceExcTax": 174.9600,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": true,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "variationListingLabel": "More Colours",
//             "isNew": false,
//             "hasMoreOptions": true
//         },
//         "defaultCategory": {
//             "externalId": "a5222eb0-152c-4d05-ab5f-765e70801d9e-2976:en-GB",
//             "slug": "/toilets/close-coupled-toilet",
//             "name": "Close Coupled Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "53b14d25-ccb5-4d36-8dcf-415d9e047b2c-3DB7:en-GB",
//             "slug": "/brands/keswick",
//             "name": "Keswick",
//             "brandImage": {
//                 "externalId": "dc0ea946-7492-441e-ac02-52e06b88de23-3DB6",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/keswick/logoimages/keswick_logo_.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 18.698048
//     },
//     {
//         "id": "51712356-42fb-4815-b66f-c40a87cfef0c-9073D:en-GB",
//         "legacyId": "31437",
//         "legacyVariantId": "31437",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "BAUCCWC1",
//         "productName": "Grohe Bau Rimless Close Coupled Toilet with Soft Close Seat (Bottom Inlet)",
//         "slug": "/grohe-bau-rimless-close-coupled-toilet-with-soft-close-seat",
//         "averageRating": null,
//         "reviewsCount": 0,
//         "questionsCount": 0,
//         "image": {
//             "externalId": "4637f0aa-45d2-4553-bb2c-ada6c8cd133f-90785",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/grohe-bau-rimless-close-coupled-toilet-with-soft-close-seat/listingimages/bauccwc1_m.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Grohe Bau Rimless Close Coupled Toilet with Soft Close Seat (Bottom Inlet) Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "R",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 299.95,
//             "priceExcTax": 249.96,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": 11.24
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "53fa6be0-c364-48e1-bc82-735caa71b9ca-3A30:en-GB",
//             "slug": "/brands/grohe",
//             "name": "Grohe",
//             "brandImage": {
//                 "externalId": "ddbcc14b-5d5c-46e8-a785-a1a55ed16fbf-3A2F",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/grohe/logoimages/grohe_logo1.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 18.680725
//     },
//     {
//         "id": "aab8e4fa-b195-4990-b4b5-871102416cb8-29F0E:en-GB",
//         "legacyId": "21731",
//         "legacyVariantId": "21731",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "OR600WC",
//         "productName": "Orion Modern Short Projection Toilet + Soft Close Seat",
//         "slug": "/orion-modern-short-projection-toilet-inc-soft-close-seat",
//         "averageRating": 5,
//         "reviewsCount": 5,
//         "questionsCount": 6,
//         "image": {
//             "externalId": "cf67af53-5c61-4c75-ad65-ff9c6e55b25b-29F47",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/orion-modern-short-projection-toilet-inc-soft-close-seat/listingimages/liorionmodernshortprojectiontoiletnp.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Orion Modern Short Projection Toilet + Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "E",
//             "eta": "2023-02-06T00:00:00Z",
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 199.9500,
//             "priceExcTax": 166.6300,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": true,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "cceb92cf-6e35-4c4e-8105-0d8f354b2bac-3C26:en-GB",
//             "slug": "/brands/victorian-plumbing",
//             "name": "Victorian Plumbing",
//             "brandImage": {
//                 "externalId": "163e2b74-191c-4035-b105-399f822e61cd-3C25",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/victorian-plumbing/logoimages/vplogon2.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 18.347569
//     },
//     {
//         "id": "0ef799bb-bcc0-4652-aded-9a032db279e8-878C8:en-GB",
//         "legacyId": "41123",
//         "legacyVariantId": "41123",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "CUBO-BTW",
//         "productName": "Cubo Back to Wall Pan with Soft Close Seat",
//         "slug": "/cubo-back-to-wall-pan-with-soft-close-seat",
//         "averageRating": null,
//         "reviewsCount": 0,
//         "questionsCount": 0,
//         "image": {
//             "externalId": "a8d51114-2478-4f2a-ac5d-4e99f2e365fe-878DD",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/cubo-back-to-wall-pan-with-soft-close-seat/listingimages/cubobtw_m.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Cubo Back to Wall Pan with Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "E",
//             "eta": "2023-02-06T00:00:00Z",
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 119.95,
//             "priceExcTax": 99.96,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "0e9689bc-f485-4971-bbf4-9e77d4e44944-2980:en-GB",
//             "slug": "/toilets/back-to-wall-toilets",
//             "name": "Back To Wall Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "cceb92cf-6e35-4c4e-8105-0d8f354b2bac-3C26:en-GB",
//             "slug": "/brands/victorian-plumbing",
//             "name": "Victorian Plumbing",
//             "brandImage": {
//                 "externalId": "163e2b74-191c-4035-b105-399f822e61cd-3C25",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/victorian-plumbing/logoimages/vplogon2.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 17.973965
//     },
//     {
//         "id": "013794fa-1795-4d1e-8345-0a913b059bca-49C3C:en-GB",
//         "legacyId": "33920",
//         "legacyVariantId": "33920",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "CRWC",
//         "productName": "Cove Rimless Close Coupled Toilet + Soft Close Seat",
//         "slug": "/sofia-rimless-close-coupled-toilet-soft-close-seat",
//         "averageRating": 5,
//         "reviewsCount": 2,
//         "questionsCount": 6,
//         "image": {
//             "externalId": "07907f22-df6e-48cc-9202-16f76dad6518-49C68",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/sofia-rimless-close-coupled-toilet-soft-close-seat/listingimages/crwcnm.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Cove Rimless Close Coupled Toilet + Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 189.9500,
//             "priceExcTax": 158.2900,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "1db0da96-6885-4c70-a0f9-248d7e16deca-39EE:en-GB",
//             "slug": "/brands/cove",
//             "name": "Cove",
//             "brandImage": {
//                 "externalId": "a8e9b9de-6ae1-47eb-9c63-f03f00422fb4-39ED",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/cove/logoimages/cove_logo_.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 17.972054
//     },
//     {
//         "id": "ae3365a8-419d-42b8-8f82-1cd39648330a-8715C:en-GB",
//         "legacyId": "6323",
//         "legacyVariantId": "6323",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "BTWPC1",
//         "productName": "Back To Wall Toilet with Soft Close Seat + Concealed Cistern",
//         "slug": "/back-to-wall-toilet-pan-d-shape-soft-close-seat-with-concealed-cistern",
//         "averageRating": 4.8,
//         "reviewsCount": 60,
//         "questionsCount": 20,
//         "image": {
//             "externalId": "e5d4b48c-c304-43ff-baba-0b16a7a040f6-871CE",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/back-to-wall-toilet-pan-d-shape-soft-close-seat-with-concealed-cistern/listingimages/btwpc1_n_m.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Back To Wall Toilet with Soft Close Seat + Concealed Cistern Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 159.95,
//             "priceExcTax": 133.29,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "0e9689bc-f485-4971-bbf4-9e77d4e44944-2980:en-GB",
//             "slug": "/toilets/back-to-wall-toilets",
//             "name": "Back To Wall Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "cceb92cf-6e35-4c4e-8105-0d8f354b2bac-3C26:en-GB",
//             "slug": "/brands/victorian-plumbing",
//             "name": "Victorian Plumbing",
//             "brandImage": {
//                 "externalId": "163e2b74-191c-4035-b105-399f822e61cd-3C25",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/victorian-plumbing/logoimages/vplogon2.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 17.88869
//     },
//     {
//         "id": "790413a7-31e1-4144-976a-ebe85c4bad69-64B77:en-GB",
//         "legacyId": "44329",
//         "legacyVariantId": "44329",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "VBSBCCOB",
//         "productName": "Villeroy and Boch Subway Open Back Close Coupled Toilet + Soft Close Seat",
//         "slug": "/villeroy-and-boch-subway-2-0-open-back-close-coupled-toilet-soft-close-seat",
//         "averageRating": null,
//         "reviewsCount": 0,
//         "questionsCount": 0,
//         "image": {
//             "externalId": "b273b37a-4d91-492a-89da-1e529f8e5c53-64B8E",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/villeroy-and-boch-subway-2-0-open-back-close-coupled-toilet-soft-close-seat/listingimages/vbsbccob_m.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Villeroy and Boch Subway 2.0 Open Back Close Coupled Toilet + Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 699.95,
//             "priceExcTax": 583.29,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": 26.24
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "506bd850-d0fa-4ba2-b964-b3bfbd3622f5-3E84:en-GB",
//             "slug": "/brands/villeroy-and-boch",
//             "name": "Villeroy & Boch",
//             "brandImage": {
//                 "externalId": "794b032a-06c0-454d-9f6d-be2ab9d81c2e-3E83",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/villeroy-and-boch/logoimages/villeroybochlogo.png",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 17.693703
//     },
//     {
//         "id": "04379916-a42c-4bce-8676-b3566bfe3878-49C04:en-GB",
//         "legacyId": "33917",
//         "legacyVariantId": "33917",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "TSRWC",
//         "productName": "Toreno Square Rimless Close Coupled Toilet + Soft Close Seat",
//         "slug": "/turin-square-rimless-close-coupled-toilet-soft-close-seat",
//         "averageRating": 5,
//         "reviewsCount": 1,
//         "questionsCount": 5,
//         "image": {
//             "externalId": "028ecaff-b292-422c-b502-b2109690feee-49C3D",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/turin-square-rimless-close-coupled-toilet-soft-close-seat/listingimages/tsrwc_med1.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Turin Square Rimless Close Coupled Toilet + Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 229.9500,
//             "priceExcTax": 191.6300,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "94b28d12-f516-469f-943b-dd00e527c053-3BC7:en-GB",
//             "slug": "/brands/turin",
//             "name": "Toreno",
//             "brandImage": {
//                 "externalId": "14ed1670-ef94-44b7-86f2-51d5ee1bda51-3BC6",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/turin/logoimages/toreno_logo.png",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 17.431345
//     },
//     {
//         "id": "5ea2991b-89cf-4a08-86e7-e6318edf3dc1-8714F:en-GB",
//         "legacyId": "4144",
//         "legacyVariantId": "4144",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "BTWPC2",
//         "productName": "Ceramic BTW Toilet Pan with Soft-Close Seat + Dual Flush Concealed Cistern",
//         "slug": "/ultra-standard-ceramic-toilet-pan-with-soft-close-seat-dual-flush-concealed-cistern",
//         "averageRating": 4.9,
//         "reviewsCount": 13,
//         "questionsCount": 3,
//         "image": {
//             "externalId": "50f2b1c4-8a7a-4df6-a5ec-b945482fc4d6-871B9",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/ultra-standard-ceramic-toilet-pan-with-soft-close-seat-dual-flush-concealed-cistern/listingimages/btwpc2nm.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Ceramic BTW Toilet Pan with Soft-Close Seat + Dual Flush Concealed Cistern Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 139.9500,
//             "priceExcTax": 116.6300,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "0e9689bc-f485-4971-bbf4-9e77d4e44944-2980:en-GB",
//             "slug": "/toilets/back-to-wall-toilets",
//             "name": "Back To Wall Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "291656aa-d63f-4a0a-856a-b9267a186730-3AFD:en-GB",
//             "slug": "/brands/premier",
//             "name": "Nuie",
//             "brandImage": {
//                 "externalId": "5975ceef-90cb-4c25-9941-2eed0ef0f521-3AFC",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/premier/logoimages/nuie_logo.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 17.376389
//     },
//     {
//         "id": "062e1ccb-3501-45cd-ab24-cd1531e52b53-4B54D:en-GB",
//         "legacyId": "34560",
//         "legacyVariantId": "34560",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "AZWNPF",
//         "productName": "Dual Flush Concealed WC Cistern with Wall Hung Frame + Arezzo Toilet",
//         "slug": "/dual-flush-concealed-wc-cistern-with-wall-hung-frame-arezzo-toilet",
//         "averageRating": null,
//         "reviewsCount": 0,
//         "questionsCount": 15,
//         "image": {
//             "externalId": "8bd409f6-c5eb-48bd-89b0-08eb1bff89ec-4B567",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/dual-flush-concealed-wc-cistern-with-wall-hung-frame-arezzo-toilet/listingimages/azwnpf_nm.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Dual Flush Concealed WC Cistern with Wall Hung Frame + Arezzo Toilet Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 339.9500,
//             "priceExcTax": 283.2900,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": 12.74
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "22d7a919-37a0-4476-94ac-5445a7171b5c-3EAE:en-GB",
//             "slug": "/brands/arezzo",
//             "name": "Arezzo",
//             "brandImage": {
//                 "externalId": "c6837605-ecbc-4e08-8bfd-10532033d354-3EAD",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/arezzo/logoimages/arezzo_logo_.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 17.351547
//     },
//     {
//         "id": "fe969ef1-6a77-4069-98b9-06b64761094e-4E19E:en-GB",
//         "legacyId": "35545",
//         "legacyVariantId": "35545",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "RSTWHPAN-XTY005",
//         "productName": "RAK Resort Wall Hung Rimless Pan incl. Dual Flush Concealed WC Cistern with Frame",
//         "slug": "/rak-resort-wall-hung-rimless-pan-inc-dual-flush-concealed-wc-cistern-with-frame",
//         "averageRating": null,
//         "reviewsCount": 0,
//         "questionsCount": 7,
//         "image": {
//             "externalId": "c66b7dc5-cdad-4017-8346-aad10f813d9f-4E1BA",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/rak-resort-wall-hung-rimless-pan-inc-dual-flush-concealed-wc-cistern-with-frame/listingimages/rstwhpanxty005_m.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "RAK Resort Wall Hung Rimless Pan Inc. Dual Flush Concealed WC Cistern with Frame Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 349.9500,
//             "priceExcTax": 291.6300,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": 13.12
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "771d7558-1e23-4af0-ad2b-658aa295af09-3B1C:en-GB",
//             "slug": "/brands/rak-ceramics",
//             "name": "RAK Ceramics",
//             "brandImage": {
//                 "externalId": "98a84f32-500a-43f7-b777-9a0d691bbe01-3B1B",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/rak-ceramics/logoimages/rakceramicsnlogo.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 17.245838
//     },
//     {
//         "id": "4cf657b4-7128-43a8-af0a-5e43fbee0459-881EF:en-GB",
//         "legacyId": "12826",
//         "legacyVariantId": "12826",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "MSPT",
//         "productName": "Pro 600 Modern Short Projection Toilet + Soft Close Seat",
//         "slug": "/modern-short-projection-toilet-with-soft-close-seat",
//         "averageRating": 4.8,
//         "reviewsCount": 19,
//         "questionsCount": 22,
//         "image": {
//             "externalId": "97b18439-fa9f-415b-9d9b-8586213b9266-88220",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/modern-short-projection-toilet-with-soft-close-seat/listingimages/lipro600modernshortprojectiontoiletwithsoftcloseseatprod.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Pro 600 Modern Short Projection Toilet with Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 199.95,
//             "priceExcTax": 166.63,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "cceb92cf-6e35-4c4e-8105-0d8f354b2bac-3C26:en-GB",
//             "slug": "/brands/victorian-plumbing",
//             "name": "Victorian Plumbing",
//             "brandImage": {
//                 "externalId": "163e2b74-191c-4035-b105-399f822e61cd-3C25",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/victorian-plumbing/logoimages/vplogon2.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 16.744753
//     },
//     {
//         "id": "dcf2b311-9ea2-4f67-9bd6-d221f53a39ce-8C01F:en-GB",
//         "legacyId": "20806",
//         "legacyVariantId": "10129",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "EVO702-SP",
//         "productName": "Compact Dual Flush Concealed WC Cistern with Wall Hung Frame & Modern Toilet",
//         "slug": "/compact-dual-flush-concealed-wc-cistern-with-wall-hung-frame-modern-toilet",
//         "averageRating": 4.9,
//         "reviewsCount": 7,
//         "questionsCount": 0,
//         "image": {
//             "externalId": "b847b662-7d6b-45d9-aac9-33e70f6ca12c-8C026",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/compact-dual-flush-concealed-wc-cistern-with-wall-hung-frame-modern-toilet/listingimages/evo702p_med.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Compact Dual Flush Concealed WC Cistern with Wall Hung Frame & Modern Toilet Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 319.9500,
//             "priceExcTax": 266.6300,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": 11.99
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": true,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": true
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "cceb92cf-6e35-4c4e-8105-0d8f354b2bac-3C26:en-GB",
//             "slug": "/brands/victorian-plumbing",
//             "name": "Victorian Plumbing",
//             "brandImage": {
//                 "externalId": "163e2b74-191c-4035-b105-399f822e61cd-3C25",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/victorian-plumbing/logoimages/vplogon2.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 16.72718
//     },
//     {
//         "id": "c76f4682-c5f6-4cff-9a64-0471179d9ed5-86888:en-GB",
//         "legacyId": "35716",
//         "legacyVariantId": "35716",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "AZSQCC",
//         "productName": "Arezzo Square Close Coupled Toilet + Soft Close Seat",
//         "slug": "/arezzo-square-close-coupled-toilet-seat",
//         "averageRating": 4,
//         "reviewsCount": 1,
//         "questionsCount": 2,
//         "image": {
//             "externalId": "33e0642f-f803-4203-a73d-a83dcde6fefb-8690E",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/arezzo-square-close-coupled-toilet-seat/listingimages/azsqcc_n_med.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Arezzo Square Close Coupled Toilet + Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "E",
//             "eta": "2023-02-06T00:00:00Z",
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 199.9500,
//             "priceExcTax": 166.6300,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "22d7a919-37a0-4476-94ac-5445a7171b5c-3EAE:en-GB",
//             "slug": "/brands/arezzo",
//             "name": "Arezzo",
//             "brandImage": {
//                 "externalId": "c6837605-ecbc-4e08-8bfd-10532033d354-3EAD",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/arezzo/logoimages/arezzo_logo_.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 16.659592
//     },
//     {
//         "id": "8be7d818-82a0-4b5e-aea7-f40dba3698d0-834B1:en-GB",
//         "legacyId": "22142",
//         "legacyVariantId": "22142",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "VCCWC",
//         "productName": "Venice Modern Toilet + Soft Close Seat",
//         "slug": "/venice-modern-toilet-with-soft-close-seat",
//         "averageRating": 4.5,
//         "reviewsCount": 10,
//         "questionsCount": 14,
//         "image": {
//             "externalId": "6ea742c9-f7ce-4c98-af4b-49a7e3fab95e-83536",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/venice-modern-toilet-with-soft-close-seat/listingimages/vccwc_med.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Venice Modern Toilet + Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "E",
//             "eta": "2023-02-20T00:00:00Z",
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 199.95,
//             "priceExcTax": 166.63,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "2035a387-a97a-4ee3-ad37-3ba599ae9291-3C13:en-GB",
//             "slug": "/brands/venice",
//             "name": "Venice",
//             "brandImage": {
//                 "externalId": "5f27bdc0-1501-44b1-bcec-3270acef5ec9-3C12",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/venice/logoimages/venice_logo_.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 16.620926
//     },
//     {
//         "id": "fa4f01cb-9963-40d8-8819-8524500611b8-5F529:en-GB",
//         "legacyId": "42269",
//         "legacyVariantId": "42269",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "39891000",
//         "productName": "Grohe Solido Euro Ceramic Compact 5-in-1 Pack",
//         "slug": "/grohe-solido-euro-ceramic-compact-5-in-1-pack-39891000",
//         "averageRating": null,
//         "reviewsCount": 0,
//         "questionsCount": 0,
//         "image": {
//             "externalId": "e15178a4-7ea5-4465-83d0-a0c607ae4c63-5F544",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/grohe-solido-euro-ceramic-compact-5-in-1-pack-39891000/listingimages/39891000_m.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Grohe Solido Euro Ceramic Compact 5-in-1 Pack - 39891000 Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 629.95,
//             "priceExcTax": 524.96,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": 23.62
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "53fa6be0-c364-48e1-bc82-735caa71b9ca-3A30:en-GB",
//             "slug": "/brands/grohe",
//             "name": "Grohe",
//             "brandImage": {
//                 "externalId": "ddbcc14b-5d5c-46e8-a785-a1a55ed16fbf-3A2F",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/grohe/logoimages/grohe_logo1.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 16.414467
//     },
//     {
//         "id": "a41f8d07-4d0f-4866-8d2e-b1c6a6dcb02e-10BB0:en-GB",
//         "legacyId": "8749",
//         "legacyVariantId": "8749",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "NCH606-NTS007",
//         "productName": "Harmony Back to Wall Toilet + Soft Close Seat",
//         "slug": "/premier-harmony-back-to-wall-pan-with-soft-close-seat-nch306",
//         "averageRating": 4.8,
//         "reviewsCount": 5,
//         "questionsCount": 5,
//         "image": {
//             "externalId": "f2647626-d24e-4776-828a-d7145f129be4-10BEB",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/premier-harmony-back-to-wall-pan-with-soft-close-seat-nch306/listingimages/linch606nts007_p.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Premier Harmony Back to Wall Toilet + Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 139.9500,
//             "priceExcTax": 116.6300,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "0e9689bc-f485-4971-bbf4-9e77d4e44944-2980:en-GB",
//             "slug": "/toilets/back-to-wall-toilets",
//             "name": "Back To Wall Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "291656aa-d63f-4a0a-856a-b9267a186730-3AFD:en-GB",
//             "slug": "/brands/premier",
//             "name": "Nuie",
//             "brandImage": {
//                 "externalId": "5975ceef-90cb-4c25-9941-2eed0ef0f521-3AFC",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/premier/logoimages/nuie_logo.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 16.292622
//     },
//     {
//         "id": "2433b19f-c968-4849-8265-8bf197b97e34-60F83:en-GB",
//         "legacyId": "42888",
//         "legacyVariantId": "42888",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "VBCPARC",
//         "productName": "Villeroy and Boch Viconnect Pro Toilet Frame with Chrome Flush Plate + Architectura Wall Hung Toilet",
//         "slug": "/villeroy-and-boch-viconnect-pro-toilet-frame-with-chrome-flush-plate-architectura-wall-hung-toilet",
//         "averageRating": null,
//         "reviewsCount": 0,
//         "questionsCount": 0,
//         "image": {
//             "externalId": "3df4362f-0f81-455e-84cb-ead1699441d6-60FA2",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/villeroy-and-boch-viconnect-pro-toilet-frame-with-chrome-flush-plate-architectura-wall-hung-toilet/listingimages/vbcparc_m2.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Villeroy and Boch Viconnect Pro Toilet Frame with Chrome Flush Plate + Architectura Wall Hung Toilet"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 699.55,
//             "priceExcTax": 582.96,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": 26.23
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "506bd850-d0fa-4ba2-b964-b3bfbd3622f5-3E84:en-GB",
//             "slug": "/brands/villeroy-and-boch",
//             "name": "Villeroy & Boch",
//             "brandImage": {
//                 "externalId": "794b032a-06c0-454d-9f6d-be2ab9d81c2e-3E83",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/villeroy-and-boch/logoimages/villeroybochlogo.png",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 16.287382
//     },
//     {
//         "id": "8ef37083-14f4-4c67-834a-7c1f1432bba4-7DA80:en-GB",
//         "legacyId": "21186",
//         "legacyVariantId": "10809",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "BR-CC",
//         "productName": "Brooklyn Modern Square Toilet with Soft Close Seat",
//         "slug": "/brooklyn-modern-square-toilet",
//         "averageRating": 4.9,
//         "reviewsCount": 13,
//         "questionsCount": 0,
//         "image": {
//             "externalId": "94b2da85-f3fd-4c97-8702-e504428e5db3-7DAD4",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brooklyn-modern-square-toilet/listingimages/librooklynmodernsquaretoiletp.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Brooklyn Modern Square Toilet Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 189.9500,
//             "priceExcTax": 158.2900,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": true,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": true
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "e6cb1627-aeee-4921-bb88-f40d25c1f3c4-3CCF:en-GB",
//             "slug": "/brands/brooklyn-bathrooms",
//             "name": "Brooklyn Bathrooms",
//             "brandImage": {
//                 "externalId": "aab67b2d-bb97-4a63-a3c2-4d0940d328ff-3CCE",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/brooklyn-bathrooms/logoimages/brooklyn_logo_.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 16.047012
//     },
//     {
//         "id": "7b5d08fd-9fa0-4d7f-b44e-649f7b22a798-8FA23:en-GB",
//         "legacyId": "44465",
//         "legacyVariantId": "44465",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "AZ009SL",
//         "productName": "Arezzo Back to Wall Toilet + Slim Soft Close Seat",
//         "slug": "/nuie-solace-back-to-wall-toilet-slim-soft-close-seat",
//         "averageRating": null,
//         "reviewsCount": 0,
//         "questionsCount": 0,
//         "image": {
//             "externalId": "d45eb8ba-dae7-42aa-b90d-a7b61723c90c-8FA45",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/nuie-solace-back-to-wall-toilet-slim-soft-close-seat/listingimages/az009sl_med.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Arezzo Back to Wall Toilet + Slim Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 209.9500,
//             "priceExcTax": 174.9600,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "0e9689bc-f485-4971-bbf4-9e77d4e44944-2980:en-GB",
//             "slug": "/toilets/back-to-wall-toilets",
//             "name": "Back To Wall Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "22d7a919-37a0-4476-94ac-5445a7171b5c-3EAE:en-GB",
//             "slug": "/brands/arezzo",
//             "name": "Arezzo",
//             "brandImage": {
//                 "externalId": "c6837605-ecbc-4e08-8bfd-10532033d354-3EAD",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/arezzo/logoimages/arezzo_logo_.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 15.994142
//     },
//     {
//         "id": "c17cbd88-32d6-4c03-be4b-6cbe79849608-88B0B:en-GB",
//         "legacyId": "20594",
//         "legacyVariantId": "20594",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "VIEWC",
//         "productName": "Vienna Short Projection Cloakroom Toilet with Seat",
//         "slug": "/vienna-short-projection-cloakroom-toilet-with-seat",
//         "averageRating": 4.9,
//         "reviewsCount": 14,
//         "questionsCount": 12,
//         "image": {
//             "externalId": "83936e18-1d64-4b18-9a86-dc64917fee01-88B4F",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/vienna-short-projection-cloakroom-toilet-with-seat/listingimages/viewcnm.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Vienna Short Projection Cloakroom Toilet with Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 189.9500,
//             "priceExcTax": 158.2900,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "cceb92cf-6e35-4c4e-8105-0d8f354b2bac-3C26:en-GB",
//             "slug": "/brands/victorian-plumbing",
//             "name": "Victorian Plumbing",
//             "brandImage": {
//                 "externalId": "163e2b74-191c-4035-b105-399f822e61cd-3C25",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/victorian-plumbing/logoimages/vplogon2.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 15.974716
//     },
//     {
//         "id": "c8c37dbf-6b40-4ebf-a079-086d2984b6e2-6416C:en-GB",
//         "legacyId": "44101",
//         "legacyVariantId": "44101",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "AZ233PMB",
//         "productName": "Arezzo Matt Black Rimless Back to Wall Toilet incl. Soft Close Seat",
//         "slug": "/arezzo-matt-black-rimless-back-to-wall-toilet-soft-close-seat",
//         "averageRating": null,
//         "reviewsCount": 0,
//         "questionsCount": 0,
//         "image": {
//             "externalId": "1041c873-1367-4f07-a38d-2f5b6d08e2df-6417F",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/arezzo-matt-black-rimless-back-to-wall-toilet-soft-close-seat/listingimages/az233pmb_m.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Arezzo Matt Black Rimless Back to Wall Toilet + Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 329.95,
//             "priceExcTax": 274.96,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": 12.37
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": true,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "22d7a919-37a0-4476-94ac-5445a7171b5c-3EAE:en-GB",
//             "slug": "/brands/arezzo",
//             "name": "Arezzo",
//             "brandImage": {
//                 "externalId": "c6837605-ecbc-4e08-8bfd-10532033d354-3EAD",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/arezzo/logoimages/arezzo_logo_.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 15.944639
//     },
//     {
//         "id": "8ffa8405-345d-4514-9122-50057421a5e9-39341:en-GB",
//         "legacyId": "28088",
//         "legacyVariantId": "28088",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "ALP350",
//         "productName": "Alps Modern Rimless Short Projection Toilet + Soft Closing Seat",
//         "slug": "/alps-modern-short-projection-toilet-soft-closing-seat",
//         "averageRating": 4.9,
//         "reviewsCount": 16,
//         "questionsCount": 11,
//         "image": {
//             "externalId": "1eddbac8-ac50-4829-ba69-d5d6986f4119-39405",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/alps-modern-short-projection-toilet-soft-closing-seat/listingimages/alp350_n_med.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Alps Modern Rimless Short Projection Toilet + Soft Closing Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 189.9500,
//             "priceExcTax": 158.2900,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "cceb92cf-6e35-4c4e-8105-0d8f354b2bac-3C26:en-GB",
//             "slug": "/brands/victorian-plumbing",
//             "name": "Victorian Plumbing",
//             "brandImage": {
//                 "externalId": "163e2b74-191c-4035-b105-399f822e61cd-3C25",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/victorian-plumbing/logoimages/vplogon2.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 15.918318
//     },
//     {
//         "id": "722e7e20-f98c-4de3-9743-037b5addbc2e-8F0A5:en-GB",
//         "legacyId": "22185",
//         "legacyVariantId": "22185",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "VBTWP",
//         "productName": "Venice Modern Back To Wall Pan + Soft Close Seat",
//         "slug": "/venice-modern-back-to-wall-pan-with-soft-close-seat",
//         "averageRating": 4.7,
//         "reviewsCount": 11,
//         "questionsCount": 0,
//         "image": {
//             "externalId": "675a54a5-99ac-4308-9fdf-e20de896a9f9-8F129",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/venice-modern-back-to-wall-pan-with-soft-close-seat/listingimages/vbtwp_med.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Venice Modern Back To Wall Pan + Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 149.9500,
//             "priceExcTax": 124.9600,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": null
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": false,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "0e9689bc-f485-4971-bbf4-9e77d4e44944-2980:en-GB",
//             "slug": "/toilets/back-to-wall-toilets",
//             "name": "Back To Wall Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "2035a387-a97a-4ee3-ad37-3ba599ae9291-3C13:en-GB",
//             "slug": "/brands/venice",
//             "name": "Venice",
//             "brandImage": {
//                 "externalId": "5f27bdc0-1501-44b1-bcec-3270acef5ec9-3C12",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/venice/logoimages/venice_logo_.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 15.882501
//     },
//     {
//         "id": "64f314a1-a64b-4e88-96b9-dfb79c69f7cd-6034E:en-GB",
//         "legacyId": "42632",
//         "legacyVariantId": "42632",
//         "cultureCode": "en-GB",
//         "isDefaultVariant": true,
//         "sku": "CVWCCH",
//         "productName": "Cove Comfort Height Close Coupled Toilet + Soft Close Seat",
//         "slug": "/cove-comfort-height-close-coupled-toilet-soft-close-seat",
//         "averageRating": null,
//         "reviewsCount": 0,
//         "questionsCount": 1,
//         "image": {
//             "externalId": "b6e2b42f-b1c4-414f-b6d3-49200c06c851-6035C",
//             "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/cove-comfort-height-close-coupled-toilet-soft-close-seat/listingimages/cvwcch_med.jpg",
//             "priority": 100,
//             "isDefault": false,
//             "attributes": {
//                 "imageAltText": "Cove Comfort Height Close Coupled Toilet + Soft Close Seat Medium Image"
//             }
//         },
//         "stockStatus": {
//             "status": "G",
//             "eta": null,
//             "stockLevel": null
//         },
//         "price": {
//             "currencyCode": "GBP",
//             "wasPriceIncTax": null,
//             "wasPriceExcTax": null,
//             "priceIncTax": 259.9500,
//             "priceExcTax": 216.6300,
//             "isOnPromotion": false,
//             "discountPercentage": null,
//             "monthlyFinanceEstimate": 9.74
//         },
//         "attributes": {
//             "isApproved": false,
//             "isShownOnTv": false,
//             "isBestSeller": false,
//             "isFreeWaste": false,
//             "isPremium": false,
//             "isRecommended": false,
//             "isTrayIncluded": false,
//             "isBluetoothIncluded": false,
//             "isBatteryIncluded": false,
//             "isAntiSlipIncluded": false,
//             "isShortProjection": true,
//             "hasOneOutlet": false,
//             "hasTwoOutlets": false,
//             "hasThreeOutlets": false,
//             "isNew": false,
//             "hasMoreOptions": false
//         },
//         "defaultCategory": {
//             "externalId": "e8332ada-f643-456c-9e32-3726b9a8d825-2986:en-GB",
//             "slug": "/toilets/modern-toilets",
//             "name": "Modern Toilets",
//             "isDefault": true,
//             "ancestors": [
//                 {
//                     "slug": "/toilets",
//                     "externalId": "6f09adc1-b19d-4a08-9029-1c5c71786026-2970:en-GB",
//                     "name": "Toilets",
//                     "depth": 1
//                 }
//             ],
//             "level": 0
//         },
//         "brand": {
//             "externalId": "1db0da96-6885-4c70-a0f9-248d7e16deca-39EE:en-GB",
//             "slug": "/brands/cove",
//             "name": "Cove",
//             "brandImage": {
//                 "externalId": "a8e9b9de-6ae1-47eb-9c63-f03f00422fb4-39ED",
//                 "url": "https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/cove/logoimages/cove_logo_.jpg",
//                 "priority": 100,
//                 "isDefault": false,
//                 "attributes": {
//                     "imageAltText": "Category logo image"
//                 }
//             },
//             "level": 0
//         },
//         "tradePrices": null,
//         "variants": null,
//         "score": 15.864701
//     }
// ];