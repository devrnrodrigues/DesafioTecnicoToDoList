import { z } from "zod";

export const registerSchema = z.object({

  name: z
    .string({
      error: "Nome deve ser um texto",
    })
    .trim()
    .min(1, "Nome é obrigatório")
    .min(3, "Nome deve ter no mínimo 3 caracteres"),

  email: z
    .string({
      error: "Email deve ser um texto",
    })
    .trim()
    .min(1, "Email é obrigatório")
    .email("Digite um email válido"),

  password: z
    .string({
      error: "Senha deve ser um texto",
    })
    .trim()
    .min(1, "Senha é obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export const loginSchema = z.object({

  email: z
    .string({
      error: "Email deve ser um texto",
    })
    .trim()
    .min(1, "Email é obrigatório")
    .email("Digite um email válido"),

  password: z
    .string({
      error: "Senha deve ser um texto",
    })
    .trim()
    .min(1, "Senha é obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
});