import React from "react";



// _____
// const {doctors, appointment, servicesArray} = this.props.app;

// ________
const mock = [
    { id: 1, text: "Закрытие рецессии десны" }, 
    { id: 2, text: "Удаление кисты" }, 
    { id: 3, text: "THREE" }
];




export const CustomSelect = ({ label, options = mock, emptyLine = false, searchInput = true, reset }) => {
	const [copyOption, setCopyOption] = React.useState([]);
	const [show, toggleShow] = React.useState(false);
	const [value, toggleValue] = React.useState("");
	const [inputValue, toggleInputValue] = React.useState("");
	const list = React.createRef();



	React.useEffect(() => {
		document.addEventListener("mousedown", handleClickOutSide);
		return () => document.removeEventListener("mousedown", handleClickOutSide);
	});

	React.useEffect(() => {
		if (reset) {
			toggleValue("");
			toggleInputValue("");
			setCopyOption(options);

			toggleShow(false);
		}
	}, [options, reset]);

	React.useEffect(() => {
		setCopyOption(options);
	}, [options]);

	const handleClickOutSide = e => {
		if (!show) return;

		if (list.current && !list.current.contains(e.target)) {
			toggleShow(false);
		}
	};

	const toggleEvent = text => {
		toggleValue(text);
		toggleInputValue(text);
		toggleShow(false);
	};

	const clickOnEptyLine = () => {
		toggleValue("");
		toggleInputValue("");

		toggleShow(false);
	};

	const chahgeValueEvent = e => {
		const { value } = e.target;
		toggleInputValue(e.target.value);

		if (!value) {
			setCopyOption(options);
			toggleInputValue(value);
		} else {
			const filtered = copyOption.filter(el => el.text.toLowerCase().indexOf(value.toLowerCase()) >= 0);

			setCopyOption(filtered);
			toggleInputValue(value);
		}
	};

	return (
		<div className="select">
			{label && (
				<label htmlFor="select" className="select__lable">
					{label}
				</label>
			)}
			<div className="select__value-box " onClick={() => toggleShow(true)}>
				{searchInput ? null : <span>{value} &nbsp;</span>}
				<input
					value={inputValue}
					autoComplete="off"
					type={searchInput ? "text" : "hidden"}
					onChange={chahgeValueEvent}
					id="select"
					className="select__input icon-angle-down"
				/>
				<span class="icon-angle-down"></span>
			</div>
			{show && (
				<ul className="select__list " ref={list}>
					{emptyLine && (
						<li className="select__item" onClick={clickOnEptyLine}>
							&nbsp;
						</li>
					)}
					{copyOption.map(el => (
						<li className="select__item" key={el.id} onClick={toggleEvent.bind(null, el.text)}>
							{el.text}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};