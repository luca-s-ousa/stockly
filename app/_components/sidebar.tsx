import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
  return (
    <aside className="flex w-60 flex-col bg-white text-[#00A180]">
      <div className="px-8 py-6">
        <h1 className="text-start text-2xl font-black">STOCKLY</h1>
      </div>
      <nav className="flex flex-col gap-2 p-2">
        <SidebarButton href="/">
          <LayoutGridIcon size={20} />
          Dashboard
        </SidebarButton>
        <SidebarButton href="/products">
          <PackageIcon size={20} />
          Produtos
        </SidebarButton>
        <SidebarButton href="/sales">
          <ShoppingBasketIcon size={20} />
          Vendas
        </SidebarButton>
      </nav>
    </aside>
  );
};

export default Sidebar;
