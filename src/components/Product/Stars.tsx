interface Props {
  rating: number;
  width?: number;
  height?: number;
}
export default function Stars(props: Props) {
  const size = Array(props.rating).fill(0);
  return (
    <div className="flex flex-row">
      {size.map((_, i) => (
        <svg
          width={props.width ?? 12}
          height={props.height ?? 12}
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 0L12.3884 5.02449L18.0595 6.21885L14.1735 10.5185L14.7901 16.2812L9.5 13.914L4.20993 16.2812L4.82651 10.5185L0.940492 6.21885L6.61162 5.02449L9.5 0Z"
            fill="#FFD700"
          />
        </svg>
      ))}
    </div>
  );
}
