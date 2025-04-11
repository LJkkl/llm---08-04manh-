

import express from 'express';
const router = express.Router();
import {
    home,
    abreedttime,
    edttime,
    abreaddtime,
    deletatime,
    addtime,
    listartime,
    filtrartime,


    abreedtjogador,
    edtjogador,
    abreaddjogador,
    deletajogador,
    addjogador,
    listarjogador,
    filtrarjogador,


    abreedtpartida,
    edtpartida,
    abreaddpartida,
    deletapartida,
    addpartida,
    listarpartida,
    filtrarpartida,
} from '../controllers/controller.js'
router.get('/', home)
//time
//create do modelo time (create)
router.get('/admin/time/add', abreaddtime)
router.post('/admin/time/add', addtime)
//rotas do modelo time (read)
router.get('/admin/time/lst', listartime)
router.post('/admin/time/lst', filtrartime)
//rota do modelo time (delete)
router.get('/admin/time/del/:id', deletatime)
//rota do modelo time (editar)
router.get('/admin/time/edt/:id', abreedttime)
router.post('/admin/time/edt/:id', edttime)


router.get('/admin/jogador/add', abreaddjogador)
router.post('/admin/jogador/add', addjogador)
//rotas do modelo jogador (read)
router.get('/admin/jogador/lst', listarjogador)
router.post('/admin/jogador/lst', filtrarjogador)
//rota do modelo jogador (delete)
router.get('/admin/jogador/del/:id', deletajogador)
//rota do modelo jogador (editar)
router.get('/admin/jogador/edt/:id', abreedtjogador)
router.post('/admin/jogador/edt/:id', edtjogador)

router.get('/admin/partida/add', abreaddpartida)
router.post('/admin/partida/add', addpartida)
//rotas do modelo partida (read)
router.get('/admin/partida/lst', listarpartida)
router.post('/admin/partida/lst', filtrarpartida)
//rota do modelo partida (delete)
router.get('/admin/partida/del/:id', deletapartida)
//rota do modelo partida (editar)
router.get('/admin/partida/edt/:id', abreedtpartida)
router.post('/admin/partida/edt/:id', edtpartida)

    
export default router