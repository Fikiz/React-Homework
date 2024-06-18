import { Region } from "../common/region.enum";
import { Link, NavLink } from "react-router-dom";

type NavbarProps = {
    selectRegion: (region: Region | null) => void;
};

export default function Navbar({ selectRegion }: NavbarProps) {
    const regions = Object.values(Region);

    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-xl font-bold">
                <Link to='/' onClick={() => selectRegion(null)}>Travel Agency</Link>
            </h1>

            <nav>
                <ul className="flex gap-x-4">
                    <li onClick={() => selectRegion(null)}>
                        <Link to='/'>Home</Link>
                    </li>
                    {regions.map(region => (
                        <li key={region}>
                            <NavLink
                                to={`/region/${region}`}
                                className={({ isActive, isPending }) => {
                                    if (isActive) return 'text-neutral-400';
                                    if (isPending) return 'text-neutral-200';
                                    return 'text-white';
                                }}
                                onClick={() => selectRegion(region as Region)}
                            >
                                {region}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
