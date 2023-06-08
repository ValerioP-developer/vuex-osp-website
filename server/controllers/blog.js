const Post = require("../models/post");

/*
API(post): http://localhost:3000/post
PRODUCT: { 
          title (String),
          description (String),
          content (String),
          date (String),
        }
*/
exports.createPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    content1: req.body.content1,
    content2: req.body.content2,
    content3: req.body.content3,
    date: req.body.date,
  });
  // console.log(req);
  await post
    .save()
    .then(function (post) {
      // If we were able to successfully create a Product, send it back to the client
      res.json(post);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
};
/*
GET NUMBER OF TOTAL PRODUCT STORED INTO DB
API(get): http://localhost:3000/totalposts
*/
exports.totalPost = async (req, res, next) => {
  await Post.count({})
    .then(function (total) {
      // console.log("Total products "+total);
      // If we were able to successfully create a Product, send it back to the client
      res.json(total);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
};
/*
GET (itemPerPage) POSTS TO DISPLAY BASED ON THE CURRENT PAGE
API(get): http://localhost:3000/:page/:size
          page ->Current Page
          size ->Number of Item to display
*/
exports.loadPostsByPage = async (req, res, next) => {
  console.log("here in post by page");
  await Post.count({}).then(function (total) {
    TOTALCAR = total;
  });
  //console.log("PRODUCT COUNTED  "+TOTALCAR)
  var currentPage = req.params.page;
  var itemPerPage = req.params.size;
  var stop = itemPerPage * currentPage;
  var start = stop - itemPerPage;

  console.log(" start " + start + " stop " + stop);
  //res.json( "test" );

  await Post.find({})
    .skip(start)
    .limit(itemPerPage)
    .then(function (post) {
      //console.log(post);
      // If we were able to successfully create a Car, send it back to the client
      return res.json({ posts: post });
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
};
