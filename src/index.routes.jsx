import Add from "./Pages/Add";
import Basket from "./Pages/Basket";
import Detail from "./Pages/Detail";
import Edit from "./Pages/Edit";
import Favorite from "./Pages/Favorite";
import Home from "./Pages/Home";
import HomeQuery from "./Pages/HomeQuery";
import MainRoot from "./Pages/MainRoot";

const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                index: true,
                element: <Home />

            },
            {
                path: "Basket",
                element: <Basket />

            },
            {
                path: "HomeQuery",
                element: <HomeQuery />

            },
            {
                path: "Favorite",
                element: <Favorite />

            },
            {
                path: "Add",
                element: <Add />

            }, {
                path: "/edit/:id",
                element: <Edit />

            },
            {
                path: "/details/:id",
                element: <Detail />

            },
        ]
    }
]

export default ROUTES