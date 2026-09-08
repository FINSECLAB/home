import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import useTab, { useNestedTab } from '../utils/useTab';

/* ===== DATA ===== */
const faculty = {
  name: '강 형 우',
  titleText: '고려대학교 교수',
  email: 'kanghw@korea.ac.kr',
  office: '고려대학교 자연계캠퍼스 정운오IT교양관 315호',
  researchArea: '금융보안, 가상자산보안',
  scholarUrl: 'https://scholar.google.com/citations?user=_2nejHwAAAAJ&hl=en',
};

const education = [
  { year: '2006', desc: '고려대학교 정보보호 박사' },
  { year: '1999', desc: '고려대학교 전산학 석사' },
  { year: '1997', desc: '고려대학교 전산학 학사' },
];

const experience = [
  { title: '고려대학교 정보보호대학원 전임교수', date: '2025.03 – 현재' },
  { title: '금융위원회 "금융보안규제선진화TF" 민간자문위원', date: '2023.02 – 2024.01' },
  { title: '(주)KG이니시스 사외이사', date: '2022.03 – 2024.02' },
  { title: '김 · 장 법률사무소 전문위원', date: '2021.04 – 2025.02' },
  { title: '건국대학교 정보통신대학원 겸임교수', date: '2018.09 – 2019.12' },
  { title: '금융감독원 정보보안팀 팀장', date: '2006.09 – 2021.02' },
  { title: '한국전자통신연구원(ETRI) 부호기술부 선임연구원', date: '1999.02 – 2006.09' },
];

const affiliations = [
  { title: 'JB금융지주 자문교수', date: '2026.03 – 현재' },
  { title: '(주)엔키화이트햇 사외이사', date: '2025.11 – 현재' },
  { title: '금융위원회 소프트웨어사업 과업심의위원회', date: '2025.03 – 현재' },
  { title: '금융감독원 금융데이터분야 외부평가위원', date: '2025.05 – 현재' },
  { title: '개인정보보호위원회 개인정보 안심구역 지정심사위원', date: '2025.05 – 현재' },
  { title: '디지털자산정책포럼 운영위원', date: '2023.05 – 현재' },
  { title: '금융보안포럼 운영위원', date: '2023.01 – 현재' },
  { title: '한국정보보호학회 금융보안연구회 위원장', date: '2021.01 – 현재' },
  { title: '미래보안기술포럼 전문위원', date: '2020.01 – 현재' },
];

