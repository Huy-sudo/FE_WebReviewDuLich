export const action_type = {
    REVIEW: {
        REQUEST: "REVIEW.REQUEST",
        SUCCESS: "REVIEW.SUCCESS",
        ERROR: "REVIEW.ERROR"
    },
    GETCITYREVIEW: {
        REQUEST: "GETCITYREVIEW.REQUEST",
        SUCCESS: "GETCITYREVIEW.SUCCESS",
        ERROR: "GETCITYREVIEW.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.REVIEW.REQUEST,
        params
    }
}

export function getListCity(params)
{
    return {
        type: action_type.GETCITYREVIEW.REQUEST,
        params
    }
}