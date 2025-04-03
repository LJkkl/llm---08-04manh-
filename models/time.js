import conexao from '../config/conexao.js'

const Time = conexao.Schema({
    nome: {type:String, required:true},
    estadio:{type:String, required:true},
    classificacao:{type:Number, required:true},
    datafundacao:{type:String, required:true}
})

export default conexao.model('Time',Time)
