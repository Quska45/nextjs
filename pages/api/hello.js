// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/*
*  req는 미리 빌드되어 있던 미들웨어가 더해진 http.IncomingMessage 인스턴스입니다.
*  res는 helper functions가 더해진 http.ServerResponse 인스턴스입니다.
* */
export default function handler(req, res) {
  console.log(req);
  console.log(res);
  res.status(200).json({ name: 'John Doe' })
}
