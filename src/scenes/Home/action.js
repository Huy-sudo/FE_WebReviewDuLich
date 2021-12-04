export const action_type = {
    CITY: {
        REQUEST: "CITY.REQUEST",
        SUCCESS: "CITY.SUCCESS",
        ERROR: "CITY.ERROR"
    },

}

export function getList (params)
{
    return {
        type: action_type.CITY.REQUEST,
        params
    }
}

