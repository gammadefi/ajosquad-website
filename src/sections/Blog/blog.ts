import { BlogCardType } from "./BlogCard";

export const blogData: BlogCardType[] = [
  {
    id: '1',
    imgUrl: 'https://dummyimage.com/600x400/000/fff&text=Investment+Strategies',
    title: 'Top 10 Investment Strategies for Beginners',
    description: 'Discover the best strategies to start your investment journey, from stocks to bonds and mutual funds.',
    publishDate: '2024-09-15',
    readTime: '5 min',
    tags: [
      { name: 'Investing' },
      { name: 'Finance' }
    ],
    comments: [
      { username: 'Investor101', content: 'Great tips for beginners! Thanks!', date: '2024-09-16' },
      { username: 'JaneDoe', content: 'I’m already using a few of these strategies!', date: '2024-09-17' },
      { username: 'MoneyMaster', content: 'What about index funds?', date: '2024-09-18' }
    ]
  },
  {
    id: '2',
    imgUrl: 'https://dummyimage.com/600x400/000/fff&text=Saving+Money',
    title: 'How to Save Money in a High-Inflation Economy',
    description: 'Learn practical tips to safeguard your finances and maintain your savings during inflation.',
    publishDate: '2024-08-30',
    readTime: '7 min',
    tags: [
      { name: 'Personal Finance' },
      { name: 'Inflation' }
    ],
    comments: [
      { username: 'PennySaver', content: 'This is exactly what I needed!', date: '2024-08-31' },
      { username: 'BudgetQueen', content: 'Such a relevant topic right now. Thanks!', date: '2024-09-01' }
    ]
  },
  {
    id: '3',
    imgUrl: 'https://dummyimage.com/600x400/000/fff&text=Crypto+Investment',
    title: 'Is Cryptocurrency a Safe Investment in 2024?',
    description: 'Explore the risks and rewards of investing in cryptocurrencies this year.',
    publishDate: '2024-10-05',
    readTime: '6 min',
    tags: [
      { name: 'Cryptocurrency' },
      { name: 'Investing' }
    ],
    comments: [
      { username: 'CryptoGuru', content: 'Bitcoin all the way!', date: '2024-10-06' },
      { username: 'Skeptic123', content: 'Still not convinced about crypto.', date: '2024-10-06' }
    ]
  },
  {
    id: '4',
    imgUrl: 'https://dummyimage.com/600x400/000/fff&text=Retirement+Planning',
    title: 'Retirement Planning: How to Secure Your Future',
    description: 'An essential guide to planning for retirement, including key steps and strategies for all ages.',
    publishDate: '2024-07-20',
    readTime: '9 min',
    tags: [
      { name: 'Retirement' },
      { name: 'Finance' }
    ],
    comments: [
      { username: 'FutureRetiree', content: 'Planning is everything. Thanks for the tips!', date: '2024-07-21' },
      { username: 'SavingsSally', content: 'Can you add more details on 401(k) plans?', date: '2024-07-22' }
    ]
  },
  {
    id: '5',
    imgUrl: 'https://dummyimage.com/600x400/000/fff&text=Debt+Management',
    title: 'How to Effectively Manage and Reduce Debt',
    description: 'Learn actionable steps to get out of debt and improve your financial stability.',
    publishDate: '2024-06-11',
    readTime: '8 min',
    tags: [
      { name: 'Debt' },
      { name: 'Personal Finance' }
    ],
    comments: [
      { username: 'DebtFreeSoon', content: 'This is motivating, thank you!', date: '2024-06-12' },
      { username: 'CreditCardWoes', content: 'Great advice for tackling credit card debt.', date: '2024-06-13' }
    ]
  },
  {
    id: '6',
    imgUrl: 'https://dummyimage.com/600x400/000/fff&text=Stock+Market',
    title: 'Understanding the Stock Market: A Beginner’s Guide',
    description: 'A simplified guide to understanding the stock market, its terms, and how to start investing.',
    publishDate: '2024-09-01',
    readTime: '5 min',
    tags: [
      { name: 'Stock Market' },
      { name: 'Investing' }
    ],
    comments: [
      { username: 'Stocks4Life', content: 'This really helped me get started!', date: '2024-09-02' },
      { username: 'WallStreetNovice', content: 'Simple and easy to understand.', date: '2024-09-03' }
    ]
  }
]
