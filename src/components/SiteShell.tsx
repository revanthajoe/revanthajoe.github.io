import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Navbar /><main>{children}</main><Footer /></>;
}
