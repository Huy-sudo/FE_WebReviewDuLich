export const action_type = {
    GETCITYHOME: {
        REQUEST: "GETCITYHOME.REQUEST",
        SUCCESS: "GETCITYHOME.SUCCESS",
        ERROR: "GETCITYHOME.ERROR"
    },

}

export function getList (params)
{
    return {
        type: action_type.GETCITYHOME.REQUEST,
        params
    }
}

