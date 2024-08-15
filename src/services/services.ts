import prisma from "@/lib/db";

export const getTasks = async () => {
  try {
    return await prisma.task.findMany({
      orderBy: [
        {
          id: "asc",
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};
