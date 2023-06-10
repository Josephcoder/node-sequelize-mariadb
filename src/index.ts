import { createApp } from "./app";
import { sequelize } from "./config";

(async () => {
  // Connect to the database
  await sequelize.authenticate();
  console.log('Database connected!');

  // Sync the database models with the database
  // await sequelize.sync({ alter: true });
  // console.log('Database synchronized!');

  // Start app
  const app = createApp();
  app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
  });
})();
