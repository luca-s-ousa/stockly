import { PlusIcon } from "lucide-react";
import Header from "../_components/header";
import { DataTable } from "../_components/ui/data-table";
import { columns } from "./_components/table-columns";
import { getProducts } from "../_data-access/products/get-products";

const Products = async () => {
  // Usar na maioria dos casos Data Access Layer
  const products = await getProducts();

  // Usar quando precisar de cache e a aplicacao tiver webhooks externos para expor a aplicacao
  // const response = await fetch("http://localhost:3000/api/products", {
  //   cache: "no-store",
  // });
  // const products = await response.json();

  return (
    <div className="h-full space-y-8 bg-white p-8">
      <Header
        title="Produtos"
        subtitle="Gestão de Produtos"
        buttonText="Novo Produto"
        buttonIcon={<PlusIcon />}
      />
      <DataTable
        columns={columns}
        data={JSON.parse(JSON.stringify(products))} // Serialização e desserialização para remover propriedades não serializáveis do prisma Ex: Decimal
      />
    </div>
  );
};

export default Products;
