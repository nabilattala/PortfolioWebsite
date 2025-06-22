// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        resume: "Resume",
      },

      // Home Page
      home: {
        greeting: "Hello There!",
        introduction: "I'm",
        name: "Nabil Attala Noviandy",
        subtitle: "LET ME <1>INTRODUCE</1> MYSELF",
        description:
          "I am a web developer with expertise in building efficient and user-friendly web applications.\n\nI have a strong grasp of fundamental web technologies such as <1>HTML, CSS, and PHP.</1>\n\nMy areas of expertise include developing <2>Backend Systems</2> and I also have experience as a <2>System Analyst.</2>\n\nIn every project, I apply my skills in using the <3>Laravel Framework</3> and <4>Modern Web Development Practices</4> to build <5>scalable and robust digital solutions</5>.",
      },

      // About Page
      about: {
        title: "Get to Know <1>Me</1>",
        skills: "Professional <1>Skills</1>",
        tools: "<1>Tools</1> I Use",
        description:
          "Hello, I am <1>Nabil Attala Noviandy</1> from <2>Bogor, Indonesia</2>. I am a graduate of <3>SMK Negeri 1 Ciomas</3>, majoring in <4>Software and Game Development (PPLG)</4>. I have a strong passion for web development, with a special focus on <5>backend development</5> and <6>system analysis</6>. During my education, I was actively involved in various development projects, including the <7>SIMONIK</7> application and the <8>WebKu</8> marketplace platform.",
      },

      // Projects Page
      projects: {
        title: "My Recent <1>Projects</1>",
        description: "Here are some projects I've worked on recently.",
        simonik: {
          description:
            "The SIMONIK application is a digital solution for recording and monitoring student activities during Field Work Practices (PKL) at IDUKA, replacing manual methods with a more structured and efficient system. I served as Team Analyst.",
        },
        webku: {
          description:
            "WebKu is a web platform designed to facilitate the sale of software created by local developers, especially from school environments, and to provide solutions for educational institutions and the general public in accessing needed software. I served as Backend Developer, System Analyst, and Designer.",
        },
        simeet: {
          description:
            "SIMEET is a digital platform designed to simplify the management of class meeting activities in schools, including OSIS and Class account management, competition registration, scheduling, and recording results and winner announcements. I served as System Analyst.",
        },
        rekam: {
          description:
            " Rekam Medik is an integrated digital platform designed to facilitate comprehensive management of student data and activities within the educational environment. This system provides a centralized solution for school administration to manage various aspects of student academic life, including attendance records, personal profiles, behavior and discipline monitoring, as well as documentation of achievements and academic progress. I served as Team Analyst.",
        },
        onlinecourse: {
          description:
            "Online Course is a comprehensive online learning platform designed to facilitate digital education ecosystem with an integrated management system that supports three main roles: Administrator, Participant, and Instructor. The platform provides an end-to-end learning solution that includes course management, multimedia content distribution, integrated payment system, and digital certificate issuance, equipped with real-time analytics dashboard, automatic evaluation system, learning progress tracking,  and review and rating features. I served as Team Analyst and Designer.",
        },
      },

      // Common
      common: {
        viewProject: "View Project",
        viewCode: "View Code",
        download: "Download",
        loading: "Loading...",
        switchToIndonesian: "Switch to Indonesian",
        switchToEnglish: "Switch to English",
      },
    },
  },

  id: {
    translation: {
      // Navigation
      nav: {
        home: "Beranda",
        about: "Tentang",
        projects: "Proyek",
        resume: "Resume",
      },

      // Home Page
      home: {
        greeting: "Halo Semua!",
        introduction: "Saya",
        name: "Nabil Attala Noviandy",
        subtitle: "<1>PERKENALKAN</1> DIRI SAYA",
        description:
          "Saya adalah seorang web developer dengan keahlian dalam pengembangan aplikasi web yang efisien dan user-friendly.\n\nSaya menguasai teknologi web fundamental seperti <1>HTML, CSS, dan PHP.</1>\n\nBidang keahlian saya mencakup pengembangan <2>Backend Systems</2> serta berpengalaman dalam peran sebagai <2>System Analyst.</2>\n\nDalam setiap proyek, saya menerapkan keahlian saya dalam menggunakan <3>Laravel Framework</3> dan <4>Modern Web Development Practices</4> untuk menciptakan <5>solusi digital yang scalable dan robust</5>.",
      },

      // About Page
      about: {
        title: "Mengenal Siapa <1>Saya</1>",
        skills: "Keahlian <1>Profesional</1>",
        tools: "<1>Alat</1> yang Saya Gunakan",
        description:
          "Halo, saya <1>Nabil Attala Noviandy</1> dari <2>Bogor, Indonesia</2>. Saya adalah lulusan <3>SMK Negeri 1 Ciomas</3>, jurusan <4>Pengembangan Perangkat Lunak dan Gim (PPLG)</4>. Saya memiliki passion yang kuat dalam pengembangan web, dengan fokus khusus pada <5>backend development</5> dan <6>system analysis</6>. Selama masa pendidikan, saya aktif terlibat dalam berbagai proyek pengembangan, termasuk aplikasi <7>SIMONIK</7> dan platform marketplace <8>WebKu</8>.",
      },

      // Projects Page
      projects: {
        title: "<1>Proyek</1> Terbaru Saya",
        description: "Berikut adalah beberapa proyek yang telah saya kerjakan.",
        simonik: {
          description:
            "Aplikasi SIMONIK merupakan solusi digital untuk mencatat dan memantau kegiatan siswa selama Praktik Kerja Lapangan (PKL) di IDUKA, menggantikan metode manual dengan sistem yang lebih terstruktur dan efisien. Saya berperan sebagai Team Analyst.",
        },
        webku: {
          description:
            "WebKu adalah platform web yang dirancang untuk memfasilitasi penjualan perangkat lunak karya pengembang lokal, terutama dari lingkungan sekolah, dan menjadi solusi bagi institusi pendidikan serta masyarakat umum dalam mengakses software yang dibutuhkan. Saya berperan sebagai Backend Developer, System Analyst, dan Design.",
        },
        simeet: {
          description:
            "SIMEET adalah platform digital yang dirancang untuk mempermudah pengelolaan kegiatan classmeeting di sekolah, mulai dari manajemen akun OSIS dan Kelas, pendaftaran lomba, penjadwalan, hingga pencatatan hasil dan pengumuman pemenang. Saya berperan sebagai System Analyst.",
        },
        rekam: {
          description:
            "Rekam Medik adalah platform digital terintegrasi yang dirancang untuk memfasilitasi pengelolaan data dan kegiatan siswa secara komprehensif dalam lingkungan pendidikan. Sistem ini menyediakan solusi terpusat bagi administrasi sekolah untuk mengelola berbagai aspek kehidupan akademik siswa, mulai dari pencatatan kehadiran, profil pribadi, pemantauan perilaku dan disiplin, hingga dokumentasi prestasi dan perkembangan akademik. Saya berperan sebagai System Analyst.",
        },
        onlinecourse: {
          description:
            "Online Course adalah platform pembelajaran online komprehensif yang dirancang untuk memfasilitasi ekosistem pendidikan digital dengan sistem manajemen terintegrasi yang mendukung tiga peran utama: Administrator, Peserta, dan Instruktur. Platform ini menyediakan solusi pembelajaran end-to-end yang mencakup manajemen kursus, distribusi konten multimedia, sistem pembayaran terintegrasi, dan penerbitan sertifikat digital, dilengkapi dengan dashboard analitik real-time, sistem evaluasi otomatis, tracking progres pembelajaran, serta fitur review dan rating. Sebagai Team Analyst dan Designer. ",
        },
      },

      // Common
      common: {
        viewProject: "Lihat Proyek",
        viewCode: "Lihat Kode",
        download: "Unduh",
        loading: "Memuat...",
        switchToIndonesian: "Ganti ke Bahasa Indonesia",
        switchToEnglish: "Ganti ke Bahasa Inggris",
      },
    },
  },
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,

    // Language detection options
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },

    fallbackLng: "en", // Fallback language
    debug: false, // Set to true for development

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    // Additional options
    returnObjects: false,
    returnEmptyString: false,
    returnNull: false,
  });

export default i18n;
