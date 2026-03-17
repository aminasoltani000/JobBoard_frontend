import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../services/authServices'
import RegisterForm from '../components/RegisterForm'
import ErrorMessage from '../components/ErrorMessage'

const Register = () => {
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
            await register(email, password)
            navigate('/login')
        } catch (err) {
            setError(err.response?.data?.message || "Erreur lors de l'inscription")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-jaune min-h-screen flex items-center justify-center px-6 pt-40">
            <div className="w-full max-w-2xl px-6">
                <ErrorMessage message={error} />
                <RegisterForm
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
}

export default Register
