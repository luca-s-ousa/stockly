import { PlusIcon } from "lucide-react";
import { db } from "../_lib/db";
import Header from "../_components/header";
import { DataTable } from "../_components/ui/data-table";
import { columns } from "./_components/table-columns";

const Products = async () => {
  const products = await db.product.findMany({});

  return (
    <div className="h-full space-y-8 bg-white p-8">
      <Header
        title="Produtos"
        subtitle="Gestão de Produtos"
        buttonText="Novo Produto"
        buttonIcon={<PlusIcon />}
      />
      <DataTable columns={columns} data={products} />
    </div>
  );
};

export default Products;
