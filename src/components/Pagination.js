import React from "react";
import "../css/Pagination.css";

const Pagination = ({
children,
itemsPerPage,
handleClickNext,
handleClickPrev,
totalItems,
currentPage,
handleClickPage,
}) => {
const totalPages = Math.ceil(totalItems / itemsPerPage);

const renderPaginationButtons = () => {
    const pageButton = (num) => (
    <button
        onClick={() => handleClickPage(num)}
        disabled={num === currentPage}
    >
        {num}
    </button>
    );
    const prevButtonEl = (
    <button onClick={handleClickPrev} disabled={currentPage === 1}>
        Prev
    </button>
    );

    const nextButtonEl = (
    <button onClick={handleClickNext} disabled={currentPage === totalPages}>
        Next
    </button>
    );

    const firstFiveButtonsEl = Array(5)
    .fill()
    .map((_, index) => index + 1)
    .map((num) => pageButton(num));

    const lastFiveButtonsEl = Array(5)
    .fill()
    .map((_, index) => totalPages - 4 + index)
    .map((num) => pageButton(num));

    const currentPageButtonCluster = Array(3)
    .fill()
    .map((_, index) => currentPage + index - 1)
    .map((num) => pageButton(num));

    const ellipsis = <div>...</div>;

    const firstButtonEl = pageButton(1);
    const lastButtonEl = pageButton(totalPages);

    let pageButtons;

    if (totalPages <= 7) {
    pageButtons = Array(totalPages)
        .fill()
        .map((_, index) => pageButton(index + 1));
    } else {
    if (currentPage <= 4) {
        pageButtons = [...firstFiveButtonsEl, ellipsis, lastButtonEl];
    } else if (currentPage > 4 && currentPage < totalPages - 3) {
        pageButtons = [
        firstButtonEl,
        ellipsis,
        ...currentPageButtonCluster,
        ellipsis,
        lastButtonEl,
        ];
    } else {
        pageButtons = [firstButtonEl, ellipsis, ...lastFiveButtonsEl];
    }
    }

    return [prevButtonEl, ...pageButtons, nextButtonEl].map((item, key) => 
    React.cloneElement(item, {key})
);
};

return (
    <div className="pagination--container">
    {children}
    <div className="pagination--button-set">
        {totalItems > 0 && renderPaginationButtons()}
    </div>
    </div>
);
};

export default Pagination;