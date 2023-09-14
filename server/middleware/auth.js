module.exports = async function (req, res, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ message: 'Authentication failed' });
    }
};