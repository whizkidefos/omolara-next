import Link from "next/link";
import { RiFacebookLine, RiTwitterLine, RiInstagramLine, RiBehanceLine, RiDribbbleLine, RiPinterestLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center text-lg gap-x-5">
      <Link href="/" target="_blank" className="transition-all duration-300 hover:text-accent"><RiBehanceLine /></Link>
      <Link href="/" target="_blank" className="transition-all duration-300 hover:text-accent"><RiFacebookLine /></Link>
      <Link href="/" target="_blank" className="transition-all duration-300 hover:text-accent"><RiTwitterLine /></Link>
      <Link href="/" target="_blank" className="transition-all duration-300 hover:text-accent"><RiInstagramLine /></Link>
      <Link href="/" target="_blank" className="transition-all duration-300 hover:text-accent"><RiDribbbleLine /></Link>
      <Link href="/" target="_blank" className="transition-all duration-300 hover:text-accent"><RiPinterestLine /></Link>
    </div>
  );
};

export default Socials;
