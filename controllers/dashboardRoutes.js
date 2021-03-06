// -----------DASHBOARD ROUTES MOVED TO HOMEROUTES (keeping for ref but delete before submission)

// const router = require('express').Router();
// const { Restaurant, User, Review, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// // Gets all restaurants
// // router.get('/restaurants', async (req, res) => {
// //     console.log('here')
// //     try {
// //         const restaurantData = await Restaurant.findAll({
// //             include: {
// //                 model: Review,
// //                 include: {
// //                     model: User,
// //                     attributes: ['name'],
// //                 }
// //             },
// //         });

// //         // Serialize data so the template can read it
// //         const restaurants = restaurantData.map((restaurant) => restaurant.get({ plain: true }));

// //         console.log(restaurants);
// //         // Pass serialized data and session flag into template
// //         res.render('dashboard', {
// //             restaurants,
// //             logged_in: req.session.logged_in
// //         });

// //         console.log(restaurants);
// //     } catch (err) {
// //         res.status(500).json(err);
// //     }
// // });

// // Gets all reviews
// // router.get('/', async (req, res) => {
// //     try {
// //         const reviewData = await Review.findAll({
// //             include: [
// //                 // Get all comments from reviews
// //                 {
// //                     model: Comment,
// //                     include: {
// //                         model: User,
// //                         attributes: ['name'],
// //                     }
// //                 },
// //                 // Get the user name for the review
// //                 {
// //                     model: User,
// //                     attributes: ['name'],
// //                 },
// //                 // Get the restaurant name of the review
// //                 {
// //                     model: Restaurant,
// //                     attributes: ['name', 'location'],
// //                 },
// //             ],
// //         });

// //         const restaurantData = await Restaurant.findAll({
// //             include: {
// //                 model: Review,
// //                 include: {
// //                     model: User,
// //                     attributes: ['name'],
// //                 }
// //             },
// //         });
// //         // Serialize data so the template can read it
// //         const reviews = reviewData.map((review) => review.get({ plain: true }));
// //         const restaurants = restaurantData.map((restaurant) => restaurant.get({ plain: true }));
        
// //         console.log(reviews);
// //         console.log(restaurants);

// //         // Pass serialized data and session flag into template
// //         res.render('dashboard', 
// //         { 
// //             reviews: reviews,
// //             restaurants: restaurants, 
// //             logged_in: req.session.logged_in
// //         });

// //     } catch (err) {
// //         res.status(500).json(err);
// //     }
// // });

// //-----is this route going to change? 
// // Gets reviews by id
// router.get('/restaurants/reviews/:id', withAuth, async (req, res) => {
//     try {
//         const reviewData = await Review.findByPk(req.params.id, {
//             include: [
//                 // Get all comments from reviews
//                 {
//                     model: Comment,
//                     include: {
//                         model: User,
//                         attributes: ['name'],
//                     }
//                 },
//                 // Get the user name for the review
//                 {
//                     model: User,
//                     attributes: ['name'],
//                 },
//                 // Get the restaurant name of the review
//                 {
//                     model: Restaurant,
//                     attributes: ['name', 'location'],
//                 },
//             ],
//         });

//         // Serialize data so the template can read it
//         const reviews = reviewData.get({ plain: true });

//         // Pass serialized data and session flag into template
//         res.render('reviews', {
//             ...reviews,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


// // Get restaurants by id
// router.get('/restaurants/:id', async (req, res) => {
//     try {
//         const restaurantData = await Restaurant.findByPk(req.params.id, {
//             include:
//             // Get all reviews from restaurant
//             {
//                 model: Review,
//                 include: {
//                     model: User,
//                     attributes: ['name'],
//                 }
//             },
//         });

//         // Serialize data so the template can read it
//         const restaurants = restaurantData.get({ plain: true });

//         // Pass serialized data and session flag into template
//         res.render('restaurant', {
//             ...restaurants,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;