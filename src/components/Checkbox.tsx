import { useCheck } from "../hooks/useCheck"

export const Checkbox = () => {

  const { isChecked, toggle } = useCheck()

  const handleClick = () => toggle()

  return (<>
    <input type="checkbox"
      defaultChecked
      checked={isChecked}
      onClick={handleClick} />
  </>)
}