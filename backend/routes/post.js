const router = require('express').Router();
const { postController } = require('../controllers');
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination : function(req, file, cb)
        {
            cb(null, "uploads")
        },
        filename : function(req, file, cb)
        {
            cb(null,  Date.now() + "-" + file.originalname)
        }
    })
}).array("user_file");


router.post('/',upload, postController.addPost)
router.get('/', postController.fetchPost)
router.put('/:postId', postController.updatePost)
router.delete('/:postId', postController.removePost)

module.exports = router;