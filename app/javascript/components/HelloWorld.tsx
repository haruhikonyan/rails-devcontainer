import React from "react"

type Props = {
  greeting: string
}

const HelloWorld: React.VFC<Props> = ({ greeting }) => {
  return <>
    Greetingts: {greeting}
  </>
}
export default HelloWorld
