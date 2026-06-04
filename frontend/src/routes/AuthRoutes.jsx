const AuthRoutes=[
    {
        path:"/",
        lazy: async () => {
            const { default: Login } = await import("../components/auth/Login");
            return { Component: Login };
        },
    },
    {
        path:"/register",
        lazy: async () => {
            const { default: Register } = await import("../components/auth/Register");
            return { Component: Register };
        },
    },
]
export default  AuthRoutes
