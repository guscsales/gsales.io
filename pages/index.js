import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Gustavo Sales</title>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Gustavo Sales</h1>

				<p className={styles.description}>
					Seja bem vindo(a) ao meu site em construção! :D
				</p>

				<div className={styles.grid}>
					<a
						href="https://www.youtube.com/channel/UCQmw7Ty7UN8i7_dan_uKNfQ"
						className={styles.card}
						target="_blank"
					>
						<h3>YouTube</h3>
						<p>
							Conheça meu canal onde falo sobre carreira, soft e
							hard skills
						</p>
					</a>

					<a
						href="https://www.instagram.com/gussales.dev/"
						className={styles.card}
						target="_blank"
					>
						<h3>Instagram</h3>
						<p>
							Me siga no Instagram para receber posts sobre
							programação
						</p>
					</a>

					<a
						href="https://www.facebook.com/gussales.dev"
						className={styles.card}
						target="_blank"
					>
						<h3>Facebook</h3>
						<p>
							Você também pode acompanhar os posts pelo Facebook
						</p>
					</a>

					<a
						href="https://gussales.medium.com/"
						className={styles.card}
						target="_blank"
					>
						<h3>Medium</h3>
						<p>Acompanhe meus artigos que escrevo no Medium</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				Gustavo Sales - Gus Quem Fala
			</footer>
		</div>
	);
}
