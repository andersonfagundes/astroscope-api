import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.JWT_SECRET;
export function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader)
    return res.status(401).json({ message: 'No token provided' });

  const parts = authHeader.split(' '); // "Bearer <token>"
  if (parts.length !== 2)
    return res.status(401).json({ message: 'Token malformed' });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).json({ message: 'Token malformed' });

  try {
    jwt.verify(token, secret); // valida o token
    next(); // token ok → continua para o controller
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
