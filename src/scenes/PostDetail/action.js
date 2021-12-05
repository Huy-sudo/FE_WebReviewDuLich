export const action_type = {
    POSTDETAIL: {
        REQUEST: "POSTDETAIL.REQUEST",
        SUCCESS: "POSTDETAIL.SUCCESS",
        ERROR: "POSTDETAIL.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.POSTDETAIL.REQUEST,
        params
    }
}