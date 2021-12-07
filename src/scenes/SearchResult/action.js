export const action_type = {
    SEARCH: {
        REQUEST: "SEARCH.REQUEST",
        SUCCESS: "SEARCH.SUCCESS",
        ERROR: "SEARCH.ERROR"
    },

}

export function getList (params)
{
    return {
        type: action_type.SEARCH.REQUEST,
        params
    }
}
