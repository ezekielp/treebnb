export const signupUser = user => {
    return $.ajax({
        method: "POST",
        url: `/api/users`,
        data: { user }
    })
};

export const loginUser = user => {
    return $.ajax({
        method: "POST",
        url: `/api/session`,
        data: { user }
    })
};

export const logoutUser = () => {
    return $.ajax({
        method: "DELETE",
        url: `/api/session`
    })
}