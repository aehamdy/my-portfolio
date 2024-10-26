/* eslint-disable react/prop-types */
import { quoteLeftIcon, quoteRighttIcon } from "../data/icons";

function QuoteCard({ quote }) {
  return (
    <article className={`flex flex-col gap-5 flex-shrink-0 w-full `}>
      <div className="relative w-full sm:w-4/5 md:w-3/4 lg:w-3/5 mx-auto p-2.5 text-medium-gray dark:text-white-55 duration-short">
        <span className="absolute top-0 start-0">{quoteLeftIcon}</span>
        <p className="text-smfont-light italic">{quote.content}</p>
        <span className="absolute bottom-0 end-0">{quoteRighttIcon}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-sm text-light-gray">Author</span>
        <span className="font-semibold text-dark-gray dark:text-white-90 duration-short">
          {quote.author}
        </span>
      </div>
    </article>
  );
}

export default QuoteCard;
