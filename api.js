const {Router} = require('express');
const router = Router();
const fetch = require('node-fetch');


router.post('/',async (req,res) => {
    try {
        let request_body = req.body;
        let from = request_body.from;
        console.log(request_body);
        res.send({success: true});

        send_back_req(from)

        function send_back_req(url) {
            fetch(url)
            .catch((e)=>{console.log(e)})
        }
    }
    catch (err) {
        res.send({success: false, error: err});
    }
})

module.exports = router;
