import db from '../models/Comment';

const commentController = {};

commentController.post = (req, res) => {
  const {
    text,
    userId,
    postId,
  } = req.body;

  // Validation

  const comment = new db.Comment({
    text,
    _creator: userId,
    _post: postId
  });

  comment.save().then((newComment) => {
    db.Post.findByIdAndUpdate(
      postId,
      { $push: { '_comments': newComment._id } } 
    ).then((existingPost) => {
      res.status(200).json({
        success: true,
        data: newComment,
        existingPost
      }); 
    }).catch((err) => {
      res.status(500).json({
        message: err 
      }); 
    });
    res.status(200).json({
      success: true,
      data: newComment
    });
  }).catch((err) => {
    res.status(500).json({
      message: err 
    }); 
  });
};
