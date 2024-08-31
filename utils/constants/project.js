import {
  AiOutlineCalculator,
  AiOutlineStock,
  AiOutlineProfile,
  AiOutlineFieldTime,
} from 'react-icons/ai';
import { MdChildCare } from 'react-icons/md';
import { RiStockLine } from 'react-icons/ri';

const projects = [
  {
    title: 'Terminal Portfolio',
    github: 'https://github.com/handtevada/portfolio',
    demo: 'https://portfolio.keerati.xyz/',
    blog: 'https://medium.com/@directorys/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-portfolio-web-app-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B8%A3%E0%B9%8B%E0%B9%86-%E0%B8%AA%E0%B9%84%E0%B8%95%E0%B8%A5%E0%B9%8C%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%AD%E0%B8%A3%E0%B9%8C-8c82175a71bb',
    icon: <AiOutlineProfile />,
    content: `My portfolio, Present by terminal command like a developer style.`,
  },
  {
    title: 'SET Chrome Extension',
    github: 'https://github.com/handtevada/set-summary-extension',
    blog: 'https://medium.com/@directorys/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-chrome-extension-%E0%B8%94%E0%B8%B9%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A-set-or-th-2aa9f384b6f7',
    icon: <RiStockLine />,
    content: `Chrome extension, Summary data on many tabs of www.set.or.th in one page`,
  },
  {
    title: 'History Timelines',
    github: 'https://github.com/handtevada/timelines',
    demo: 'https://timelines.keerati.xyz/',
    blog: 'https://medium.com/@directorys/%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%87%E0%B8%AA%E0%B8%B1%E0%B8%A2-%E0%B9%83%E0%B8%84%E0%B8%A3%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%94%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%83%E0%B8%84%E0%B8%A3%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%99%E0%B9%88-42f72e1c6d79',
    icon: <AiOutlineFieldTime />,
    content: `Age range timeline of people in history. Can compared multiple people.`,
  },
  {
    title: 'Salary Calculator',
    github: 'https://github.com/handtevada/my-salary',
    demo: 'https://my-salary.keerati.xyz/',
    blog: 'https://medium.com/@directorys/%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%80%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%84%E0%B8%AB%E0%B8%A3%E0%B9%88%E0%B9%83%E0%B8%99-1-%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5-web-app-calculate-income-53dc6a3cac6b',
    icon: <AiOutlineCalculator />,
    content: `Salary Calculator in part of time. Ex. Days, Hours, Minute, Second.`,
  },
  {
    title: 'Samart Nursery Static Web',
    github: 'https://github.com/handtevada/samart-web-app',
    demo: 'https://samarteducarenursery.com/',
    icon: <MdChildCare />,
    content: `Static web. Build on Next JS.`,
  },
  {
    title: 'Average Stock Web App',
    github: 'https://github.com/handtevada/average-stock',
    demo: 'https://average-stock.keerati.xyz/',
    icon: <AiOutlineStock />,
    content: `Calculate average stock price.`,
  },
];

export default projects;
