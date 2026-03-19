import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig, migrate } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Works } from "./collections/Works";

import { Bio, Contact } from "./payload-globals";
import { migrations } from "./migrations";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Works],
  editor: lexicalEditor(),
  globals: [
    Bio,
    Contact
  ],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: (process.env.NODE_ENV == "production" ? 
        `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@db:5432/${process.env.DB}` : 
        `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB}`
      ) ,
    },
    prodMigrations: migrations,
  }),
  sharp,
  plugins: [],
});
