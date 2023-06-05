const z = require("zod");

const RecipeSchema = z.object({
  name: z.string({
    required_error: "O nome deve ser obrigatório",
    invalid_type_error: "O nome deve ser uma string",
  }),
  description: z.string({
    required_error: "A descrição deve ser obrigatória",
    invalid_type_error: "A descrição deve ser uma string",
  }), 
  preparationTime: z.number({
    required_error: "O tempo de preparação deve ser obrigatório",
  }).min(0),
});

module.exports = {
  RecipeSchema
}