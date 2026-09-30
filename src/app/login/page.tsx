"use client";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";

const Login = () => {
    const router = useRouter();

    function valiadarLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Impede o reload padrão do formulário
        console.log("teste")
        setTimeout(() => {
            router.push("/inicio");
        }, 2000);

    }

    return (
        <main className={styles.login}>
            <div className={styles.cardLogin}>
                <img
                    className={styles.logo}
                    src="/imgs/Logo02.svg"
                    alt="Logo GardenIA"
                />

                <h1>Login</h1>

                <form className={styles.campos} onSubmit={valiadarLogin}>
                    <div className={styles.campoEmail}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>

                    <div className={styles.campoSenha}>
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            name="senha"
                            id="senha"
                        />
                    </div>

                    <button type="submit">
                        Acessar
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Login;