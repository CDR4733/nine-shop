import mongoose from "mongoose";
// .env 파일 사용을 위해서는 여기에 패키지 import가 필요합니다.
import dotenv from "dotenv";
dotenv.config();

const connect = () => {
  // mongoose.connect는 MongoDB 서버에 연결하는 메서드입니다.
  mongoose
    .connect(
      // .env 파일에 민감한 정보를 추가해 사용합니다.
      "mongodb+srv://sparta-user:aaaa4321@express-mongo.bgtlgzi.mongodb.net/?retryWrites=true&w=majority&appName=express-mongo",
      {
        dbName: "nine_shop",
      },
    )
    .then(() => console.log("MongoDB 연결에 성공하였습니다."))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on("error", (err) => {
  console.error("MongoDB 연결 에러", err);
});

export default connect;
