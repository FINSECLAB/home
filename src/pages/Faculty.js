import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import useTab, { useNestedTab } from '../utils/useTab';

/* ===== DATA ===== */
const faculty = {
  name: 'Hyung Woo Kang',
  titleText: 'Professor, Korea University',
  email: 'kanghw@korea.ac.kr',
  office: 'Room 315, Jung Woonoh IT & General Education Center',
  researchArea: 'Financial Security, Virtual Asset Security',
  scholarUrl: 'https://scholar.google.com/citations?user=_2nejHwAAAAJ&hl=en',
  photo: `${process.env.PUBLIC_URL}/people-photos/강형우 교수님 02.jpg`,
};

const education = [
  { year: '2006', desc: 'Ph.D. in information security, Korea University, South Korea' },
  { year: '1999', desc: 'M.S. in computer science, Korea University, South Korea' },
  { year: '1997', desc: 'B.S. in computer science, Korea University, South Korea' },
];

const experience = [
  { title: 'Professor, School of Cybersecurity, Korea University', date: 'Mar. 2025 – Present' },
  { title: 'Financial Supervisory Service (FSS) "Financial Security Regulation Advancement Task Force" External Advisor', date: 'Feb. 2023 – Jan. 2024' },
  { title: 'Outside Director, KG Inicis', date: 'Mar. 2022 – Feb. 2024' },
  { title: 'Expert Advisor, Kim & Chang Law Office', date: 'Apr. 2021 – Feb. 2025' },
  { title: 'Adjunct Professor, Konkuk University', date: 'Sep. 2018 – Dec. 2019' },
  { title: 'Head of Information Security Team, Financial Supervisory Service (FSS)', date: 'Sep. 2006 – Feb. 2021' },
  { title: 'Senior Researcher, National Security Research Institute', date: 'Feb. 1999 – Sep. 2006' },
];

const affiliations = [
  { title: 'Advisory Professor, JB Financial Group', date: 'Mar. 2026 – Present' },
  { title: 'Outside Director, ENKI Co.', date: 'Nov. 2025 – Present' },
  { title: 'Software Project Task Deliberation Committee, Financial Services Commission (FSC)', date: 'Mar. 2025 – Present' },
  { title: 'External Evaluation Committee Member (Financial Data Sector), Financial Supervisory Service (FSS)', date: 'May. 2025 – Present' },
  { title: 'Member of the Personal Information Safe Zone Designation Review Committee, Personal Information Protection Commission (PIPC)', date: 'May. 2025 – Present' },
  { title: 'Steering Committee Member, Digital Asset Policy Forum', date: 'May. 2023 – Present' },
  { title: 'Steering Committee Member, Financial Security Forum', date: 'Jan. 2023 – Present' },
  { title: 'Chair, Financial Security Research Group, Korea Institute of Information Security & Cryptology (KIISC)', date: 'Jan. 2021 – Present' },
  { title: 'Expert Committee Member, Future Security Technology Forum', date: 'Jan. 2020 – Present' },
];

