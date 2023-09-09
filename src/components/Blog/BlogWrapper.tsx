interface Props {
  id?: string;
  children?: any;
}
export default function BlogWrapper(props: Props) {
  return (
    <section id={props.id} className="p-6 pt-0 py-3 flex flex-col gap-3">
      {props.children}
    </section>
  );
}
