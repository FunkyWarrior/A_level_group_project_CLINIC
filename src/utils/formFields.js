export const logInForm = {
	form: {
		email: {
			id: 1,
			name: "email",
			type: "email",
			label: "Email",
			validation: {
				requred: {
					cb: v => v.trim() === ""
				}
			},
			fail: false,
			touch: false,
			value: ""
		},
		password: {
			id: 2,
			name: "password",
			type: "password",
			label: "Password",
			validation: {
				requred: {
					cb: v => v.trim() === ""
				},
				minL: {
					cb: v => v.trim().length < 6
				}
			},
			fail: false,
			touch: false,
			value: ""
		}
	},
	validForm: false
};

export const signUpForm = {
	form: {
		email: {
			id: 1,
			name: "email",
			type: "email",
			label: "Email",
			validation: {
				requred: {
					cb: v => v.trim() === ""
				}
			},
			fail: false,
			touch: false,
			value: ""
		},
		firstName: {
			id: 2,
			type: "text",
			name: "firstName",
			label: "First Name",
			validation: {
				requred: {
					cb: v => v.trim() === ""
				},
				regExp: {
					cb: v => !/^\w/.test(v)
				}
			},
			fail: false,
			touch: false,
			value: ""
		},
		lastName: {
			id: 3,
			type: "text",
			name: "lastName",
			label: "Last Name",
			validation: {
				requred: {
					cb: v => v.trim() === ""
				}
			},
			fail: false,
			touch: false,
			value: ""
		},
		phone: {
			id: 4,
			type: "number",
			name: "phone",
			label: "Phone",
			validation: {
				requred: {
					cb: v => v.trim() === ""
				}
			},
			fail: false,
			touch: false,
			value: ""
		},
		password: {
			id: 5,
			name: "password",
			type: "password",
			label: "Password",
			validation: {
				requred: {
					cb: v => v.trim() === ""
				},
				minL: {
					cb: v => v.trim().length < 6
				}
			},
			fail: false,
			touch: false,
			value: ""
		},
		confirmPassword: {
			id: 6,
			name: "confirmPassword",
			type: "password",
			label: "Confirm Password",
			validation: {
				requred: {
					cb: v => v.trim() === ""
				},
				minL: {
					cb: v => v.trim().length < 6
				},
				match: {
					match: "password",
					cb: (v, m) => v !== m
				}
			},
			fail: false,
			touch: false,
			value: ""
		}
	},
	validForm: false
};