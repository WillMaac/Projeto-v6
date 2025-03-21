import { useParams, useSearchParams } from "react-router-dom";
import "./srtles.css";


export const Post = () => {
    const params = useParams();
const {id} = params;
const [qs] = useSearchParams();

return(
    <div>
   <h1>
    Página Post {`Para: ${id}`} {`QS: ${qs.get('segunda')}`}
    </h1>;
   </div>
);
};
