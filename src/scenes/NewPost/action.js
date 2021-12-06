export const action_type = {
    POSTPOST: {
        REQUEST: "POSTPOST.REQUEST",
        SUCCESS: "POSTPOST.SUCCESS",
        ERROR: "POSTPOST.ERROR"
    },
}

export function postPost(params) {
    return {
        type: action_type.POSTPOST.REQUEST,
        params
    }
}