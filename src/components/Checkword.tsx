import { useCheck } from "../hooks/useCheck"

export const Checkword = () => {
  const { isChecked, toggle } = useCheck()

  const handleClick = () => toggle()

  return <>
    <span style={{ textDecoration: isChecked ? "line-through" : "none" }}
      onClick={handleClick}
    >Programar un rato</span>
  </>
}