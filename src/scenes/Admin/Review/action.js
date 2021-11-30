export const action_type = {
    REVIEW: {
        REQUEST: "REVIEW.REQUEST",
        SUCCESS: "REVIEW.SUCCESS",
        ERROR: "REVIEW.ERROR"
    },
    CREATE: {
        REQUEST: "REVIEW.CREATE.REQUEST",
        SUCCESS: "REVIEW.CREATE.SUCCESS",
        ERROR: "REVIEW.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "REVIEW.UPDATE.REQUEST",
        SUCCESS: "REVIEW.UPDATE.SUCCESS",
        ERROR: "REVIEW.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "REVIEW.DELETE.REQUEST",
        SUCCESS: "REVIEW.DELETE.SUCCESS",
        ERROR: "REVIEW.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.REVIEW.REQUEST,
        params,
    }
}

export function updateReview (id, params)
{
    return {
        type: action_type.UPDATE.REQUEST,
        params,
        id
    }
}

export function createReview (params)
{
    return {
        type: action_type.CREATE.REQUEST,
        params,
    }
}

export function deleteReview (id)
{
    return {
        type: action_type.DELETE.REQUEST,
        id
    }
}