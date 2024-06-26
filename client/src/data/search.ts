// Пример запроса

// import axios from 'axios'

// const options = {
//    method: 'GET',
//    url: 'https://real-time-amazon-data.p.rapidapi.com/search',
//    params: {
//       query: 'Phone',

// Опциональные параметры
//       page: '1',
//       country: 'US',
//       sort_by: 'LOWEST_PRICE',
//                               Default: RELEVANCE
//                               Allowed values: RELEVANCE, LOWEST_PRICE, HIGHEST_PRICE, REVIEWS, NEWEST, BEST_SELLERS
//       category_id: 'aps',
//       min_price: '500.15',
//       max_price: '1000.35',
//       brand: 'apple',
//       product_condition: 'NEW',
//                               Allowed values: NEW, USED, RENEWED, COLLECTIBLE
//    },
//    headers: {
//       'X-RapidAPI-Key': 'bf5a70673bmsheaf30cf30339ffdp1d2a6cjsne358c3f64802',
//       'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com',
//    },
// }

// try {
//    const response = await axios.request(options)
//    console.log(response.data)
// } catch (error) {
//    console.error(error)
// }

// export const exampleResponses = {
//    status: 'OK',
//    request_id: '4f79fec8-b6d9-4721-b9d6-0d4819ed9786',
//    data: {
//       total_products: 152054,
//       country: 'US',
//       domain: 'www.amazon.com',
//       products: [
//          {
//             asin: 'B010RWDJOY',
//             product_title:
//                'Nike Performance Cushion Crew Socks with Band (6 Pairs)',
//             product_price: '$25.00',
//             unit_price: '$4.17',
//             unit_count: 6,
//             product_original_price: '$29.90',
//             currency: 'USD',
//             product_star_rating: '4.6',
//             product_num_ratings: 15788,
//             product_url: 'https://www.amazon.com/dp/B010RWDJOY',
//             product_photo:
//                'https://m.media-amazon.com/images/I/81XwDw-bXpL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$25.00',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '10K+ bought in past month',
//             delivery:
//                'FREE delivery Mon, Feb 5 on $35 of items shipped by AmazonOr fastest delivery Thu, Feb 1',
//          },
//          {
//             asin: 'B07FKDZPZW',
//             product_title: 'Nike Unisex Everyday Cushion Crew 3 Pair',
//             product_price: '$14.00',
//             unit_price: '$4.67',
//             unit_count: 3,
//             product_original_price: '$18.99',
//             currency: 'USD',
//             product_star_rating: '4.6',
//             product_num_ratings: 24998,
//             product_url: 'https://www.amazon.com/dp/B07FKDZPZW',
//             product_photo:
//                'https://m.media-amazon.com/images/I/61LBNRTTxqL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$14.00',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '8K+ bought in past month',
//             delivery:
//                'FREE delivery Sun, Feb 4 on $35 of items shipped by AmazonOr fastest delivery Thu, Feb 1',
//          },
//          {
//             asin: 'B08NMWT76M',
//             product_title: 'Nike Womens Club Fleece Jogger Sweatpants',
//             product_price: '$50.00',
//             product_original_price: '$56.24',
//             currency: 'USD',
//             product_star_rating: '4.3',
//             product_num_ratings: 1361,
//             product_url: 'https://www.amazon.com/dp/B08NMWT76M',
//             product_photo:
//                'https://m.media-amazon.com/images/I/51gvdUQ2I6L._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$50.00',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '400+ bought in past month',
//             delivery:
//                'FREE delivery Mon, Feb 5 Or fastest delivery Thu, Feb 1 Prime Try Before You Buy',
//          },
//          {
//             asin: 'B083PVCSQ6',
//             product_title: 'Nike Women&#x27;s Pro 3&quot; Training Shorts',
//             product_price: '$36.50',
//             product_original_price: '$40.00',
//             currency: 'USD',
//             product_star_rating: '4.6',
//             product_num_ratings: 9826,
//             product_url: 'https://www.amazon.com/dp/B083PVCSQ6',
//             product_photo:
//                'https://m.media-amazon.com/images/I/71FWnuZNE3L._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$36.50',
//             is_best_seller: true,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '1K+ bought in past month',
//             delivery: 'FREE delivery Sun, Feb 4 Or fastest delivery Thu, Feb 1',
//          },
//          {
//             asin: 'B08WV3DW85',
//             product_title: 'Nike Men&#x27;s Park Short Sleeve T Shirt',
//             product_price: '$27.09',
//             product_original_price: '$29.90',
//             currency: 'USD',
//             product_star_rating: '4.4',
//             product_num_ratings: 2349,
//             product_url: 'https://www.amazon.com/dp/B08WV3DW85',
//             product_photo:
//                'https://m.media-amazon.com/images/I/518xM0ElcnL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$27.09',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '200+ bought in past month',
//             delivery:
//                'FREE delivery Sun, Feb 4 on $35 of items shipped by AmazonOr fastest delivery Wed, Jan 31',
//          },
//          {
//             asin: 'B01LZM2WFS',
//             product_title: 'Nike Men&#x27;s Legend 2.0 Long Sleeve Tee',
//             product_price: '$22.00',
//             product_original_price: '$35.00',
//             currency: 'USD',
//             product_star_rating: '4.6',
//             product_num_ratings: 51,
//             product_url: 'https://www.amazon.com/dp/B01LZM2WFS',
//             product_photo:
//                'https://m.media-amazon.com/images/I/91LA8FP9vwL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$22.00',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '50+ bought in past month',
//             delivery:
//                'FREE delivery Mon, Feb 5 on $35 of items shipped by AmazonOr fastest delivery Thu, Feb 1',
//          },
//          {
//             asin: 'B0798PPZT1',
//             product_title: 'Nike Adult Unisex Team Sideline Beanie',
//             product_price: '$23.29',
//             product_original_price: '$32.58',
//             currency: 'USD',
//             product_star_rating: '4.4',
//             product_num_ratings: 476,
//             product_url: 'https://www.amazon.com/dp/B0798PPZT1',
//             product_photo:
//                'https://m.media-amazon.com/images/I/817bYPorjRL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$23.29',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '100+ bought in past month',
//             delivery:
//                'FREE delivery Sun, Feb 4 on $35 of items shipped by AmazonOr fastest delivery Wed, Jan 31',
//          },
//          {
//             asin: 'B01AAZWQSS',
//             product_title:
//                'Nike Everyday Cushion Ankle Training Socks (3 Pair)',
//             product_price: '$17.29',
//             unit_price: '$5.76',
//             unit_count: 3,
//             product_original_price: '$18.99',
//             currency: 'USD',
//             product_star_rating: '4.6',
//             product_num_ratings: 18060,
//             product_url: 'https://www.amazon.com/dp/B01AAZWQSS',
//             product_photo:
//                'https://m.media-amazon.com/images/I/712rzrT+D7L._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$17.29',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: false,
//             climate_pledge_friendly: false,
//             sales_volume: '1K+ bought in past month',
//             delivery: 'FREE delivery Feb 1 - 5',
//          },
//          {
//             asin: 'B08J197RQ6',
//             product_title: 'Nike mens Team Club Crew Neck Tee',
//             product_price: '$39.05',
//             product_original_price: '$54.95',
//             currency: 'USD',
//             product_star_rating: '4.7',
//             product_num_ratings: 240,
//             product_url: 'https://www.amazon.com/dp/B08J197RQ6',
//             product_photo:
//                'https://m.media-amazon.com/images/I/51Pu003L9QL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$39.05',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '300+ bought in past month',
//             delivery:
//                'FREE delivery Sun, Feb 4 Or fastest delivery Wed, Jan 31',
//          },
//          {
//             asin: 'B08QSDH28L',
//             product_title: 'Nike womens Leggings',
//             product_price: '$38.99',
//             product_original_price: '$55.00',
//             currency: 'USD',
//             product_star_rating: '4.3',
//             product_num_ratings: 652,
//             product_url: 'https://www.amazon.com/dp/B08QSDH28L',
//             product_photo:
//                'https://m.media-amazon.com/images/I/61qGwtbm+BL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$38.99',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '300+ bought in past month',
//             delivery: 'FREE delivery Sun, Feb 4 Or fastest delivery Thu, Feb 1',
//          },
//          {
//             asin: 'B08CZYQ2ZG',
//             product_title: 'Nike Dri-Fit Fury Sweat-Wicking Head Tie - Unisex',
//             product_price: '$9.99',
//             product_original_price: '$17.99',
//             currency: 'USD',
//             product_star_rating: '4.5',
//             product_num_ratings: 1239,
//             product_url: 'https://www.amazon.com/dp/B08CZYQ2ZG',
//             product_photo:
//                'https://m.media-amazon.com/images/I/61vys5MQXTL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$9.99',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '1K+ bought in past month',
//             delivery:
//                'FREE delivery Sun, Feb 4 on $35 of items shipped by AmazonOr fastest delivery Wed, Jan 31',
//          },
//          {
//             asin: 'B019DKY4SG',
//             product_title: 'Nike Men&#x27;s Sportswear Open Hem Club Pants',
//             product_price: '$66.89',
//             product_original_price: null,
//             currency: 'USD',
//             product_star_rating: '4.4',
//             product_num_ratings: 2799,
//             product_url: 'https://www.amazon.com/dp/B019DKY4SG',
//             product_photo:
//                'https://m.media-amazon.com/images/I/415xHhwrllL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$66.89',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '300+ bought in past month',
//             delivery:
//                'FREE delivery Sun, Feb 4 Or fastest delivery Thu, Feb 1 Prime Try Before You Buy',
//          },
//          {
//             asin: 'B07FRL48VV',
//             product_title: 'Nike 826433-010 Men Black Pull-Over Hoodie',
//             product_price: '$65.05',
//             product_original_price: '$69.99',
//             currency: 'USD',
//             product_star_rating: '4.7',
//             product_num_ratings: 360,
//             product_url: 'https://www.amazon.com/dp/B07FRL48VV',
//             product_photo:
//                'https://m.media-amazon.com/images/I/51UYJF33uvL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$65.05',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '400+ bought in past month',
//             delivery: 'FREE deliveryPrime Try Before You Buy',
//          },
//          {
//             asin: 'B088G1NS9P',
//             product_title: 'Nike Unisex - Adult Premium Lanyard Lanyard',
//             product_price: '$15.99',
//             product_original_price: '$19.99',
//             currency: 'USD',
//             product_star_rating: '4.6',
//             product_num_ratings: 190,
//             product_url: 'https://www.amazon.com/dp/B088G1NS9P',
//             product_photo:
//                'https://m.media-amazon.com/images/I/41VnS0pgZsL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$15.99',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '200+ bought in past month',
//             delivery:
//                'FREE delivery Sun, Feb 4 on $35 of items shipped by AmazonOr fastest delivery Thu, Feb 1',
//          },
//          {
//             asin: 'B09QK7KMB6',
//             product_title: 'Nike mens Luxe Modal Boxer Briefs',
//             product_price: '$41.48',
//             product_original_price: '$44.95',
//             currency: 'USD',
//             product_star_rating: '4.6',
//             product_num_ratings: 1155,
//             product_url: 'https://www.amazon.com/dp/B09QK7KMB6',
//             product_photo:
//                'https://m.media-amazon.com/images/I/61ZLMcL5ZTL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$41.48',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '300+ bought in past month',
//             delivery: 'FREE delivery Sun, Feb 4 Or fastest delivery Thu, Feb 1',
//          },
//          {
//             asin: 'B089VH8H6Q',
//             product_title: 'Nike Sportswear Men&#x27;s Pullover Club Hoodie',
//             product_price: '$52.39',
//             product_original_price: '$60.00',
//             currency: 'USD',
//             product_star_rating: '4.7',
//             product_num_ratings: 4818,
//             product_url: 'https://www.amazon.com/dp/B089VH8H6Q',
//             product_photo:
//                'https://m.media-amazon.com/images/I/51cB8iGPJZL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$52.39',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '800+ bought in past month',
//             delivery:
//                'FREE delivery Sun, Feb 4 Or fastest delivery Thu, Feb 1 Prime Try Before You Buy',
//          },
//          {
//             asin: 'B010RWD4GM',
//             product_title:
//                'Nike Unisex Performance Cushion Crew Socks with Band (6 Pairs), Black/White, Large',
//             product_price: '$27.00',
//             product_original_price: null,
//             currency: 'USD',
//             product_star_rating: '4.5',
//             product_num_ratings: 10133,
//             product_url: 'https://www.amazon.com/dp/B010RWD4GM',
//             product_photo:
//                'https://m.media-amazon.com/images/I/81PTFhxgEwL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$27.00',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '9K+ bought in past month',
//             delivery: 'FREE delivery on $35 shipped by Amazon.',
//          },
//          {
//             asin: 'B0959JT4PV',
//             product_title:
//                'Nike unisex-adult Pro Hyperwarm Hydropull Hood Balaclava',
//             product_price: '$43.30',
//             product_original_price: null,
//             currency: 'USD',
//             product_star_rating: '4.7',
//             product_num_ratings: 2365,
//             product_url: 'https://www.amazon.com/dp/B0959JT4PV',
//             product_photo:
//                'https://m.media-amazon.com/images/I/51NMg2CC8IS._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$43.30',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '10K+ bought in past month',
//             delivery:
//                'FREE delivery Sun, Feb 4 Or fastest delivery Wed, Jan 31',
//          },
//          {
//             asin: 'B0CGY63CG4',
//             product_title: 'Nike Men&#x27;s Team Legend Long Sleeve Tee Shirt',
//             product_price: '$33.69',
//             product_original_price: '$38.73',
//             currency: 'USD',
//             product_star_rating: '4.3',
//             product_num_ratings: 58,
//             product_url: 'https://www.amazon.com/dp/B0CGY63CG4',
//             product_photo:
//                'https://m.media-amazon.com/images/I/41ZYuw9oZEL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$33.69',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '100+ bought in past month',
//             delivery:
//                'FREE delivery Mon, Feb 5 on $35 of items shipped by AmazonOr fastest delivery Thu, Feb 1',
//          },
//          {
//             asin: 'B0CMDJTFZR',
//             product_title: 'Nike Womens Team Fleece Sweatshirt Crew',
//             product_price: '$64.99',
//             product_original_price: '$69.99',
//             currency: 'USD',
//             product_star_rating: '1.7',
//             product_num_ratings: 5,
//             product_url: 'https://www.amazon.com/dp/B0CMDJTFZR',
//             product_photo:
//                'https://m.media-amazon.com/images/I/41Q+AVqDjSL._AC_SR525,789_FMwebp_QL65_.jpg',
//             product_num_offers: null,
//             product_minimum_offer_price: '$64.99',
//             is_best_seller: false,
//             is_amazon_choice: false,
//             is_prime: true,
//             climate_pledge_friendly: false,
//             sales_volume: '50+ bought in past month',
//             delivery:
//                'FREE delivery Sun, Feb 4 Or fastest delivery Wed, Jan 31 Prime Try Before You Buy',
//          },
//       ],
//    },
// }

