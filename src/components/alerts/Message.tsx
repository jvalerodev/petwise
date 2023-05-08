interface Props {
  text?: string;
  isError?: boolean;
}

const Message = ({ text, isError }: Props) => {
  return (
    <p
      className={`text-center py-3 rounded-md text-white font-bold ${
        isError ? 'bg-red-400/80' : 'bg-green-400'
      }`}
    >
      {text}
    </p>
  );
};

export default Message;
