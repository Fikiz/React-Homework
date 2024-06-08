import { Region } from "../common/region.enum";

type NavbarProps = {
    selectRegion: (region: Region | null ) => void;
};

export default function Navbar({selectRegion}: NavbarProps) {
    const regions = Object.values(Region);
  return (
    <header className="flex jusify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">Travell Agency</h1>
        <nav>
            <ul className="flex gap-x-4">
                <li onClick={() => selectRegion(null)}>Home</li>
                {regions.map(region => (
                    <li onClick={() => selectRegion(region)}>{region}</li>
                ))}
            </ul>
        </nav>
    </header>
  );
}
