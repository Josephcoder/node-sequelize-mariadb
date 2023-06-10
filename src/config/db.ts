import { Sequelize } from 'sequelize';

const { DB_PORT, DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;
export const sequelize = new Sequelize({
  dialect: 'mariadb', 
  database: DB_NAME || '', 
  username: DB_USER || 'root',
  password: DB_PASS || '',
  host: DB_HOST || 'localhost', 
  port: parseInt(DB_PORT || '3306', 10), 
  define: {
    timestamps: true,
    underscored: false,
  },
});

