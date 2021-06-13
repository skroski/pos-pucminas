import { Route } from "react-router";
import { Home } from "./views/Home";
import { MovieDetail } from "./views/MovieDetail"
export const ApplicationRoutes = () => (
    <>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/movie/:id" component={MovieDetail}></Route>
     
    </>
)