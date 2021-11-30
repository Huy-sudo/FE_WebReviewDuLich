export const action_type = {
    CITY: {
        REQUEST: "CITY.REQUEST",
        SUCCESS: "CITY.SUCCESS",
        ERROR: "CITY.ERROR"
    },
    CREATE: {
        REQUEST: "CITY.CREATE.REQUEST",
        SUCCESS: "CITY.CREATE.SUCCESS",
        ERROR: "CITY.CREATE.ERROR"
    },
    UPDATE: {
        REQUEST: "CITY.UPDATE.REQUEST",
        SUCCESS: "CITY.UPDATE.SUCCESS",
        ERROR: "CITY.UPDATE.ERROR"
    },
    DELETE: {
        REQUEST: "CITY.DELETE.REQUEST",
        SUCCESS: "CITY.DELETE.SUCCESS",
        ERROR: "CITY.DELETE.ERROR"
    },
}

export function getList (params)
{
    return {
        type: action_type.CITY.REQUEST,
        params,
    }
}

export function updateCity (id, params)
{
    return {
        type: action_type.UPDATE.REQUEST,
        params,
        id
    }
}

export function createCity (params)
{
    return {
        type: action_type.CREATE.REQUEST,
        params,
    }
}

export function deleteCity (id)
{
    return {
        type: action_type.DELETE.REQUEST,
        id
    }
}