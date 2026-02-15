import React, { useEffect, useState } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { login } from "../services/backendService.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Home = () => {





	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false);
	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate()
	const [user, setUser] = useState({
		email: "",
		password: ""
	})

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		setError("");
		if (!user.email.trim() || !user.password.trim()) {
			setError("email and passwords are required");
			return;
		}

		
		setLoading(true);
		const response = await login(user)
		if (response.error) {
			setError(response.error)
			setLoading(false)
			return
		}

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

				<div className="ml-auto mt-3">
					<Link to="/Register">
						<button className="btn btn-primary">registrate</button>
					</Link>
				</div>
			</div>
		</div>
	);
}; 