
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/authServices'
import LoginForm from '../components/LoginForm'
import ErrorMessage from '../components/ErrorMessage'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const data = await login(email, password)
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))

            if (data.user.role === 'admin') {
                navigate('/dashboard')
            } else {
                navigate('/jobs')
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Email ou mot de passe incorrect')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-jaune min-h-screen flex items-center justify-center px-6  pt-40 ">
            <div className="w-full max-w-2xl px-6  ">
                <ErrorMessage message={error} />
                <LoginForm
                    email={email}
                    password={password}
                    loading={loading}
                    onEmailChange={(e) => setEmail(e.target.value)}
                    onPasswordChange={(e) => setPassword(e.target.value)}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
};

 export default Login;