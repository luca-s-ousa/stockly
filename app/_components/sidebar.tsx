const Sidebar = () => {
  return (
    <aside className="flex w-60 flex-col bg-white text-[#00A180]">
      <div className="px-8 py-6">
        <h1 className="text-start text-2xl font-black">STOCKLY</h1>
      </div>
      <nav className="flex flex-col gap-2 p-2">
        <button className="w-full rounded-lg bg-[#EBFAF7] px-4 py-2 text-start">
          Dashboard
        </button>
        <button className="w-full rounded-lg px-4 py-2 text-start">
          Produtos
        </button>
        <button className="w-full rounded-lg px-4 py-2 text-start">
          Vendas
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
