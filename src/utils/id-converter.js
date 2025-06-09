export function convertNameToId(name) {
    if (!name || typeof name !== 'string') {
        return '';
    }
    return name.toLowerCase().replace(/ /g, '-');
}