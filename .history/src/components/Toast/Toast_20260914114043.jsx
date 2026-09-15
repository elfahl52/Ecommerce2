const Toast = ({ message }) => {
  if (!message) return null

  return (
    <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-2xl dark:bg-white dark:text-gray-900">
      {message}
    </div>
  )
}

export default Toast
