const typingSymbols = (symbolParent) => {
    let symbol;
    let symbolCollection;

    if (!document.querySelector('.eng').classList.contains('hidden')) {
        symbolCollection = symbolParent.lastElementChild.children;
    } else {
        symbolCollection = symbolParent.firstElementChild.children;
    }

    for (let i = 0; i < symbolCollection.length; i += 1) {
        if (!symbolCollection[i].classList.contains('hidden')) {
            symbol = symbolCollection[i].innerHTML;
        }
    }
    return symbol;
};

export default typingSymbols;
