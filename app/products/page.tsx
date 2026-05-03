import { PlusIcon } from "lucide-react";
import Header from "../_components/header";
import { DataTable } from "../_components/ui/data-table";
import { columns } from "./_components/table-columns";
import { getProducts } from "../_data-access/products/get-products";

const Products = async () => {
  const products = await getProducts();

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
