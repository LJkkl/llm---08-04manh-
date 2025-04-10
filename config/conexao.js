import mongoose from 'mongoose';

const url = "mongodb+srv://luan:luan@classi.au203n7.mongodb.net/";

const conexao = await mongoose.connect(url)
export default mongoose