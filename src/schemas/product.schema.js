// 1. mongoose 가져오기
import mongoose from "mongoose";

// 2. schema 작성하기
const productsSchema = new mongoose.Schema({
  // 상품ID (String/자동부여/유니크) // MongoDB의 _id로 대체
  //   id: {
  //     type: String,
  //     required: false,
  //     unique: true,
  //   },
  // 상품명 (String/필수/유니크)
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // 상품설명 (String/필수)
  description: {
    type: String,
    required: true,
  },
  // 담당자 (String/필수)
  manager: {
    type: String,
    required: true,
  },
  // 비밀번호 (String/필수)
  password: {
    type: String,
    required: true,
  },
  // 상품상태 (String/초기부여 및 수정부여)
  status: {
    type: String,
    enum: ["FOR_SALE", "SOLD_OUT"],
    default: "FOR_SALE",
  },
  // 생성일시 (Date/자동부여)
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // 수정일시 (Date/자동부여 및 수정부여)
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// 3. schema를 통해 모델 구현하기 + 4. 모델 외부로 보내기
export default mongoose.model("Products", productsSchema);
