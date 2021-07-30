export const createAction = (name) => ({
        LOADING: `${name}-loading`,
        SUCCESS: `${name}-success`,
        FAILURE: `${name}-failure`,
});
