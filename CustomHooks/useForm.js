// This hook need to work together with useLocalStorage hook

import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValues, callback) => {
	const [values, setValues] = useLocalStorage(key, initialValues);

	const handleChanges = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		callback();
	};

	return [values, handleChanges, handleSubmit];
};