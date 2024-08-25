import { ReactNode } from "react"

type Item = {
    title?: string
    variant?: "text" | "outlined" | "contained"
    size?: "small" | "medium" | "large"
    to?: string
    component?: ReactNode
  }
export const WithNavBarItems = () => {
    return ({ items }: { items: Item[] }) => (
      <>{items?.map((item,index) => <div key={index}>{item.component}</div>)}</>
    )}