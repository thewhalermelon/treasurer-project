'use client';

interface IProps {
  content?: string;
  className?: string;
}

const Button: React.FC<IProps> = ({ content, className }) => {
  const handleTrendingSearch = () => {
    return alert('Not implemented');
  };

  return (
    <button onClick={handleTrendingSearch} className={className}>
      {content}
    </button>
  );
};

export default Button;
