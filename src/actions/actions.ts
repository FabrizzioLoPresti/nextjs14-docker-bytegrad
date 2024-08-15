"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const addTask = async (formData: FormData) => {
  try {
    const newTask = await prisma.task.create({
      data: {
        title: formData.get("title") as string,
      },
    });
    console.log(newTask);
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};
