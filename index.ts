import express from "express"; 
import cuisines from './routes/cuisines.js'
import restaurants from "./routes/restaurants.js"

const PORT= process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use("/cuisines", cuisines);
app.use("/restaurants", restaurants);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on("error", (err) => {
    throw new Error (err.message);
})