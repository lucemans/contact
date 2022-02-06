export const minorMerge = <K, U>(a: K, b: U) => {
    return Object.assign(a, b);
};

export const merge = (...a) => {
    return a.reduce((previous, current) => minorMerge(previous, current), {});
};
