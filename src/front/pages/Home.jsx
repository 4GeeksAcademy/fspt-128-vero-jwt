import React, { useEffect, useState } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { login } from "../services/backendService.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [user, setUser] = useState({
		email: "",
		password: ""
	})

	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL

			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

			const response = await fetch(backendUrl + "/api/hello")
			const data = await response.json()

			if (response.ok) dispatch({ type: "set_hello", payload: data.message })

			return data

		} catch (error) {
			if (error.message) throw new Error(
				`Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
			);
		}

	}

	useEffect(() => {
		loadMessage()
	}, [])

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!user.email || !user.password) {
			alert("los campos son todos requeridos")
			return
		}
		login(user)
	}
	console.log(user);

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div className="container mt-5">
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">email</label>
						<input type="text"
							name="email"
							aria-placeholder="introduce tu email"
							className="form-control"
							value={user.email}
							onChange={handleChange}
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="password">password</label>
						<input type="text"
							name="password"
							aria-placeholder="introduce tu password"
							className="form-control"
							value={user.password}
							onChange={handleChange}
						/>
					</div>

					<button className=" btn btn-success w-100" type="submit">login</button>
				</form>
			</div>
		</div>
	);
}; 