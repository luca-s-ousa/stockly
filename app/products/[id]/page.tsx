interface Params {
  id: string;
}

const ProductDetailsPage = ({ params: { id } }: { params: Params }) => {
  return <div>Product: {id}</div>;
};

export default ProductDetailsPage;
