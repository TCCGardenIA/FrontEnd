import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  CloudRain, 
  Droplet, 
  Wind, 
  CheckCircle2, 
  LogOut, 
  Sprout
} from "lucide-react"; // Se não usar lucide-react, pode trocar por SVGs locais
import styles from "./style.module.css";
import Menu from "@/components/menu/menu";

export default function Inicio() {
  return (
    <div className={styles.container}>
      <Menu
       paginaAtiva="inicio" 
      />
      {/* Conteúdo Principal */}
      <main className={styles.mainContent}>
        {/* Topo / Header */}
        <header className={styles.header}>
          <h1 className={styles.greeting}>Olá, Julia!</h1>
          <div className={styles.dateBadge}>
            <Calendar size={16} />
            <span>Segunda, 24 de setembro de 2026</span>
          </div>
        </header>

        {/* Grid de Cards */}
        <div className={styles.contentGrid}>
          {/* Coluna da Esquerda (2 cards empilhados) */}
          <div className={styles.leftColumn}>
            
            {/* Card Recomendação / Umidade */}
            <section className={styles.recommendationCard}>
              <div className={styles.cardOverlay}>
                <div className={styles.badgeHeader}>
                  <CloudRain size={16} />
                  <span>RECOMENDAÇÃO DE HOJE</span>
                </div>
                
                <h2 className={styles.recommendationTitle}>Aguarde para regar!</h2>

                <div className={styles.moistureGrid}>
                  {[1, 2].map((sensor) => (
                    <div key={sensor} className={styles.sensorItem}>
                      <div className={styles.sensorValue}>
                        <Sprout size={18} />
                        <strong>18%</strong>
                      </div>
                      <span>Umidade do solo</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Card Clima */}
            <section className={styles.weatherCard}>
              <h3 className={styles.weatherTitle}>Clima de hoje em Endereço</h3>
              
              <div className={styles.weatherBody}>
                <CloudRain size={48} className={styles.weatherIcon} />
                <div className={styles.weatherTempArea}>
                  <span className={styles.temperature}>24°</span>
                  <p className={styles.weatherCondition}>Nublado com pancadas</p>
                  <p className={styles.weatherMinMax}>18° / 27°</p>
                </div>
              </div>

              <div className={styles.weatherFooter}>
                <div className={styles.footerMetric}>
                  <Droplet size={18} />
                  <span>74% Umidade</span>
                </div>
                <div className={styles.footerMetric}>
                  <Wind size={18} />
                  <span>12 km/h</span>
                </div>
              </div>
            </section>
          </div>

          {/* Coluna da Direita (Card de Análise Visual) */}
          <aside className={styles.aiAnalysisCard}>
            <h3 className={styles.aiTitle}>Análise visual por IA</h3>

            <div className={styles.leafIconWrapper}>
              <div className={styles.leafCircle}>
                <Sprout size={56} className={styles.leafIcon} />
              </div>
            </div>

            <div className={styles.aiTextContainer}>
              <h4 className={styles.aiHeadline}>Sua planta parece saudável!</h4>
              <p className={styles.aiDescription}>
                A análise por Inteligência Artificial não identificou sinais visuais de doenças, pragas ou ressecamento.
              </p>
            </div>

            <div className={styles.statusBadge}>
              <CheckCircle2 size={18} />
              <span>Nenhum anomalia visual identificada.</span>
            </div>

            <span className={styles.lastAnalysisTime}>
              Última análise: 14/09 às 10:50
            </span>
          </aside>
        </div>
      </main>
    </div>
  );
}