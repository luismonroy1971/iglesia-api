import express from "express";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";

import authRoutes from "./routes/auth.routes";
import specialRoutes from "./routes/special.routes";
import churchRoutes from "./routes/churchs.routes";
import departmentRoutes from "./routes/departments.routes";
import provinceRoutes from "./routes/provinces.routes";
import districtRoutes from "./routes/districts.routes";

// inicializaciones
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddleware);

app.use(churchRoutes);
app.use(authRoutes);
app.use(specialRoutes);
app.use(provinceRoutes);
app.use(departmentRoutes);
app.use(districtRoutes);

app.use((req, res, next) => {
  const error: any = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error: any, req: any, res: any, next: any) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

export default app;
