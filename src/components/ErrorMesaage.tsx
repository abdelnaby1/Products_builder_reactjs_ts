interface Iprops{
  msg: string
}

const ErrorMesaage = ({msg}: Iprops) => {
  return (
    <span className="block text-red-700 font-semibold text-sm">{msg}</span>
  )
}

export default ErrorMesaage