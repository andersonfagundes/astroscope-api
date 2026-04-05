import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.JWT_SECRET;

const token = jwt.sign({ access: 'apod-epic' }, secret, { expiresIn: '7d' });

console.log('Use este token no header Authorization:');
console.log(token);
