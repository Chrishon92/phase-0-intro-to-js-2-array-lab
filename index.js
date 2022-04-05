const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function appendCat(name) {
    const allCats = [...cats, name]
    return allCats
}

function prependCat(name) {
    const allCats = [name, ...cats]
    return allCats
}

function removeLastCat() {
    return cats.slice(0, -1)
}

function removeFirstCat() {
    return cats.slice(1)
} 1
