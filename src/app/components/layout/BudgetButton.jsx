import Link from "next/link";

const BudgetButton = () => {
  return (
    <Link
      href="https://moacyrcontabil.com.br/inicio"
      className="p-3 border border-yellow-500 text-yellow-500 rounded-2xl hover:bg-yellow-500 hover:text-black"
      target="blank"
    >
      Solicitar Orçamento
    </Link>
  );
};

export default BudgetButton;
