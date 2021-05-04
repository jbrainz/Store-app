import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@email.com',
    password: bcrypt.hashSync('welcome', 10),
    isAdmin: true,
  },
  {
    name: 'Custom user',
    email: 'custom@email.com',
    password: bcrypt.hashSync('welcome', 10),
  },
  {
    name: 'Pius new',
    email: 'pius@email.com',
    password: bcrypt.hashSync('welcome', 10),
  },
]

export default users