const fullTimeStudents = [
  { name: '정진호', degree: '석사', cohort: '52기', major: '정보보호', email: 'jungjinho@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/정진호.png` },
  { name: '손예원', degree: '석사', cohort: '48기', major: '정보보안', email: 'fjqm4155@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/손예원.png` },
  { name: '박천호', degree: '석사', cohort: '50기', major: '정보보안', email: 'pch3467@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/박천호.png` },
  { name: '임시온', degree: '석사', cohort: '50기', major: '정보보안', email: 'ssionn02@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/임시온.png` },
  { name: '민기단', degree: '석사', cohort: '51기', major: '융합보안', email: 'airmass@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/민기단.png` },
  { name: '이설', degree: '석사', cohort: '52기', major: '정보보호', email: 'seollee@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/이설.png` },
];

const undergraduateInterns = [
  { name: '조은', degree: '', cohort: '', major: '', email: 's1lv3r@korea.ac.kr', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/조은.png` },
];

const doctoralStudents = [
  { name: '손영설', degree: '박사', cohort: '51기', company: '삼성카드', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '이영광', degree: '박사', cohort: '51기', company: '금융감독원', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '이영민', degree: '박사', cohort: '51기', company: '한화생명', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
];

const partTimeStudents = [
  { name: '성호열', degree: '석사', cohort: '49기', company: '우리은행', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '이동운', degree: '석사', cohort: '49기', company: '안랩', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/이동운.png` },
  { name: '박성수', degree: '석사', cohort: '49기', company: '농협은행', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '장은지', degree: '석사', cohort: '49기', company: '신한은행', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '이재형', degree: '석사', cohort: '49기', company: '신한투자증권', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/이재형.png` },
  { name: '정혜성', degree: '석사', cohort: '49기', company: '금융보안원', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/정혜성.png` },
  { name: '유효종', degree: '석사', cohort: '49기', company: '한국산업은행', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '정용준', degree: '석사', cohort: '49기', company: '신한투자증권', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/정용준.png` },
  { name: '백승미', degree: '석사', cohort: '49기', company: '삼성 SDS', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/백승미.png` },
  { name: '유정재', degree: '석사', cohort: '49기', company: 'IR 큐더스', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '류신영', degree: '석사', cohort: '49기', company: '딜로이트', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/류신영.png` },
  { name: '장세인', degree: '석사', cohort: '49기', company: '토스증권', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '김정훈', degree: '석사', cohort: '49기', company: '딜로이트', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/김정훈.png` },
  { name: '백하나', degree: '석사', cohort: '49기', company: '한국산업은행', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '양병수', degree: '석사', cohort: '49기', company: '교보증권', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/양병수.png` },
  { name: '박지영', degree: '석사', cohort: '50기', company: '신한카드', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '문요셉', degree: '석사', cohort: '50기', company: '신한라이프', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '김효진', degree: '석사', cohort: '50기', company: '신한 DS', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '권성민', degree: '석사', cohort: '50기', company: '기업은행', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '지상희', degree: '석사', cohort: '50기', company: '신한 DS', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '강정근', degree: '석사', cohort: '50기', company: '피앤피시큐어', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '어진철', degree: '석사', cohort: '50기', company: '시큐아이', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/어진철.png` },
  { name: '고병산', degree: '석사', cohort: '51기', company: '한국투자증권', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/고병산.png` },
  { name: '고영천', degree: '석사', cohort: '51기', company: '금융감독원', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '국태호', degree: '석사', cohort: '51기', company: '오늘의집', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/국태호.png` },
  { name: '김동하', degree: '석사', cohort: '51기', company: '농협은행', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '김민혁', degree: '석사', cohort: '51기', company: '금융보안원', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/김민혁.png` },
  { name: '김승주', degree: '석사', cohort: '51기', company: 'KB국민은행', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/김승주.png` },
  { name: '김재관', degree: '석사', cohort: '51기', company: '시큐다임', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/김재관.png` },
  { name: '김호창', degree: '석사', cohort: '51기', company: '우리금융지주', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '김효진', degree: '석사', cohort: '51기', company: '금융감독원', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '박원민', degree: '석사', cohort: '51기', company: '카카오', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/박원민.png` },
  { name: '박현민', degree: '석사', cohort: '51기', company: '법무법인(유한) 세종', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/박현민.png` },
  { name: '배성민', degree: '석사', cohort: '51기', company: '생명보험협회', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/배성민.png` },
  { name: '유지안', degree: '석사', cohort: '51기', company: '금융감독원', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/유지안.png` },
  { name: '이원중', degree: '석사', cohort: '51기', company: '지슨', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/이원중.png` },
  { name: '이한석', degree: '석사', cohort: '51기', company: '우리은행', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/이한석.png` },
  { name: '이호연', degree: '석사', cohort: '51기', company: '신한금융지주', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/이호연.png` },
  { name: '이진규', degree: '석사', cohort: '51기', company: '한국정보통신기술협회', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/이진규 02.png` },
  { name: '이지유', degree: '석사', cohort: '51기', company: '한화생명', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '제하성', degree: '석사', cohort: '51기', company: '한국투자캐피탈', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/익명.png` },
  { name: '황태빈', degree: '석사', cohort: '52기', company: '한국평가데이터', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/no_background/황태빈.png` },
];

const getCohortNumber = cohort => {
  const match = cohort?.match(/\d+/);
  return match ? Number(match[0]) : Number.POSITIVE_INFINITY;
};

const sortByCohortAndKoreanName = (people, { descending = false } = {}) => [...people].sort((a, b) => {
  const aCohort = getCohortNumber(a.cohort);
  const bCohort = getCohortNumber(b.cohort);
  if (aCohort !== bCohort) return descending ? bCohort - aCohort : aCohort - bCohort;
  return a.name.localeCompare(b.name, 'ko-KR');
});

const sortedFullTime = sortByCohortAndKoreanName(fullTimeStudents);
const sortedUndergraduateInterns = sortByCohortAndKoreanName(undergraduateInterns);
const sortedDoctoral = sortByCohortAndKoreanName(doctoralStudents);
const sortedPartTime = sortByCohortAndKoreanName(partTimeStudents);

const alumniList = [
  { name: '배준호', degree: '석사', cohort: '47기', company: '엔키화이트햇' },
  { name: '남현수', degree: '석사', cohort: '47기', company: '금융감독원' },
  { name: '박민주', degree: '석사', cohort: '47기', company: 'UBS 증권' },
  { name: '이상훈', degree: '석사', cohort: '47기', company: '금융감독원' },
  { name: '김강철', degree: '석사', cohort: '47기', company: '한국예탁결제원' },
  { name: '유범석', degree: '석사', cohort: '47기', company: 'LS 증권' },
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
            alt="강형우 교수"
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

    <div className="page-content" style={{ paddingTop: '1.5cm', paddingBottom: '1.5cm' }}>
      <div className="education-section">
        <h2>학력</h2>
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

    <div className="professor-exp-bg">
      <div className="page-content" style={{ paddingTop: '1.5cm', paddingBottom: '1.5cm' }}>
        <div className="exp-section-grid">
          <h2 className="exp-section-title">주요 경력</h2>
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

    <div className="page-content" style={{ paddingTop: '1.5cm', paddingBottom: '0cm' }}>
      <div className="affiliations-section">
        <div className="exp-section-grid">
          <h2 className="exp-section-title">현직</h2>
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
    { key: 'fulltime', label: '석사과정\n(Full-Time)' },
    { key: 'intern', label: '학부 인턴\n(Full-Time)' },
    { key: 'phd', label: '박사과정\n(Part-time)' },
    { key: 'parttime', label: '석사과정\n(Part-time)' },
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
      <h2 className="page-section-title">연구원</h2>
      <hr className="page-section-divider" />

      <div className="researcher-inner-nav">
        {innerTabs.map(tab => (
          <button key={tab.key} className={innerTab === tab.key ? 'active' : ''} onClick={() => setInnerTab(tab.key)} style={{ whiteSpace: 'pre-line' }}>
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
  return (
    <div className="page-content">
      <h2 className="page-section-title">졸업생</h2>
      <hr className="page-section-divider" />
      <div className="table-scroll-wrapper">
        <div className="alumni-table-header">
          <span>이름</span>
          <span>직업</span>
          <span></span>
        </div>
        {sortedAlumni.map((person, i) => (
          <div key={i} className="alumni-row">
            <span className="alumni-name-cell">{person.name}</span>
            <span className="alumni-company-cell">{person.company}</span>
            <span className="alumni-cohort-cell">{person.degree} {person.cohort}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ===== MAIN COMPONENT ===== */
const Faculty_ko = () => {
  const [activeTab] = useTab('professor');
  const bannerSrc = `${process.env.PUBLIC_URL}/background/members.jpg`;

  const bannerTitle = { professor: '교수', researcher: '연구원', alumni: '졸업생' }[activeTab];

  return (
    <div>
      <Seo routeKey="members" />

      {/* Mobile-only tab bar — 탭 딥링크는 해시 사용 (?tab= 쿼리는 Google이 중복 URL로 크롤링함) */}
      <div className="mobile-members-tabs">
        <Link to="/ko/members" className={activeTab === 'professor' ? 'active' : ''}>교수</Link>
        <Link to="/ko/members#researcher" className={activeTab === 'researcher' ? 'active' : ''}>연구원</Link>
        <Link to="/ko/members#alumni" className={activeTab === 'alumni' ? 'active' : ''}>졸업생</Link>
      </div>

      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>{bannerTitle}</h1>
      </div>

      {activeTab === 'professor' && <ProfessorTab />}
      {activeTab === 'researcher' && <ResearcherTab />}
      {activeTab === 'alumni' && <AlumniTab />}
    </div>
  );
};

export default Faculty_ko;
