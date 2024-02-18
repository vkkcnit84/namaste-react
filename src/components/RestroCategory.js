import Item from "./ItemList";

const RestroCategory = ({card, showIndex, setShowIndex}) => {
  handleclick = () => {
    setShowIndex();
  };

  return (
    <div className="bg-gray-100 w-6/12 shadow-lg items-center mx-auto my-4 p-4">
      <div className="flex justify-between cursor-pointer"
        onClick={handleclick}
      >
        <span className="font-bold">
          {card.card.title} ({card.card.itemCards.length})
        </span>
        <span>{console.log(card.card.itemCards)}</span>
        <span className="">+</span>
      </div>
      <div>
      {/* {console.log('CART COMP1:', card.card.itemCards)} */}
       { showIndex && <Item items={card.card.itemCards} />}
      </div>
    </div>
  );
};
export default RestroCategory;
