import { MdChildCare } from 'react-icons/md';
import { BsBriefcase } from 'react-icons/bs';
import { AiOutlineRead } from 'react-icons/ai';

const events = [
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '21 Nov 1990',
    desc: 'I hail from Bangkok, Thailand.',
    title: 'The beginning of life',
    icon: <MdChildCare />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '01 Aug 2012',
    desc: `During my studies in Computer Engineering, I interned at TESA Hyper Camp 2012, 
    where I gained valuable experience in embedded systems. 
    This opportunity allowed me to delve into the intricacies of voice recognition technology.`,
    title: 'Internship at TESA',
    image: '/img/resume/tesa.png',
    icon: <AiOutlineRead />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '01 Mar 2013',
    desc: "Graduated with a bachelor's degree Computer Engineering at Naresuan University Phitsanulok Province, Thailand",
    title: "Graduate Bachelor's Degree",
    image: '/img/resume/nulogo.png',
    icon: <AiOutlineRead />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '01 Aug 2013',
    desc: `I held the position of a Java Developer, specializing in the development of web applications for the finance sector. 
    During my tenure, I gained valuable insights into tools such as Jira and Linux, as we utilized Ubuntu for project development. 
    My primary responsibilities included the development of specific components within the loan and payment modules.`,
    title: 'Start working at AR Soft Co., Ltd.',
    image: '/img/resume/ar.png',
    icon: <BsBriefcase />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '01 Feb 2015',
    desc: `I made the switch from Java to .Net C#. Over the years, 
    I've accumulated extensive experience working on various projects in this domain. 
    The team here is not only strong but also exceptionally pleasant to work with.`,
    title: 'Start working at Clicknext Co., Ltd.',
    image: '/img/resume/clicknext.png',
    icon: <BsBriefcase />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '01 May 2019',
    desc: `Software engineer. I engage with cutting-edge technologies such as GCP, DevOps, 
    NodeJs, and .Net Core, particularly in the realm of cloud computing. 
    The organizational culture at this workplace is something I truly cherish and love.`,
    title: 'Start working at Tangerine Co., Ltd.',
    image: '/img/resume/tangerine.png',
    icon: <BsBriefcase />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '02 Sep 2020',
    desc: `I transitioned from a permanent job to an outsourcing role, 
    and it's been a challenge for me to adapt to the work style of an outsourced employee. 
    In my current position as a Full Stack Developer (working with React JS & Node JS), 
    our team operates from home three weeks out of the month. 
    This arrangement means I no longer have to contend with the congestion of public services in Bangkok, 
    making my work experience more efficient and enjoyable.`,
    title: 'Start working Outsource at True Corp',
    image: '/img/resume/true.svg',
    icon: <BsBriefcase />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '03 April 2023',
    desc: `I work here as senior software engineer. Going to office just one day per month, Absolutely i love it.
    We primarily use .NET C# as our main programming language. For handling numerous transactions, we rely on Hangfire.
    Working here presents a constant challenge for me.`,
    title: 'Start working at Zortout Co., Ltd',
    image: '/img/resume/zort.jpg',
    icon: <BsBriefcase />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '19 Feb 2024',
    desc: `Comeback..`,
    title: 'Start working at Clicknext Co., Ltd. Again!',
    image: '/img/resume/clicknext.png',
    icon: <BsBriefcase />,
  },
];

export default events;
