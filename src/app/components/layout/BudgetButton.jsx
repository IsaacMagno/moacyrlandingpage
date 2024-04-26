import Link from "next/link";

const BudgetButton = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
      className="p-3 border border-yellow-500 text-yellow-500 rounded-2xl hover:bg-yellow-500 hover:text-black "
      target="blank"
    >
      Entre em contato
    </Link>
  );
};

export default BudgetButton;
