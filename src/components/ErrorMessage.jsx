const ErrorMessage = ({ message }) => {
    if (!message) return null

    return (
        <p className="bg-red-100 text-red-600 text-sm px-4 py-3 rounded mb-4">
            {message}
        </p>
    )
}

export default ErrorMessage