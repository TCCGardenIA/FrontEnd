import Link from "next/link";
import styles from "./page.module.css";
import CardDev from "@/components/cardDev/cardDev";

export default function Home() {
    return (
        <>
            <header className={styles.header}>
                <img src="/imgs/Logo02.svg" alt="Logo GardenIA" />
                <Link href="/login">
                    Login
                </Link>
            </header>

            <main>
                {/* Banner principal */}
                <div className={styles.bannerPrincipal}>
                    <img src="/imgs/banner.png" alt="GardenIA" />
                </div>

                {/* Sobre o projeto */}
                <div className={styles.sobre}>
                    <div className={styles.textoSobre}>
                        <h2>Sobre o projeto</h2>

                        <p>
                            O projeto propõe uma solução inteligente para o cuidado
                            de plantas e áreas verdes, utilizando IoT, dados
                            meteorológicos e Inteligência Artificial.
                        </p>

                        <p>
                            Por meio do monitoramento da umidade do solo,
                            temperatura e condições climáticas, o sistema analisa
                            o ambiente e auxilia na tomada de decisões, como
                            identificar o momento adequado para realizar a irrigação.
                        </p>

                        <p>
                            A proposta é tornar o cuidado com as plantas mais
                            eficiente, sustentável e inteligente, reduzindo o
                            desperdício de água e contribuindo para a identificação
                            antecipada de possíveis problemas na vegetação.
                        </p>
                    </div>

                    <img
                        className={styles.imagemSobre}
                        src="/imgs/img sobre o projeto.png"
                        alt="Tecnologia aplicada ao cuidado de plantas"
                    />
                </div>

                {/* Integrantes */}
                <div className={styles.integrantes}>
                    <h2>Integrantes</h2>

                    <h3>
                        O time de desenvolvimento do projeto para o TCC da FAM,
                        do ano de 2026.
                    </h3>
                    <div className={styles.cards}>
                        <CardDev nome="Samanta" github="https://github.com/SamantaMelissa" linkedin="https://www.linkedin.com/in/samanta-nascimento-593057173" imagem="../imgs/samanta.jpg" />
                        <CardDev nome="Caique" github="https://github.com/Caique-Batista" linkedin="https://www.linkedin.com/in/caique-batista/" imagem="../imgs/caique.jfif" />
                        <CardDev nome="Guilherme" github="http://www.github.com/guilherme-tiossi" linkedin="https://www.linkedin.com/in/guilherme-tiossi-31879124a/pt?originalSubdomain=br" imagem="../imgs/guilherme.jfif" />
                        <CardDev nome="Eduardo" github="" linkedin="https://www.linkedin.com/in/carlos-eduardo-gutierrez-michimoto?utm_source=share_via&utm_content=profile&utm_medium=member_ios" imagem="../imgs/eduardo.jfif" />
                        <CardDev nome="Edgard" github="" linkedin="" imagem="../imgs/usuario.png" />
                    </div>

                </div>
            </main>

            <footer className={styles.footer}>
                <img src="/imgs/Logo02.svg" alt="Logo GardenIA" />
            </footer>
        </>
    );
}