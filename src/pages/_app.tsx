import { AppProps } from "next/app"
import Image from "next/image";
import { Handbag } from "phosphor-react"
import { globalStyles } from "../styles/global";
import { ButtonCart, Container, Header } from "../styles/pages/app";
import logoImg from '../assets/logo.svg'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <ButtonCart color="gray">
          <Handbag size={32} weight="bold" />
        </ButtonCart>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}