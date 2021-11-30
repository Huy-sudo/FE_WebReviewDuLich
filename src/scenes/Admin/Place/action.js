export const action_type = {
    PLACE: {
        REQUEST: "PLACE.REQUEST",
        SUCCESS: "PLACE.SUCCESS",
        ERROR: "PLACE.ERROR"
    },
    CREATE: {
        REQUEST: "PLACE.CREATE.REQUEST",
        SUCCESS: "PLACE.CREATE.SUCCESS",
        ERROR: "PLACE.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "PLACE.UPDATE.REQUEST",
        SUCCESS: "PLACE.UPDATE.SUCCESS",
        ERROR: "PLACE.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "PLACE.DELETE.REQUEST",
        SUCCESS: "PLACE.DELETE.SUCCESS",
        ERROR: "PLACE.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.PLACE.REQUEST,
        params,
    }
}

export function updatePlace (id, params)
{
    return {
        type: action_type.UPDATE.REQUEST,
        params,
        id
    }
}

export function createPlace (params)
{
    return {
        type: action_type.CREATE.REQUEST,
        params,
    }
}

export function deletePlace (id)
{
    return {
        type: action_type.DELETE.REQUEST,
        id
    }
}