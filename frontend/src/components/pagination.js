export default function Pagination({ index, setCurrentPage, currentPage }) {
  if (index < 0 || isNaN(index)) index = 1;
  const pages = new Array(index).fill().map((_, i) => i + 1);

  function pageCountComponent(page, i) {
    return (
      <div
        key={i}
        className={page === currentPage ? "text-white bg-[blue] rounded" : null}
      >
        <a
          key={page}
          className="m-2"
          onClick={() => {
            setCurrentPage(page);
          }}
        >
          {page}
        </a>
      </div>
    );
  }

  return (
    <nav className="bg-white h-16 flex justify-center items-center text-lg cursor-pointer w-[250px] mt-3 mb-2">
      <span
        className="text-xl ml-3 mr-5"
        onClick={currentPage > 1 ? () => setCurrentPage(currentPage - 1) : null}
      >
        ←
      </span>
      {index < 8
        ? pages.map((page, i) => {
            return pageCountComponent(page, i);
          })
        : currentPage >= index - 2
        ? pages.slice(index - 7, index).map((page, i) => {
            return pageCountComponent(page, i);
          })
        : currentPage < 7
        ? pages.slice(0, 7).map((page, i) => {
            return pageCountComponent(page, i);
          })
        : pages.slice(currentPage - 4, currentPage + 3).map((page, i) => {
            return pageCountComponent(page, i);
          })}
      {index > 5 && currentPage < index - 2 ? <span>...</span> : null}
      <span
        className="text-xl mr-3 ml-5"
        onClick={
          currentPage < index ? () => setCurrentPage(currentPage + 1) : null
        }
      >
        →
      </span>
    </nav>
  );
}