export const exampleResponses = {
   status: 'OK',
   request_id: '9c438a55-4c25-43f5-afdd-9fa4739c5871',
   data: {
      total_products: 8198,
      country: 'US',
      domain: 'www.amazon.com',
      products: [
         {
            asin: 'B0CSB1GX4H',
            product_title:
               'Samsung Galaxy A15 (SM-155M/DSN), 128GB 6GB RAM, Dual SIM, Factory Unlocked GSM, International Version (Wall Charger Bundle) (Yellow)',
            product_price: '$155.99',
            product_original_price: null,
            currency: 'USD',
            product_star_rating: '4.6',
            product_num_ratings: 21,
            product_url: 'https://www.amazon.com/dp/B0CSB1GX4H',
            product_photo:
               'https://m.media-amazon.com/images/I/51rK-Be8dxL._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$155.99',
            is_best_seller: false,
            is_amazon_choice: false,
            is_prime: false,
            climate_pledge_friendly: false,
            sales_volume: '500+ bought in past month',
            delivery:
               'FREE delivery Thu, May 2 Only 2 left in stock - order soon.',
         },
         {
            asin: 'B0CCSZZGT7',
            product_title:
               'TracFone Motorola Moto g Play, 32GB, Black - Prepaid Smartphone (Locked)',
            product_price: '$39.88',
            product_original_price: '$49.99',
            currency: 'USD',
            product_star_rating: '4',
            product_num_ratings: 79,
            product_url: 'https://www.amazon.com/dp/B0CCSZZGT7',
            product_photo:
               'https://m.media-amazon.com/images/I/71pGGUaxezL._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$39.88',
            is_best_seller: false,
            is_amazon_choice: false,
            is_prime: true,
            climate_pledge_friendly: false,
            sales_volume: '1K+ bought in past month',
            delivery: 'FREE delivery Mon, May 6 Or fastest delivery Thu, May 2',
         },
         {
            asin: 'B0BLZN9NDG',
            product_title:
               'SAMSUNG,Galaxy A04e (SM-A042M/DS) Dual SIM 32GB,6.5&#x27;&#x27; GSM Unlocked,International Version-Black',
            product_price: '$88.90',
            product_original_price: '$105.00',
            currency: 'USD',
            product_star_rating: '3.8',
            product_num_ratings: 236,
            product_url: 'https://www.amazon.com/dp/B0BLZN9NDG',
            product_photo:
               'https://m.media-amazon.com/images/I/71O2YkTlq-L._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$88.90',
            is_best_seller: false,
            is_amazon_choice: false,
            is_prime: true,
            climate_pledge_friendly: false,
            sales_volume: '1K+ bought in past month',
            delivery: 'FREE delivery Mon, May 6 Or fastest delivery Thu, May 2',
         },
         {
            asin: 'B0CSDZP44V',
            product_title:
               'BLU G73 | 2023 | 3-Day Battery | Unlocked | 6.8” HD+ Infinity Display | 128/6GB | Triple 50MP Camera | US Version | US Warranty | Grey',
            product_price: '$99.99',
            product_original_price: '$149.99',
            currency: 'USD',
            product_star_rating: '4.2',
            product_num_ratings: 29,
            product_url: 'https://www.amazon.com/dp/B0CSDZP44V',
            product_photo:
               'https://m.media-amazon.com/images/I/81TeO+nqxnL._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$99.99',
            is_best_seller: false,
            is_amazon_choice: false,
            is_prime: true,
            climate_pledge_friendly: false,
            sales_volume: '500+ bought in past month',
            delivery: 'FREE delivery Mon, May 6 Or fastest delivery Thu, May 2',
         },
         {
            asin: 'B0CFB7W1W2',
            product_title:
               'Motorola Moto g Play, 32GB, Black - Prepaid Smartphone (Locked)',
            product_price: '$39.88',
            product_original_price: null,
            currency: 'USD',
            product_star_rating: '3.8',
            product_num_ratings: 59,
            product_url: 'https://www.amazon.com/dp/B0CFB7W1W2',
            product_photo:
               'https://m.media-amazon.com/images/I/71pGGUaxezL._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$39.88',
            is_best_seller: false,
            is_amazon_choice: false,
            is_prime: true,
            climate_pledge_friendly: false,
            sales_volume: '400+ bought in past month',
            delivery: 'FREE delivery Mon, May 6 Or fastest delivery Thu, May 2',
         },
         {
            asin: 'B0CP4FMLBT',
            product_title:
               'BLU C5L MAX | 2024 | All-Day Battery | GSM Unlocked | 5.7” Display | 16/2GB |US Version | US Warranty | Black',
            product_price: '$49.99',
            product_original_price: null,
            currency: 'USD',
            product_star_rating: '3.5',
            product_num_ratings: 132,
            product_url: 'https://www.amazon.com/dp/B0CP4FMLBT',
            product_photo:
               'https://m.media-amazon.com/images/I/81No0c60jdL._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$49.99',
            is_best_seller: false,
            is_amazon_choice: false,
            is_prime: true,
            climate_pledge_friendly: false,
            sales_volume: '1K+ bought in past month',
            delivery: 'FREE delivery Mon, May 6 Or fastest delivery Thu, May 2',
         },
         {
            asin: 'B0BYGXFJ8K',
            product_title:
               'Motorola Moto G Power 5G | 2023 | Unlocked | Made for US 6/256GB | 50 MPCamera | Mineral Black, 163.06 x 74.8 x 8.45mm',
            product_price: '$199.99',
            product_original_price: '$299.99',
            currency: 'USD',
            product_star_rating: '4.2',
            product_num_ratings: 1482,
            product_url: 'https://www.amazon.com/dp/B0BYGXFJ8K',
            product_photo:
               'https://m.media-amazon.com/images/I/61QKKdjHV0L._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$199.99',
            is_best_seller: false,
            is_amazon_choice: false,
            is_prime: true,
            climate_pledge_friendly: false,
            sales_volume: '1K+ bought in past month',
            delivery: 'FREE delivery Mon, May 6 Or fastest delivery Thu, May 2',
         },
         {
            asin: 'B0CN1Q2X3B',
            product_title:
               'SAMSUNG Galaxy A25 5G A Series Cell Phone, 128GB Unlocked Android Smartphone, AMOLED Display, Advanced Triple Camera System, Expandable Storage, Stereo Speakers,US Version,2024,Black',
            product_price: '$300.00',
            product_original_price: null,
            currency: 'USD',
            product_star_rating: '3.7',
            product_num_ratings: 97,
            product_url: 'https://www.amazon.com/dp/B0CN1Q2X3B',
            product_photo:
               'https://m.media-amazon.com/images/I/61cwMOVn17L._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$300.00',
            is_best_seller: false,
            is_amazon_choice: false,
            is_prime: true,
            climate_pledge_friendly: false,
            sales_volume: '1K+ bought in past month',
            delivery: 'FREE delivery Mon, May 6 Or fastest delivery Thu, May 2',
         },
         {
            asin: 'B0CN1QSH8Q',
            product_title:
               'SAMSUNG Galaxy A15 5G A Series Cell Phone, 128GB Unlocked Android Smartphone, AMOLED Display, Expandable Storage, Knox Security, Super Fast Charging, US Version, 2024, Blue Black',
            product_price: '$199.99',
            product_original_price: null,
            currency: 'USD',
            product_star_rating: '4.1',
            product_num_ratings: 146,
            product_url: 'https://www.amazon.com/dp/B0CN1QSH8Q',
            product_photo:
               'https://m.media-amazon.com/images/I/61s0ZzwzSCL._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$199.99',
            is_best_seller: false,
            is_amazon_choice: false,
            is_prime: true,
            climate_pledge_friendly: true,
            sales_volume: '1K+ bought in past month',
            delivery: 'FREE delivery Mon, May 6',
         },
         {
            asin: 'B086QB7WZ1',
            product_title:
               'AT&amp;T BL102-2 DECT 6.0 2-Handset Cordless Phone for Home with Answering Machine, Call Blocking, Caller ID Announcer, Audio Assist, Intercom, and Unsurpassed Range, Silver/Black',
            product_price: '$56.85',
            product_original_price: null,
            currency: 'USD',
            product_star_rating: '4.3',
            product_num_ratings: 25649,
            product_url: 'https://www.amazon.com/dp/B086QB7WZ1',
            product_photo:
               'https://m.media-amazon.com/images/I/81vjTHTF9WL._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$56.85',
            is_best_seller: true,
            is_amazon_choice: false,
            is_prime: true,
            climate_pledge_friendly: false,
            sales_volume: '3K+ bought in past month',
            delivery: 'FREE delivery Mon, May 6 Or fastest delivery Thu, May 2',
         },
         {
            asin: 'B0BYLRBG4M',
            product_title:
               'Motorola Moto G Stylus | 2023 | Unlocked | Made for US 4/64GB | 50 MP Camera | Midnight Blue, 162.89 x 74.08 x 9.19mm',
            product_price: '$129.99',
            product_original_price: '$199.99',
            currency: 'USD',
            product_star_rating: '4.1',
            product_num_ratings: 2372,
            product_url: 'https://www.amazon.com/dp/B0BYLRBG4M',
            product_photo:
               'https://m.media-amazon.com/images/I/61bBVbson4L._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$129.99',
            is_best_seller: false,
            is_amazon_choice: false,
            is_prime: true,
            climate_pledge_friendly: false,
            sales_volume: '1K+ bought in past month',
            delivery: 'FREE delivery Mon, May 6 Or fastest delivery Thu, May 2',
         },
         {
            asin: 'B09D224JV2',
            product_title:
               'Xiaomi Redmi 10 4G Volte GSM Factory Unlocked 6.5&quot; 50MP Quad Camera (Not Verizon Sprint Boost Cricket) + Fast Car Charger Bundle (Carbon Gray, 64GB + 4GB)',
            product_price: '$111.70',
            product_original_price: null,
            currency: 'USD',
            product_star_rating: '4.5',
            product_num_ratings: 4975,
            product_url: 'https://www.amazon.com/dp/B09D224JV2',
            product_photo:
               'https://m.media-amazon.com/images/I/61tCBXqRJvL._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$111.70',
            is_best_seller: false,
            is_amazon_choice: false,
            is_prime: true,
            climate_pledge_friendly: false,
            sales_volume: '100+ bought in past month',
            delivery: 'FREE delivery Mon, May 6 Or fastest delivery Thu, May 2',
         },
         {
            asin: 'B092NTYZ78',
            product_title:
               'Panasonic Compact Cordless Phone with DECT 6.0, 1.6&quot; Amber LCD and Illuminated HS Keypad, Call Block, Caller ID, Multiple Display Languages - 1 Handset - KX-TGB810S (Black/Silver)',
            product_price: '$24.99',
            product_original_price: null,
            currency: 'USD',
            product_star_rating: '4.2',
            product_num_ratings: 4951,
            product_url: 'https://www.amazon.com/dp/B092NTYZ78',
            product_photo:
               'https://m.media-amazon.com/images/I/81k6vcykYYL._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$24.99',
            is_best_seller: false,
            is_amazon_choice: false,
            is_prime: true,
            climate_pledge_friendly: false,
            sales_volume: '2K+ bought in past month',
            delivery:
               'FREE delivery Mon, May 6 on $35 of items shipped by AmazonOr fastest delivery Thu, May 2',
         },
         {
            asin: 'B0CKNHHZH1',
            product_title:
               'Reno10 Cheap Smartphone， 5.0&#x27;&#x27; Android 9.0, 16GB ROM(Extendable to 128GB,Dual SIM Dual Camera, WiFi,Bluetooth,GPS Basic Mobile Phones (Reno10-Purple)',
            product_price: '$54.99',
            product_original_price: null,
            currency: 'USD',
            product_star_rating: '3.3',
            product_num_ratings: 35,
            product_url: 'https://www.amazon.com/dp/B0CKNHHZH1',
            product_photo:
               'https://m.media-amazon.com/images/I/51p6UE+Jm9L._AC_SX444_SY639_FMwebp_QL65_.jpg',
            product_num_offers: 1,
            product_minimum_offer_price: '$54.99',
            is_best_seller: false,
            is_amazon_choice: false,
            is_prime: true,
            climate_pledge_friendly: false,
            sales_volume: '50+ bought in past month',
            delivery: 'FREE delivery Mon, May 6 Or fastest delivery Thu, May 2',
         },
      ],
   },
}

const schema = {
   type: 'object',
   properties: {
      status: {
         type: 'string',
      },
      request_id: {
         type: 'string',
      },
      data: {
         type: 'object',
         properties: {
            total_products: {
               type: 'integer',
            },
            country: {
               type: 'string',
            },
            domain: {
               type: 'string',
            },
            products: {
               type: 'array',
               items: {
                  type: 'object',
               },
            },
         },
      },
   },
}
