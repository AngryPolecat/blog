const mapComment = require('./mapComment');
const mongoose = require('mongoose');

module.exports = function (post) {
  return {
    id: post.id,
    title: post.title,
    imageUrl: post.image,
    content: post.content,
    comments: post.comments.map((comment) => (mongoose.isObjectIdOrHexString(comment) ? comment : mapComment(comment))),
    publishedAt: post.createdAt.toLocaleDateString().padStart(10, '0'),
  };
};
