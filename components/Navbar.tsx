"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { setTheme } = useTheme();

  return (
    <div>
      <SectionWrapper>
        <nav className="flex justify-between items-center py-8">
          <div>
            <h1 className="font-bold text-4xl">Lergncy</h1>
          </div>

          <div className="text-primary">
            <Link href="#about" className="mr-6">
              About us
            </Link>
            <Link href="#projects" className="mr-6">
              Projects
            </Link>
            <Link href="#services" className="mr-6">
              Services
            </Link>
            <Link href="#contact" className="mr-6">
              Contact us
            </Link>
          </div>

      <div className="flex items-center">
        <div className="mr-2 relative">
          <input
            type="text"
            placeholder="Find your service..."
            className="h-10 rounded border px-2 bg-white"
          />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none" className="absolute"
          >
            <path
              d="M12.3706 12.719L14.9998 15.3415M14.4127 7.70634C14.4127 11.4102 11.4102 14.4127 7.70634 14.4127C4.00253 14.4127 1 11.4102 1 7.70634C1 4.00253 4.00253 1 7.70634 1C11.4102 1 14.4127 4.00253 14.4127 7.70634Z"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg> */}
        </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </SectionWrapper>
    </div>
  );
}
