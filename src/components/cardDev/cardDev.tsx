import Link from "next/link";
import styles from "./style.module.css";

interface Integrantes{
    nome: string,
    github: string,
    linkedin: string,
    imagem: string

}

const CardDev = ({nome, github, linkedin, imagem} : Integrantes) => {
    return (
        <div className={styles.card}>
            <img
                className={styles.fotoIntegrante}
                src={imagem}
                alt={nome}
            />

            <p>{nome}</p>

            <div className={styles.redesSociais}>
                <Link href={linkedin} target="_blank" >
                    <img src="/imgs/linkedin.png" alt="Linkedin" />
                </Link>
                <Link href={github} target="_blank">
                    <img src="/imgs/github.png" alt="GitHub" />
                </Link>
            </div>
        </div>
    )
}

export default CardDev