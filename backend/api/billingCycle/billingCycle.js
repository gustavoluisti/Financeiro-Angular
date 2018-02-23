const restful = require('node-restful')
const mongoose = restful.mongoose
const creditSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Informe o nome crédito']},
    value: {type: Number, min: 0, required: [true, 'Informe o valor crédito']}
})
const debtSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Informe o nome Débito']},
    value: {type: Number, min: 0, required: [true, 'Informe o valor do Débito']},
    status: {type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO', 'CANCELADO']}
})
const billingCycleSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Informe o nome']},
    month: {type: Number, min: 1, max: 12, required: [true, 'Informe o mês de 1 a 12']},
    year: {type: Number, min: 1970, max: 2100, required: [true, 'Informe o ano']},
    credits: [creditSchema],
    debts: [debtSchema]
})
module.exports = restful.model('BillingCycle', billingCycleSchema)
