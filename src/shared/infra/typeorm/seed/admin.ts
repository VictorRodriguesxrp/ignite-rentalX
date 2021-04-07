import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const db = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  await db.query(
    `INSERT INTO users (id, name, email, password, "isAdmin", created_at, driver_license)
     VALUES ('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXX')
    `
  );

  await db.close;
}

create().then(() => console.log("user admin created"));
