import conexao from '../config/conexao.js'

const Partida = conexao.Schema({
    timedecasa:{type:conexao.Schema.Types.ObjectId, ref:'Time', required:true},
    
    resultado:{type:conexao.Schema.Types.ObjectId, ref:'golcasa', 
               type:conexao.Schema.Types.ObjectId, ref:'golfora'},

    timedefora:{type:conexao.Schema.Types.ObjectId, ref:'Time', required:true},
    datapartida:{type:String, required:true}
})

export default conexao.model('Partida',Partida)
