
export const sideBarMenu = [
    {
        "title": "General",
        "icon": "fa-solid fa-gear",
        "key": "0",
        "childrens": [
            {
                "title": "Level One",
                "icon": "fa-solid fa-1",
                "key": "0.3",
                "childrens": [
                    {
                        "title": "Level Two",
                        "key": "0.3.2",
                        "icon": "fa-solid fa-2",
                        "childrens": [
                            {
                                "title": "Level Three",
                                "icon": "fa-solid fa-3",
                                "key": "0.3.2.1",
                                "childrens": [
                                    {
                                        "title": "Level Fourth",
                                        "key": "0.3.3.1.0",
                                        "icon": "fa-solid fa-4"
                                    },
                                    {
                                        "title": "last Lavel",
                                        "icons": "0.3.3.1.1",
                                        "key": 30321
                                    }

                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "title": "FAQ",
                "icon": "bi-question-circle-fill"
            }
        ]
    },
    {
        "title": "Account",
        "icon": "fa-solid fa-file-invoice",
        "key": 1,
        "childrens": [
            {
                "title": "Login",
                "path": "/login"
            },
            {
                "title": "Register",
                "path": "/register"
            },
            {
                "title": "Forgot Password",
                "path": "/forgot-password"
            },
            {
                "title": "Reset Password",
                "path": "/reset-password"
            }
        ]
    },
    {
        "title": "Profile",
        "icon": "fa-solid fa-user",
        "key": 2,
        "childrens": [
            {
                "title": "Profile",
                "path": "/profile"
            },
            {
                "title": "Settings",
                "childrens": [
                    {
                        "title": "Account",
                        "path": "/settings/account"
                    },
                    {
                        "title": "Billing",
                        "childrens": [
                            {
                                "title": "Payment",
                                "path": "/settings/billing/payment"
                            },
                            {
                                "title": "Subscription",
                                "path": "/settings/billing/subscription"
                            }
                        ]
                    },
                    {
                        "title": "Notifications",
                        "path": "/settings/notifications"
                    }
                ]
            },
            {
                "title": "Logout",
                "path": "/logout"
            }
        ]
    },
    {
        "title": "Admission Form",
        "icon": "",
        "key": 3
    },
    {
        "title": "Advance",
        "icon": "fa-solid fa-gear",
        "childrens": [
            {
                "title": "Search",
                "path": "/search"
            },
            {
                "title": "History",
                "path": "/history"
            }
        ]
    },
    {
        "title": "Support",
        "icon": "bi-question-circle-fill",
        "path": "/support"
    },
    {
        "title": "Report Bug",
        "icon": "bi-bug",
        "path": "/report-bug"
    }
]
