import LayoutDefault from "../layout/LayoutDefault";
import CreateRoom from "../pages/createRoom";
import Dashboard from "../pages/Dashboard";
import ListRoom from "../pages/ListRoom";
import BookRoom from "../pages/Room";



export const routes = [

    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/book-room",
                element: <BookRoom />
            },
            {
                path: "/create-room",
                element: <CreateRoom />
            },
            {
                path: "/list-room",
                element: <ListRoom />
            },
        ]

    }
]
