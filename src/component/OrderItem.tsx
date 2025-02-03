import { IProduct } from '../features/product/productSlice';

function OrderItem({
  product,
  quantity,
}: {
  product: IProduct;
  quantity: number;
}) {
  return (
    <div className="flex items-center border border-gray-[2px] rounded-lg mb-2 justify-start px-4">
      <div className="mr-2">
        <img
          className="w-16 h-16"
          src={product?.images[0]}
          alt={product?.title}
        />
      </div>
      <div className="flex flex-col">
        <h2>{product.title}</h2>
        <p>${product?.price}</p>
        <p>{quantity}</p>
        <div></div>
      </div>
    </div>
  );
}

export default OrderItem;
