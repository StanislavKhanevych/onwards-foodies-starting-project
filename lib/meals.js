import fs from "fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = new sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function createMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extention = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extention}`;

  const stream = fs.createWriteStream("public/images/" + filename);

  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) {
      throw new Error("Failed to save image");
    }
  });

  meal.image = "/images/" + filename;

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)`
  ).run(meal);
}
