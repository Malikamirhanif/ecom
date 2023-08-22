const BASE_PATH_URL:string=process.env.NODE_ENV==="development"? "http://localhost:3000":"https://ecommerce-ten-taupe.vercel.app";

export default BASE_PATH_URL;