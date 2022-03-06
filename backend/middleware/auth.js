const jsontoken = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.header('Authorization').split(' ')[1];
        const decodedToken = jsontoken.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID non valide';
        }
        else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error ('Requête non authentifiée !')
        })
    }
        
}
