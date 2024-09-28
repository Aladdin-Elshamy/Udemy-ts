export default function CartPopup() {
  return (
    <div className="pt-8 font-medium w-52 z-40">
      <div className="flex flex-col gap-2 p-2 text-center bg-white shadow-lg border">
        <p className="text-gray-400">Your cart is empty</p>
        <a href="#" className="text-primary text-sm">
          keep shopping
        </a>
      </div>
    </div>
  );
}
