import { FC } from "react";

const Navbar: FC = () => {
    return (
        <div className="py-5 bg-primaryblue border-b-4 border-slate-500">
            <nav className="container mx-auto flex justify-between">
                <img alt="logo" src="logo" />

                <ul className="flex list-none gap-3">
                    <li>navlink</li>
                    <li>navlink</li>
                    <li>navlink</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;