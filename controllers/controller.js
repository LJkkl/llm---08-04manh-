import Time from '../models/time.js';
import Jogador from '../models/jogador.js';
export async function home(req, res) {
    res.render('admin/index')
}
export async function abreaddtime(req, res) {
    res.render('admin/time/add')
}
export async function addtime(req, res) {
    await Time.create({
        nome:req.body.nome,
        estadio:req.body.estadio,
        classificacao:req.body.classificacao,
        datafundacao:req.body.datafundacao
    })
    res.redirect('/admin/time/add')
}
export async function listartime(req, res) {
    const resultado = await Time.find({}).catch(function(err){console.log(err)});
    res.render('admin/time/lst',{Times: resultado});
}
export async function filtrartime(req, res) {
    const resposta = await Time.find({nome: new RegExp(req.body.pesquisar,"i")})
    res.render('admin/time/lst',{Times: resposta});
}

export async function deletatime(req, res) {
    await Time.findByIdAndDelete(req.params.id)
    res.redirect('/admin/time/lst')
}
export async function abreedttime(req, res){
    const resultado = await Time.findById(req.params.id)
    res.render('admin/time/edt',{Time: resultado})
}
export async function edttime(req, res){
    await Time.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/time/lst')
}


export async function abreaddjogador(req, res) {
    res.render('admin/jogador/add')
}
export async function addjogador(req, res) {
    await Jogador.create({
        nome:req.body.nome,
        camisa:req.body.camisa,
        time:req.body.time,
        posicao:req.body.posicao
    })
    res.redirect('/admin/jogador/add')
}
export async function listarjogador(req, res) {
    const resultado = await Jogador.find({}).catch(function(err){console.log(err)});
    res.render('admin/jogador/lst',{Jogados: resultado});
}
export async function filtrarjogador(req, res) {
    const resposta = await Jogador.find({nome: new RegExp(req.body.pesquisar,"i")})
    res.render('admin/jogador/lst',{Jogados: resposta});
}

export async function deletajogador(req, res) {
    await Jogador.findByIdAndDelete(req.params.id)
    res.redirect('/admin/jogador/lst')
}
export async function abreedtjogador(req, res){
    const resultado = await Jogador.findById(req.params.id)
    res.render('admin/jogador/edt',{Jogador: resultado})
}
export async function edtjogador(req, res){
    await Jogador.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/jogador/lst')
}


export async function abreaddpartida(req, res) {
    res.render('admin/partida/add')
}
export async function addpartida(req, res) {
    res.redirect('/admin/partida/add')
}
export async function listarpartida(req, res) {
    res.render('admin/partida/lst','')
}
export async function filtrarpartida(req, res) {
    res.render('admin/partida/lst','')
}

export async function deletapartida(req, res) {
   res.redirect('/admin/partida/lst')
}
export async function abreedtpartida(req, res){
   
    res.render('admin/partida/edt','')
}
export async function edtpartida(req, res){
    res.redirect('/admin/partida/lst')
}