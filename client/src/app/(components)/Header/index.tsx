type HeaderProps = {
  name: String;
};

const Header = ({ name }: HeaderProps) => {
  return <div className="text-2xl font-semibold text-gray-800">{name}</div>;
};

export default Header;
