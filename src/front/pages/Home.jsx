import React, { useEffect, useState } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { login } from "../services/backendService.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Home = () => {

	const [ error ,setError] = useState("")
	const [loading, setLoading] = useState(false);
	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate()
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

	const handleSubmit = async (e) => {
		e.preventDefault()

		setError("");
		if (!user.exist) {
			setError("no existe el usuario");
			setLoading(false)
			return;
		}


		if (!user.email.trim() || !user.password.trim()) {
			setError("email and passwords are required");
			return;
		}

		if (response.error) {
			setError(response.error)
			setLoading(false)
			return
		}
		
		setLoading(true)
		const response = await login(user)
		console.log("este es el response--->",response);
		
		



		navigate("/private")

	}


	return (
		<div className="text-center mt-5">
			<h1 className="text-white macondo-swash-caps-regular">Login</h1>
			<div className="container mt-5">
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="email" className="form-label text-white macondo-swash-caps-regular">email</label>
						<input type="text"
							name="email"
							aria-placeholder="introduce tu email"
							className="form-control"
							value={user.email}
							onChange={handleChange}
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="password" className="text-white macondo-swash-caps-regular">password</label>
						<input type="password"
							name="password"
							aria-placeholder="introduce tu password"
							className="form-control"
							value={user.password}
							onChange={handleChange}
						/>
					</div>

					<button className=" btn btn-success w-100 text-white macondo-swash-caps-regular" type="submit" disabled={loading} >
						{loading ? (
							<span className="d-inline-flex align-items-center gap-2"
							role="status">
								<span className="spinner-border text-light"
								role="status"
								aria-hidden="true"
								></span>entrando...
		
							</span>
						) : (
							"logueate"
						)}
					</button>
				</form>
			</div>
		</div>
	);
}; 