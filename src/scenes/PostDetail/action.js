export const action_type = {
    POSTDETAIL: {
        REQUEST: "POSTDETAIL.REQUEST",
        SUCCESS: "POSTDETAIL.SUCCESS",
        ERROR: "POSTDETAIL.ERROR"
    },
    GETCOMMENT: {
        REQUEST: "GETCOMMENT.REQUEST",
        SUCCESS: "GETCOMMENT.SUCCESS",
        ERROR: "GETCOMMENT.ERROR"
    },
    POSTCOMMENT: {
        REQUEST: "POSTCOMMENT.REQUEST",
        SUCCESS: "POSTCOMMENT.SUCCESS",
        ERROR: "POSTCOMMENT.ERROR"
    },
}

export function getDetail (id)
{
    return {
        type: action_type.POSTDETAIL.REQUEST,
        id
    }
}

export function getListComment (params)
{
    return {
        type: action_type.GETCOMMENT.REQUEST,
        params
    }
}

export function postComment (params)
{
    return {
        type: action_type.POSTCOMMENT.REQUEST,
        params
    }
}