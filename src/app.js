import express from "express";
import connect from "./schemas/index.js";
import productsRouter from "./routers/products.router.js";

const app = express();
const PORT = 3000;

// ./schemas/index.js connect로 MongoDB와 연결!
connect();

// Express에서 req.body에 접근하여 body 데이터를 사용할 수 있도록 설정합니다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 시간적 여유가 생겨서 FrontEnd까지 완성할 수 있는 경우 활성화하기
// app.use(express.static("./assets"));

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message1: "NINE-SHOP!",
    message2: "1. 상품 생성 API [POST] '/products'",
    message3: "2. 상품 조회 API [GET] '/products'",
    message4: "3. 상품 상세 조회 API [GET] '/products/:id'",
    message5: "4. 상품 수정 API [PATCH] '/products/:id'",
    message6: "5. 상품 삭제 API [DELETE] '/products/:id'",
    message7: "THANK-YOU!",
  });
});

// router와 productsRouter로 클라이언트의 요청이 전달된다!
app.use("/", [router, productsRouter]);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!!");
});
