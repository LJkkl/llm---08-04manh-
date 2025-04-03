import conexao from '../config/conexao.js'

const Jogador = conexao.Schema({
    nome: {type:String, required:true},
    camisa:{type:String, required:true},
    time:{type:String, required:true},
    posicao:{type:String, required:true}
})

export default conexao.model('Jogador',Jogador)