const fullTimeStudents = [
  { name: 'Jin Ho Jung', nameKo: '정진호', degree: 'M.S.', cohort: '52nd', major: 'Department of Information Security', email: 'jungjinho@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/정진호.png` },
  { name: 'Ye Won Son', nameKo: '손예원', degree: 'M.S.', cohort: '48th', major: 'Department of Cyber Security', email: 'fjqm4155@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/손예원.png` },
  { name: 'Cheon Ho Park', nameKo: '박천호', degree: 'M.S.', cohort: '50th', major: 'Department of Cyber Security', email: 'pch3467@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/박천호.png` },
  { name: 'Si On Lim', nameKo: '임시온', degree: 'M.S.', cohort: '50th', major: 'Department of Cyber Security', email: 'ssionn02@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/임시온.png` },
  { name: 'Gi Dan Min', nameKo: '민기단', degree: 'M.S.', cohort: '51st', major: 'Department of Convergence Security', email: 'airmass@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/민기단.png` },
  { name: 'Seol Lee', nameKo: '이설', degree: 'M.S.', cohort: '52nd', major: 'Department of Information Security', email: 'seollee@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/이설.png` },
];

const undergraduateInterns = [
  { name: 'Eun Jo', nameKo: '조은', degree: '', cohort: '', major: '', email: 's1lv3r@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/조은.png` },
];

const doctoralStudents = [
  { name: 'Young Seol Son', nameKo: '손영설', degree: 'Ph.D.', cohort: '51st', company: 'Samsung Card', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Yeong Gwang Lee', nameKo: '이영광', degree: 'Ph.D.', cohort: '51st', company: 'FSS', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Young Min Lee', nameKo: '이영민', degree: 'Ph.D.', cohort: '51st', company: 'Hanwha Life', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
];

const partTimeStudents = [
  { name: 'Ho Yeol Seong', nameKo: '성호열', degree: 'M.S.', cohort: '49th', company: 'Woori Bank', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Dong Woon Lee', nameKo: '이동운', degree: 'M.S.', cohort: '49th', company: 'AhnLab', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/이동운.png` },
  { name: 'Seong Soo Park', nameKo: '박성수', degree: 'M.S.', cohort: '49th', company: 'NH Bank', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Eun Ji Jang', nameKo: '장은지', degree: 'M.S.', cohort: '49th', company: 'Shinhan Bank', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Jae Hyung Lee', nameKo: '이재형', degree: 'M.S.', cohort: '49th', company: 'Shinhan Securities', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/이재형.png` },
  { name: 'Hye Sung Jeong', nameKo: '정혜성', degree: 'M.S.', cohort: '49th', company: 'Financial Security Institute', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/정혜성.png` },
  { name: 'Hyo Jong Yoo', nameKo: '유효종', degree: 'M.S.', cohort: '49th', company: 'Korea Development Bank', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Yong Jun Jeong', nameKo: '정용준', degree: 'M.S.', cohort: '49th', company: 'Shinhan Securities', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/정용준.png` },
  { name: 'Seung Mi Baek', nameKo: '백승미', degree: 'M.S.', cohort: '49th', company: 'Samsung SDS', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/백승미.png` },
  { name: 'Jeong Jae Yoo', nameKo: '유정재', degree: 'M.S.', cohort: '49th', company: 'IR KUDOS', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Shin Young Lue', nameKo: '류신영', degree: 'M.S.', cohort: '49th', company: 'Deloitte', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/류신영.png` },
  { name: 'Se In Jang', nameKo: '장세인', degree: 'M.S.', cohort: '49th', company: 'Toss Securities', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Jeong Hoon Kim', nameKo: '김정훈', degree: 'M.S.', cohort: '49th', company: 'Deloitte', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/김정훈.png` },
  { name: 'Ha Na Baek', nameKo: '백하나', degree: 'M.S.', cohort: '49th', company: 'Korea Development Bank', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Byung Soo Yang', nameKo: '양병수', degree: 'M.S.', cohort: '49th', company: 'Kyobo Securities', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/양병수.png` },
  { name: 'Ji Young Park', nameKo: '박지영', degree: 'M.S.', cohort: '50th', company: 'Shinhan Card', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Yo Sep Moon', nameKo: '문요셉', degree: 'M.S.', cohort: '50th', company: 'Shinhan Life Insurance', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Hyo Jin Kim', nameKo: '김효진', degree: 'M.S.', cohort: '50th', company: 'Shinhan DS', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Seong Min Kwon', nameKo: '권성민', degree: 'M.S.', cohort: '50th', company: 'Industrial Bank of Korea', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Sang Hee Ji', nameKo: '지상희', degree: 'M.S.', cohort: '50th', company: 'Shinhan DS', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Jeong Geun Kang', nameKo: '강정근', degree: 'M.S.', cohort: '50th', company: 'PNPSecure', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Jin Cheol Eo', nameKo: '어진철', degree: 'M.S.', cohort: '50th', company: 'SECUI', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/어진철.png` },
  { name: 'Byeong San Ko', nameKo: '고병산', degree: 'M.S.', cohort: '51st', company: 'Korea Investment & Securities', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/고병산.png` },
  { name: 'Yeong Cheon Go', nameKo: '고영천', degree: 'M.S.', cohort: '51st', company: 'FSS', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Tae Ho Kuk', nameKo: '국태호', degree: 'M.S.', cohort: '51st', company: 'Bucketplace', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/국태호.png` },
  { name: 'Dong Ha Kim', nameKo: '김동하', degree: 'M.S.', cohort: '51st', company: 'NH Bank', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Min Hyuk Kim', nameKo: '김민혁', degree: 'M.S.', cohort: '51st', company: 'Financial Security Institute', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/김민혁.png` },
  { name: 'Seung Joo Kim', nameKo: '김승주', degree: 'M.S.', cohort: '51st', company: 'Kookmin Bank', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/김승주.png` },
  { name: 'Jae Kwan Kim', nameKo: '김재관', degree: 'M.S.', cohort: '51st', company: 'SECUDAim', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/김재관.png` },
  { name: 'Ho Chang Kim', nameKo: '김호창', degree: 'M.S.', cohort: '51st', company: 'Woori Financial Group', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Hyo Jin Kim', nameKo: '김효진', degree: 'M.S.', cohort: '51st', company: 'FSS', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Won Min Park', nameKo: '박원민', degree: 'M.S.', cohort: '51st', company: 'Kakao Corp.', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/박원민.png` },
  { name: 'Hyun Min Park', nameKo: '박현민', degree: 'M.S.', cohort: '51st', company: 'SHIN & KIM LLC.', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/박현민.png` },
  { name: 'Seong Min Bae', nameKo: '배성민', degree: 'M.S.', cohort: '51st', company: 'KLIA', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/배성민.png` },
  { name: 'Ji Ahn Ryu', nameKo: '유지안', degree: 'M.S.', cohort: '51st', company: 'FSS', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/유지안.png` },
  { name: 'Won Joong Lee', nameKo: '이원중', degree: 'M.S.', cohort: '51st', company: 'GITSN', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/이원중.png` },
  { name: 'Han Seok Lee', nameKo: '이한석', degree: 'M.S.', cohort: '51st', company: 'Woori Bank', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/이한석.png` },
  { name: 'Ho Yeon Lee', nameKo: '이호연', degree: 'M.S.', cohort: '51st', company: 'Shinhan Financial Group', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/이호연.png` },
  { name: 'Jin Gyu Lee', nameKo: '이진규', degree: 'M.S.', cohort: '51st', company: 'TTA', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/이진규 02.png` },
  { name: 'Ji Yu Lee', nameKo: '이지유', degree: 'M.S.', cohort: '51st', company: 'Hanwha Life Insurance', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Ha Sung Jea', nameKo: '제하성', degree: 'M.S.', cohort: '51st', company: 'Korea Investment Capital', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: 'Tae Been Hwang', nameKo: '황태빈', degree: 'M.S.', cohort: '52nd', company: 'Korea Rating & Data.', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/황태빈.png` },
];

const getCohortNumber = cohort => {
  const match = cohort?.match(/\d+/);
  return match ? Number(match[0]) : Number.POSITIVE_INFINITY;
};

const sortByCohortAndKoreanName = (people, { descending = false } = {}) => [...people].sort((a, b) => {
  const aCohort = getCohortNumber(a.cohort);
  const bCohort = getCohortNumber(b.cohort);
  if (aCohort !== bCohort) return descending ? bCohort - aCohort : aCohort - bCohort;
  return (a.nameKo || a.name).localeCompare(b.nameKo || b.name, 'ko-KR');
});

const sortedFullTime = sortByCohortAndKoreanName(fullTimeStudents);
const sortedUndergraduateInterns = sortByCohortAndKoreanName(undergraduateInterns);
const sortedDoctoral = sortByCohortAndKoreanName(doctoralStudents);
const sortedPartTime = sortByCohortAndKoreanName(partTimeStudents);

const alumniList = [
  { name: 'Jun Ho Bae', nameKo: '배준호', degree: 'M.S.', cohort: '47th', company: 'ENKI Co.' },
  { name: 'Hyun Soo Nam', nameKo: '남현수', degree: 'M.S.', cohort: '47th', company: 'FSS' },
  { name: 'Min Ju Park', nameKo: '박민주', degree: 'M.S.', cohort: '47th', company: 'UBS Securities' },
  { name: 'Sang Hoon Lee', nameKo: '이상훈', degree: 'M.S.', cohort: '47th', company: 'FSS' },
  { name: 'Kang Cheol Kim', nameKo: '김강철', degree: 'M.S.', cohort: '47th', company: 'Korea Securities Depository' },
  { name: 'Beom Seok Yoo', nameKo: '유범석', degree: 'M.S.', cohort: '47th', company: 'LS Securities' },
];

const sortedAlumni = sortByCohortAndKoreanName(alumniList, { descending: true });

/* ===== SUB COMPONENTS ===== */

const ResearcherCard = ({ student }) => {
  const cohortDisplay = [student.degree, student.cohort].filter(Boolean).join(' ');
  return (
    <div className="researcher-card">
      <div className="researcher-card-info">
        <p className="researcher-name">{student.name}</p>
        {student.major && <p className="researcher-major">{student.major}</p>}
        {cohortDisplay && <span className="researcher-cohort">{cohortDisplay}</span>}
        {student.email && (
          <a href={`mailto:${student.email}`} className="researcher-email">[E-Mail]</a>
        )}
        {student.company && !student.email && (
          <span className="researcher-major">{student.company}</span>
        )}
      </div>
      <img src={student.photo} alt={student.name} className="researcher-photo" />
    </div>
  );
};

const ProfessorTab = () => (
  <>
    {/* Profile hero */}
    <div className="professor-hero-outer">
      <div className="professor-hero-inner">
        <div className="professor-photo-col">
          <img
            src={`${process.env.PUBLIC_URL}/people-photos/강형우 교수님 02.jpg`}
            alt="Hyung Woo Kang"
            className="professor-hero-photo"
          />
        </div>
        <div className="professor-info-col">
          <div className="professor-name-wrap">
            <h2 className="professor-name">{faculty.name}</h2>
          </div>
          <div className="professor-hero-bg">
            <p className="professor-title-text">{faculty.titleText}</p>
            <div className="professor-meta-grid">
              <div className="professor-meta-item">
                <svg className="professor-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
              </div>
              <div className="professor-meta-item">
                <svg className="professor-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                <a href={faculty.scholarUrl} target="_blank" rel="noopener noreferrer">Google Scholar</a>
              </div>
              <div className="professor-meta-item">
                <svg className="professor-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
                <span>{faculty.office}</span>
              </div>
              <div className="professor-meta-item">
                <svg className="professor-meta-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                <span>{faculty.researchArea}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Education */}
    <div className="page-content" style={{ paddingTop: '1.5cm', paddingBottom: '1.5cm' }}>
      <div className="education-section">
        <h2>Education</h2>
        <div className="timeline">
          {education.map((item, i) => (
            <div key={i} className="timeline-item">
              <span className="timeline-year">{item.year}</span>
              <span className="timeline-desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Professional Experience — gray background */}
    <div className="professor-exp-bg">
      <div className="page-content" style={{ paddingTop: '1.5cm', paddingBottom: '1.5cm' }}>
        <div className="exp-section-grid">
          <h2 className="exp-section-title">Professional Experience</h2>
          <ul className="exp-list">
            {experience.map((item, i) => (
              <li key={i}>
                <div className="exp-item-content">
                  <p className="exp-item-title">{item.title}</p>
                  <p className="exp-item-date">{item.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Affiliations */}
    <div className="page-content" style={{ paddingTop: '1.5cm', paddingBottom: '0cm' }}>
      <div className="affiliations-section">
        <div className="exp-section-grid">
          <h2 className="exp-section-title">Affiliations</h2>
          <ul className="exp-list">
            {affiliations.map((item, i) => (
              <li key={i}>
                <div className="exp-item-content">
                  <p className="exp-item-title">{item.title}</p>
                  <p className="exp-item-date">{item.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </>
);

const ResearcherTab = () => {
  const [innerTab, setInnerTab] = useNestedTab(
    'researcher',
    'fulltime',
    ['fulltime', 'intern', 'phd', 'parttime']
  );
  const innerTabs = [
    { key: 'fulltime', label: 'Master Students\n(Full-Time)' },
    { key: 'intern', label: 'Undergraduate Intern\n(Full-Time)' },
    { key: 'phd', label: 'Ph.D. Students\n(Part-time)' },
    { key: 'parttime', label: 'Master Students\n(Part-time)' },
  ];

  const getStudents = () => {
    if (innerTab === 'fulltime') return sortedFullTime;
    if (innerTab === 'intern') return sortedUndergraduateInterns;
    if (innerTab === 'phd') return sortedDoctoral;
    if (innerTab === 'parttime') return sortedPartTime;
    return [];
  };

  return (
    <div className="page-content">
      <h2 className="page-section-title">Researcher</h2>
      <hr className="page-section-divider" />

      <div className="researcher-inner-nav">
        {innerTabs.map(tab => (
          <button
            key={tab.key}
            className={innerTab === tab.key ? 'active' : ''}
            onClick={() => setInnerTab(tab.key)}
            style={{ whiteSpace: 'pre-line' }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="researcher-grid">
        {getStudents().map((student, i) => (
          <ResearcherCard key={`${student.name}-${i}`} student={student} />
        ))}
      </div>
    </div>
  );
};

const AlumniTab = () => {
  const ITEMS_PER_PAGE = 10;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(sortedAlumni.length / ITEMS_PER_PAGE);
  const displayed = sortedAlumni.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="page-content">
      <h2 className="page-section-title">Alumni</h2>
      <hr className="page-section-divider" />

      <div className="table-scroll-wrapper alumni-table-scroll--en">
        <div className="alumni-table-header">
          <span>Name</span>
          <span>Career</span>
          <span></span>
        </div>
        {displayed.map((person, i) => (
          <div key={i} className="alumni-row">
            <span className="alumni-name-cell">{person.name}</span>
            <span className="alumni-company-cell">{person.company}</span>
            <span className="alumni-cohort-cell">{person.degree} {person.cohort}</span>
          </div>
        ))}
        {sortedAlumni.length > ITEMS_PER_PAGE && (
          <div className="alumni-more">...</div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button key={p} className={p === page ? 'active' : ''} onClick={() => setPage(p)}>
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ===== MAIN COMPONENT ===== */
const Faculty = () => {
  const [activeTab] = useTab('professor');
  const bannerSrc = `${process.env.PUBLIC_URL}/background/members.jpg`;

  const bannerTitle = {
    professor: 'Professor',
    researcher: 'Researcher',
    alumni: 'Alumni',
  }[activeTab];

  return (
    <div>
      <Seo routeKey="members" />

      {/* Mobile-only tab bar — 탭 딥링크는 해시 사용 (?tab= 쿼리는 Google이 중복 URL로 크롤링함) */}
      <div className="mobile-members-tabs">
        <Link to="/en/members" className={activeTab === 'professor' ? 'active' : ''}>Professor</Link>
        <Link to="/en/members#researcher" className={activeTab === 'researcher' ? 'active' : ''}>Researcher</Link>
        <Link to="/en/members#alumni" className={activeTab === 'alumni' ? 'active' : ''}>Alumni</Link>
      </div>

      {/* Banner */}
      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>{bannerTitle}</h1>
      </div>

      {/* Content */}
      {activeTab === 'professor' && <ProfessorTab />}
      {activeTab === 'researcher' && <ResearcherTab />}
      {activeTab === 'alumni' && <AlumniTab />}
    </div>
  );
};

export default Faculty;
