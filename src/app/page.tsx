import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ModeToggle />
      <Link
        className="p-2 bg-foreground text-background rounded"
        href="/signout">
        Signout
      </Link>
    </main>
  );
}
