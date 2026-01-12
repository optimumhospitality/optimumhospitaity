import { Outlet } from "react-router-dom";
import LocomotiveScrollProvider from "./LocomotiveScrollProvider";
import Navbar from "./layout/Navbar";

export default function RootLayout() {
    return (
        <LocomotiveScrollProvider navbar={<Navbar />}>
            <Outlet />
        </LocomotiveScrollProvider>
    );
}
