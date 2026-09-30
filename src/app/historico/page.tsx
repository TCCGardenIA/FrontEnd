"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, LogOut, Sprout } from "lucide-react";
import styles from "./style.module.css";

type StatusType = "regado" | "nao-precisou" | "recomendado-nao-regado" | "sem-dados";

interface DayData {
  day: number;
  status: StatusType;
  isCurrentMonth: boolean;
  isToday?: boolean;
}

const DAYS_HEADER = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];

export default function Historico() {
  // Dados do mês de Setembro de 2026 correspondentes ao design
  const calendarDays: DayData[] = [
    // Semana 1 (30 de agosto até 05 de setembro)
    { day: 30, status: "sem-dados", isCurrentMonth: false },
    { day: 31, status: "sem-dados", isCurrentMonth: false }, // ajuste conforme o grid
    { day: 1, status: "nao-precisou", isCurrentMonth: true },
    { day: 2, status: "regado", isCurrentMonth: true },
    { day: 3, status: "nao-precisou", isCurrentMonth: true },
    { day: 4, status: "recomendado-nao-regado", isCurrentMonth: true },
    { day: 5, status: "regado", isCurrentMonth: true },

    // Semana 2
    { day: 6, status: "nao-precisou", isCurrentMonth: true },
    { day: 7, status: "regado", isCurrentMonth: true },
    { day: 8, status: "nao-precisou", isCurrentMonth: true },
    { day: 9, status: "regado", isCurrentMonth: true },
    { day: 10, status: "nao-precisou", isCurrentMonth: true },
    { day: 11, status: "recomendado-nao-regado", isCurrentMonth: true },
    { day: 12, status: "regado", isCurrentMonth: true },

    // Semana 3
    { day: 13, status: "nao-precisou", isCurrentMonth: true },
    { day: 14, status: "regado", isCurrentMonth: true },
    { day: 15, status: "nao-precisou", isCurrentMonth: true },
    { day: 16, status: "regado", isCurrentMonth: true },
    { day: 17, status: "nao-precisou", isCurrentMonth: true },
    { day: 18, status: "recomendado-nao-regado", isCurrentMonth: true },
    { day: 19, status: "regado", isCurrentMonth: true },

    // Semana 4
    { day: 20, status: "nao-precisou", isCurrentMonth: true },
    { day: 21, status: "regado", isCurrentMonth: true },
    { day: 22, status: "nao-precisou", isCurrentMonth: true },
    { day: 23, status: "regado", isCurrentMonth: true },
    { day: 24, status: "nao-precisou", isCurrentMonth: true, isToday: true },
    { day: 25, status: "sem-dados", isCurrentMonth: true },
    { day: 26, status: "sem-dados", isCurrentMonth: true },

    // Semana 5
    { day: 27, status: "sem-dados", isCurrentMonth: true },
    { day: 28, status: "sem-dados", isCurrentMonth: true },
    { day: 29, status: "sem-dados", isCurrentMonth: true },
    { day: 30, status: "sem-dados", isCurrentMonth: true },
    { day: 1, status: "sem-dados", isCurrentMonth: false },
    { day: 2, status: "sem-dados", isCurrentMonth: false },
    { day: 3, status: "sem-dados", isCurrentMonth: false },
  ];

  return (
    <div className={styles.container}>
      {/* Sidebar Lateral */}
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <span className={styles.brandTitle}>
            GARDEN<span>IA</span>
          </span>
        </div>

        <nav className={styles.navigation}>
          <Link href="/inicio" className={styles.navItem}>
            Início
          </Link>
          <Link href="/historico" className={`${styles.navItem} ${styles.active}`}>
            Histórico
          </Link>
        </nav>

        <div className={styles.logoutArea}>
          <button className={styles.logoutBtn} aria-label="Sair">
            <LogOut size={24} />
          </button>
        </div>
      </aside>

      {/* Conteúdo Central */}
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Histórico</h1>

        <div className={styles.historyLayout}>
          {/* Seção Superior: Calendário e Legenda */}
          <div className={styles.topSection}>
            {/* Card Calendário */}
            <div className={styles.calendarCard}>
              <div className={styles.calendarHeader}>
                <button className={styles.navArrowBtn} aria-label="Mês anterior">
                  <ChevronLeft size={20} />
                </button>
                <h2 className={styles.monthTitle}>Setembro de 2026</h2>
                <button className={styles.navArrowBtn} aria-label="Próximo mês">
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Cabeçalho dos Dias da Semana */}
              <div className={styles.weekdaysRow}>
                {DAYS_HEADER.map((d) => (
                  <span key={d} className={styles.weekday}>
                    {d}
                  </span>
                ))}
              </div>

              {/* Grid dos Dias */}
              <div className={styles.daysGrid}>
                {calendarDays.slice(0, 35).map((item, index) => (
                  <div
                    key={index}
                    className={`
                      ${styles.dayCell} 
                      ${styles[item.status]} 
                      ${!item.isCurrentMonth ? styles.otherMonth : ""}
                      ${item.isToday ? styles.todayHighlight : ""}
                    `}
                  >
                    {item.day}
                  </div>
                ))}
              </div>
            </div>

            {/* Card da Legenda */}
            <div className={styles.legendCard}>
              <div className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dotRegado}`} />
                <span>Regado</span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dotNaoPrecisou}`} />
                <span>Não precisou regar</span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dotRecomendado}`} />
                <span>Recomendado, mas não regado</span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dotSemDados}`} />
                <span>Sem dados</span>
              </div>
            </div>
          </div>

          {/* Seção Inferior: Resumo do Mês */}
          <section className={styles.summaryCard}>
            <div className={styles.summaryLeft}>
              <div className={styles.plantIllustration}>
                <Sprout size={48} className={styles.sproutIcon} />
                <div className={styles.dirtMound} />
              </div>
              <div className={styles.summaryTitleBlock}>
                <h3>Resumo do mês</h3>
                <span>Setembro de 2026</span>
              </div>
            </div>

            <div className={styles.summaryMetrics}>
              <div className={styles.metricItem}>
                <strong>10</strong>
                <span>dias regados</span>
              </div>

              <div className={styles.metricDivider} />

              <div className={styles.metricItem}>
                <strong>11</strong>
                <span>não precisou regar</span>
              </div>

              <div className={styles.metricDivider} />

              <div className={styles.metricItem}>
                <strong className={styles.warningText}>3</strong>
                <span>recomendados e não regados</span>
              </div>

              <div className={styles.metricDivider} />

              <div className={styles.metricItem}>
                <strong>6</strong>
                <span>sem dados</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}