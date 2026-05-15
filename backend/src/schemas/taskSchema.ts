import { z } from "zod";

export const createTaskSchema = z.object({

  title: z
    .string({
      error: "Título deve ser um texto",
    })
    .trim()
    .min(1, "Título é obrigatório"),

  description: z
    .string({
      error: "Descrição deve ser um texto",
    })
    .trim()
    .optional(),

  completed: z
    .boolean({
      error: "O campo completed deve ser verdadeiro ou falso",
    })
    .optional(),
});

export const updateTaskSchema = z.object({

  title: z
    .string({
      error: "Título deve ser um texto",
    })
    .trim()
    .min(1, "Título não pode ser vazio")
    .optional(),

  description: z
    .string({
      error: "Descrição deve ser um texto",
    })
    .trim()
    .optional(),

  completed: z
    .boolean({
      error: "O campo completed deve ser verdadeiro ou falso",
    })
    .optional(),
});