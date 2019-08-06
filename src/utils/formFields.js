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
			label: "Пароль",
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
			label: "Имя",
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
			label: "Фамилия",
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
			label: "Телефон",
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
			label: "Пароль",
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
			label: "Повторите пароль",
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

export const postNewDoctorForm =[
	{
		id:1,
		type:'text',
		value:"",
		name:'name',
		placeholder:'Введите ФИО сотрудника',
		required:true
	},
	{
		id:2,
		type:'text',
		value:"",
		name:'experience',
		placeholder:'Введите дату начала практики',
		required:true
	},
	{
		id:3,
		type:'text',
		value:"",
		name:'photo',
		placeholder:'Добавьте фотографию',
		required:true
	},
	{
		id:4,
		type:'text',
		value:"",
		name:'profession',
		placeholder:'Добавьте специализацию',
		required:true
	},
	{
		id:5,
		type:'text',
		value:"",
		name:'skillsDescription',
		placeholder:'Введите описание навыков здесь',
		required:true
	},
	{
		id:6,
		type:'text',
		value:"",
		name:'speciality',
		placeholder:'Введите массив представляемых услуг',
		required:true
	}
];

export const postNewServiceForm =[
	{
		id:1,
		type:'text',
		value:"",
		name:'name',
		placeholder:'Введите название сервиса',
		required:true
	},
	{
		id:2,
		type:'text',
		value:"",
		name:'description',
		placeholder:'Введите описание сервиса',
		required:true
	},
	{
		id:3,
		type:'number',
		value:"",
		name:'duration',
		placeholder:'Введите длительность (часы)',
		required:true
	},
	{
		id:4,
		type:'number',
		value:"",
		name:'price',
		placeholder:'Введите стоимость сервиса',
		required:true
	}
];