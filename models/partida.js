import conexao from '../config/conexao.js'

const Partida = conexao.Schema({
  timedecasa: { type: conexao.Schema.Types.ObjectId, ref: 'Time', required: true },
  timedefora: { type: conexao.Schema.Types.ObjectId, ref: 'Time', required: true },
  golcasa: { type: Number, required: true },
  golfora: { type: Number, required: true },
  datapartida: { type: String, required: true }
})

export default conexao.model('Partida', Partida)