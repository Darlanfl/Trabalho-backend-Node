const z = require("zod");

const UserSchema = z.object({
  name: z.string({
    required_error: "O nome deve ser obrigatório",
    invalid_type_error: "O nome deve ser uma string",
  })
    .min(3),
  email: z.string({
    required_error: "A descrição deve ser obrigatória",
    invalid_type_error: "A descrição deve ser uma string",
  })
    .email("Este não é um e-mail válido."), 
  password: z.string({
    required_error: "A senha deve ser obrigatória",
    invalid_type_error: " A senha deve ser uma string",
  })
    .min(8, "Deve ter pelo menos 8 caracteres")
    .regex(new RegExp('.*[A-Z].*'), "One uppercase character")
    .regex(new RegExp('.*[a-z].*'), "One lowercase character")
    .regex(new RegExp('.*[0-9].*'), "One number")
    .regex(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'), "One special character"),
});

module.exports = {
  UserSchema
}