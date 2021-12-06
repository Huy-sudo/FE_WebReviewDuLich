export const action_type = {
    GETPLACE: {
        REQUEST: "GETPLACE.REQUEST",
        SUCCESS: "GETPLACE.SUCCESS",
        ERROR: "GETPLACE.ERROR"
    },
    

}

export function getList (params)
{
    return {
        type: action_type.GETPLACE.REQUEST,
        params
    }
}

