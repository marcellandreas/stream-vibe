import PropTypes from "prop-types";

export function AccordionItem({
  index,
  question,
  answer,
  activeIndex,
  handleToggle,
}) {
  return (
    <div className="md:w-1/2 min-h-[80px]">
      <div className="flex justify-center gap-4">
        <button className="bg-black-12 border border-black-15 h-16 w-16 rounded-xl">
          {index + 1}
        </button>
        <button
          onClick={() => handleToggle(index)}
          className="w-full text-left py-4 px-2 flex justify-between items-center transition-colors duration-200"
        >
          <span className="font-semibold text-lg">{question}</span>
        </button>
        <div
          onClick={() => handleToggle(index)}
          className="cursor-pointer text-d-h4 h-16 w-16 text-white grid place-content-center"
        >
          {activeIndex === index ? "-" : "+"}
        </div>
      </div>
      {activeIndex === index && (
        <div className="pl-20 py-6 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
      <div className="line" />
    </div>
  );
}

AccordionItem.propTypes = {
  index: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  activeIndex: PropTypes.number,
  handleToggle: PropTypes.func.isRequired,
};
