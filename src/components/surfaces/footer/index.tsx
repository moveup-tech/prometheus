export type FooterProps = {
  title: string;
};

export function Footer({ title }: FooterProps) {
  return (
    <footer className="item-center flex w-full justify-center bg-zinc-100 p-4 text-xs text-zinc-700">
      {title} &copy; | {new Date().getFullYear()} | Todos os direitos reservados
    </footer>
  );
}
