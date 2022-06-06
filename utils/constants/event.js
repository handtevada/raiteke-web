import { MdChildCare } from 'react-icons/md';
import { BsBriefcase } from 'react-icons/bs';
import { AiOutlineRead } from 'react-icons/ai';

const events = [
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '21 Nov 1990',
    desc: 'I was born in Bangkok, Thailand.',
    title: 'The Beginning',
    icon: <MdChildCare />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '01 Aug 2012',
    desc: `While I was studying Computer Engineering, 
            I am an intern at TESA Hyper Camp 2012. Here I learn a lot about embedded system. 
            I have tried to build a project about voice recognition.`,
    title: 'Internship at TESA',
    image: '/img/resume/tesa.png',
    icon: <AiOutlineRead />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '01 Mar 2013',
    desc: 'Graduating in computer engineering at Naresuan University, Pitsanulok, Thailand.',
    title: "Graduate Bachelor's Degree",
    image: '/img/resume/nulogo.png',
    icon: <AiOutlineRead />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '01 Aug 2013',
    desc: `I worked in role Java developer. Developing web app for finance business. 
            I learned a lot about Jira and Linux cause here we used Ubuntu for develop project.
            My responsibility was develop part of loan and payment modules.`,
    title: 'Start working at AR Soft Co., Ltd.',
    image: '/img/resume/ar.png',
    icon: <BsBriefcase />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '01 Feb 2015',
    desc: `I switched programming language from Java to .Net C#. I think It's just different syntax. 
            I worked here for many years, Have worked on many projects. Here the team is strong and nice.`,
    title: 'Start working at Clicknext Co., Ltd.',
    image: '/img/resume/clicknext.png',
    icon: <BsBriefcase />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '01 May 2019',
    desc: `Here is probably the dream job of many people. I work as a software engineer. 
            Working with Cloud as GCP, DevOps, NodeJs, .Net Core more. I love culture organization here.`,
    title: 'Start working at Tangerine Co., Ltd.',
    image: '/img/resume/tangerine.png',
    icon: <BsBriefcase />,
  },
  {
    iconStyle: { background: '#fff', color: '#fff' },
    date: '02 Sep 2020',
    desc: `I have switched a job type from permanent to outsourcing. It's challenge me to learn outsource employee work style. 
            Here I work as Full stack developer (React JS & Node JS). My team have worked from home 3 week per month. 
            So I don't have to face the congestion of public services in Bangkok anymore.`,
    title: 'Start working Outsource at True Corp',
    image: '/img/resume/true.svg',
    icon: <BsBriefcase />,
  },
];

export default events;
