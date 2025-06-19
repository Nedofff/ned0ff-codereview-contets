"use client";

import { JobDetailPage } from "@/_pages/job-detail";
import React from "react";

interface JobDetail {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  salary: string;
  workType: string;
  jobType: string;
  companyLogo: string;
  description: string;
  requirements: string;
  advantages: string;
  offers: string;
}

const jobDetail: JobDetail = {
  id: 1,
  title:
    "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)",
  company: "Bell Integrator",
  location: "Москва",
  date: "16.04.2025",
  salary: "от 50 000 ₽",
  workType: "в офис",
  jobType: "стажировка",
  companyLogo: "/company-1.png",
  description: `Компания IT_ONE запускает стажировку для будущих Java разработчиков, целью которой является подготовка специалистов уровня от Junior+ до Middle-.

Наши стажеры смогут получить опыт работы в профессиональной среде, развить свои навыки под руководством высококвалифицированных специалистов и открыть новые возможности для своей карьеры в IT-индустрии.`,
  requirements: `О программе:
Период стажировки: июнь-август 2025;
Продолжительность 3 месяца;
Онлайн формат;
До 30 часов в неделю;
Обучение с тренером soft skills;
Работа над собственным проектом с ментором. Встречи раз в неделю по 2 часа;
Материалы для изучения + домашние задания + контрольные работы;
Этапы отбора: отправка резюме -> заполнение анкеты -> собеседование с рекрутером -> собеседование с техническим специалистом.

Ожидания от кандидата:
Мы ищем выпускников технических вузов, которые имеют базовые знания Java Core, Spring Framework, SQL.
Будет плюсом наличие опыта работы в технической сфере, а также в IT в целом и в разработке в частности.`,
  advantages: `Дополнительное преимущество:
Понимание ООП
Понимание микросервисной архитектуры и многопоточности`,
  offers: `Что мы предлагаем после успешного прохождения стажировки:
Официальное трудоустройство по ТК РФ в аккредитованную IT-компанию;
Возможность удаленной работы из любого города;
ДМС после прохождения испытательного срока;
Работа в команде высококвалифицированных профессионалов;
Дополнительное обучение, библиотека, возможность посещения конференций, вебинаров, тренингов;
Корпоративные скидки от партнеров;
Насыщенная корпоративная культура.`,
};

const seoKeywords = ;

const similarJobs = [
  {
    title: "Начинающий тестировщик / AQA Engineer (Java)",
    company: "Инфомаксимум",
  },
  {
    title:
      "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)",
    company: "Bell Integrator",
  },
];

function JobIcon({ name }: { name: string }) {
  const icons = {
    building: (
      <svg
        className="w-4 h-4 text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-3 4h1"
        />
      </svg>
    ),
    briefcase: (
      <svg
        className="w-4 h-4 text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a1.5 1.5 0 01-3 0V5.5m3 0a1.5 1.5 0 01-3 0 1.5 1.5 0 116 0z"
        />
      </svg>
    ),
    money: (
      <svg
        className="w-4 h-4 text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };
  return icons[name as keyof typeof icons] || null;
}

export default function JobDetail() {
  return <JobDetailPage />;
}
