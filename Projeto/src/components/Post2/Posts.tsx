import { Outlet, useParams, useSearchParams } from "react-router-dom";
import "./srtles.css";


export const Posts = () => {
    const params = useParams();
const {id} = params;
const [qs] = useSearchParams();

return(
    <div>
   <h1>
    Página Post {`Para: ${id}`} {`QS: ${qs.get('segunda')}`}
    </h1>;
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia sit quis culpa voluptatibus hic impedit iste atque repudiandae aspernatur odit officiis nobis, vel qui sequi suscipit adipisci repellat? Consequuntur, beatae!</p>
    <Outlet/>
   </div>
);
};
