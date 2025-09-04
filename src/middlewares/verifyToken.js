import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "secret"

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) return res.status(401).json({ error: "Token Required"})

    const token = authHeader.split('')[1];

    try {
        const decode = jwt.verify(token, JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        res.status(401).json({ error: "Token tidak valid"})
    }
}