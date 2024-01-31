const scrollPositions = {}

export const saveScrollPosition = (path) => {
    scrollPositions[path] = window.scrollY
    //console.log(`Saved scroll position for ${path}: ${window.scrollY}`);
}

export const restoreScrollPosition = (path) => {
  //console.log(`Restoring scroll position for ${path}: ${scrollPositions[path]}`);
    if (scrollPositions[path]) {
        window.scrollTo(0, scrollPositions[path])
        delete scrollPositions[path]
    } else {
        window.scrollTo(0, 0)
    }
}
