import { HomeIcon, UserRound, File, LogOut } from "lucide-react";
import Link from "next/link";
import NavButton from "@/components/NavButton";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex w-[100%] items-center justify-center">
      <nav className="flex min-w-3xl mx-auto items-center justify-between  py-1">
        <div className="flex items-center gap-2">
          <NavButton icon={HomeIcon} label="Home" href="/home" />
          <Link href={"/home"}>
            <h4>Dev&apos;s Ripear Dash</h4>
          </Link>
        </div>

        <div className="right">
          <NavButton icon={File} label="Tickets" href="/tickets" />
          <NavButton icon={UserRound} label="Coustomer" href="/coustomers" />
          <Button asChild>
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
