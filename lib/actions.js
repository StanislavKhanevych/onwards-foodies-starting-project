"use server";

import { createMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const isInvalidForm = (text) => {
  return text.trim() === "" || !text;
};
export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidForm(meal.title) ||
    isInvalidForm(meal.summary) ||
    isInvalidForm(meal.instructions) ||
    isInvalidForm(meal.creator) ||
    isInvalidForm(meal.creator_email) ||
    meal.creator_email.indexOf("@") === -1 ||
    !meal.image ||
    meal.image.name.size === 0
  ) {
    return { message: "Invalid form submission" };
  }

  await createMeal(meal);
  revalidatePath("/meals", "layout");
  redirect("/meals");
};
