interface Props {
  text?: string;
  isError?: boolean;
  className?: string;
}

const Message = ({ text, isError, className = '' }: Props) => {
  return (
    <p
      className={`${className} text-center py-2 rounded-md text-white font-bold ${
        isError ? 'bg-red-400/80' : 'bg-green-400'
      }`}
    >
      {text}
    </p>
  );
};

export default Message;
