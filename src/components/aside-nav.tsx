interface AsideNavProps {
  className?: string;
  disabled?: boolean;
}

export const AsideNav = ({ disabled }: AsideNavProps) => {
  return disabled ? (
    <div className="bg-gray-400 rounded-r-2xl w-1/6">NavBar</div>
  ) : (
    " "
  );
};
