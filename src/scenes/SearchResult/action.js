export const action_type = {
    REVIEW: {
        REQUEST: "REVIEW.REQUEST",
        SUCCESS: "REVIEW.SUCCESS",
        ERROR: "REVIEW.ERROR"
    },

}

export function getList (params)
{
    return {
        type: action_type.REVIEW.REQUEST,
        params
    }
}
