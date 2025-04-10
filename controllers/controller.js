import Time from '../models/time.js';
import Jogador from '../models/jogador.js';
import Partida from '../models/partida.js';
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
    const resultado = await Time.find({}).catch(function(err){console.log(err)})
    res.render('admin/jogador/add',{Times:resultado})
}
export async function addjogador(req, res) {
    var jtime = null;
    if(req.body.time!=null)
    {
        jtime = await Time.findById(req.body.time)
    }
    await Jogador.create({
        nome:req.body.nome,
        camisa:req.body.camisa,
        time:jtime,
        posicao:req.body.posicao
    })
    res.redirect('/admin/jogador/add')
}
export async function listarjogador(req, res) {
    const resultado = await Jogador.find({}).populate('time').catch(function(err){console.log(err)});
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
    const jtimes = await Time.find({}).catch(function(err){console.log(err)})
    res.render('admin/jogador/edt',{Jogador: resultado,Times:jtimes})
}
export async function edtjogador(req, res){
    await Jogador.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/jogador/lst')
}


export async function abreaddpartida(req, res) {
    res.render('admin/partida/add')
}
export async function addpartida(req, res) {
    await Partida.create({
        timedecasa:req.body.timedecasa,
        resultado:req.body.resultado,
        timedefora:req.body.timedefora,
        datapartida:req.body.datapartida,
        golcasa:req.body.golcasa,
        golfora:req.body.golfora
    })
    res.redirect('/admin/partida/add')
}
export async function listarpartida(req, res) {
    const resultado = await Partida.find({}).catch(function(err){console.log(err)});
    res.render('admin/partida/lst',{Partidas: resultado});
}
export async function filtrarpartida(req, res) {
    const resposta = await Partida.find({nome: new RegExp(req.body.pesquisar,"i")})
    res.render('admin/partida/lst',{Partidas: resposta});
}

export async function deletapartida(req, res) {
    await Partida.findByIdAndDelete(req.params.id)
    res.redirect('/admin/partida/lst')
}

export async function abreedtpartida(req, res){
    const resultado = await Partida.findById(req.params.id)
    res.render('admin/partida/edt',{Partida: resultado})
}

export async function edtpartida(req, res){
    await Partida.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/partida/lst')
}