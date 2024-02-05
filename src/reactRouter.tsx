import { createBrowserRouter, RouterProvider, redirect, Outlet, Link } from "react-router-dom";
import ContainerT from "./components/Container"
import MarketPage from "./pags/Maketpage";
const Navbar: React.FC = () => {
    return (
        <div style={{ width: "100%", top: "0", zIndex: "9", position: "fixed" }} className=" shadow  border-primary border-y text-dark bg-white">

            <nav style={{ padding: 20 }}>
                <div className="flex gap-1 ">
                    <Link to="/">Home</Link>

                    <Link to="/blogs">Blogs</Link>
                </div>
                <div>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>


            {/*`<SideMenu />
                < ContactMenu />
    `*/}


        </div>
    );
};


const RouteReact = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <> <Navbar /> <div style={{ paddingTop: " 4rem", }}>  <Outlet /> </div></>,
            loader: ({ params, request }) => {


                redirect(request.url);
                return null
            },
            children: [
                {
                    index: true,
                    path: "",
                    element: <MarketPage />,
                },


                {
                    path: "blogs",
                    element: <ContainerT> {"<Blogs />"}</ContainerT>,
                },
                {
                    path: "example",
                    element: <p> {"<Example />"}</p>,
                },


                {
                    path: "*",
                    element: <> Nopage</>,
                },



            ],
        }
    ], {
        future: {
            // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
            v7_normalizeFormMethod: true,
        },
        basename: ""
    });








    return (

        <>


            <RouterProvider router={router} />

        </>
    );
}
export default RouteReact

