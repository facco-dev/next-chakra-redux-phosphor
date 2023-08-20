import { Flex } from "@chakra-ui/react"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction='column'>
      <Header />
      {children}
      <Footer />
    </Flex>
  )
}