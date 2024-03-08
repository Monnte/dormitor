
export default function Divider({position, length}) {
  return (
    <div className={`${position !== length-1 ? 'border-t border-l border-gray-700' : ''}`}></div>
  );
}
