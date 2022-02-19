exports.index = function(req, res){



    let {username, password} = req.body;



    return res.status(200).json({
        message: 'hello soulath',
        username: username,
        password: password,

    })

}