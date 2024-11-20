import { MongoClient } from 'mongodb';

const connectToDatabase = async (uri) => {
  let mongoClient;
  try {
    mongoClient = new MongoClient(uri);
    await mongoClient.connect();
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    return mongoClient;
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB Atlas:', error);
    process.exit(1); // Finaliza o processo em caso de erro
  }
};

export { connectToDatabase };
