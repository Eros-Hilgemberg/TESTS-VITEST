interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const Button = ({ className, disabled, label }: ButtonProps) => {
  return (
    <button disabled={disabled} className={className}>
      {label}
    </button>
  );
};
