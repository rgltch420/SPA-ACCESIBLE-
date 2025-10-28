import admin from "firebase-admin";
import { createRequire, CreateRequire } from "module";
const require = createRequire (import.meta.url);

const serviceAccount = require ("./arqosfirebas.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
