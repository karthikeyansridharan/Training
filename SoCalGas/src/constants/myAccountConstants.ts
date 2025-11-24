
export const ACCOUNT_NAV_ITEMS = [
    { name: 'Home', path: '/myaccount/profile' },
    { name: 'Usage', path: '/myaccount/usage' },
    { name: 'Bills', path: '/myaccount/bills' },
    { name: 'Save', path: '/myaccount/save' },
    { name: 'Achievements', path: '/myaccount/achievements' },
];

export const MOBILE_NAV_ICONS = {
    home: (color: string) => ({ icon: 'home', color }),
    usage: (color: string) => ({ icon: 'usage', color }),
    bills: (color: string) => ({ icon: 'bills', color }),
    save: (color: string) => ({ icon: 'save', color }),
    achievements: (color: string) => ({ icon: 'achievements', color }),
};

export const recommendationData = [
  {
    title: "Your Bill due date is 3 days away.",
    description: "Set up Autopay and avoid last day hassles and late fee.",
    cta: "Setup Auto Pay",
    icon: "/dollar-reload.png",
  },
  {
    title: "Your card statement is ready.",
    description: "Download your latest statement securely.",
    cta: "View Statement",
    icon: "/statement-icon.png",
  },
  {
    title: "Your cashback is waiting!",
    description: "Redeem your cashback rewards instantly.",
    cta: "Redeem Now",
    icon: "/cashback.png",
  },
];

export const buttons = [
    {image:'/truck.png',name:'Transfer Service'},
    {image:'/flame.png',name:'Check Appliance'},
    {image:'/service.png',name:'Service Requests'},
    {image:'/rebate.png',name:'Rebates'},
];

export const paymentOptions = [
  {type:'Wallets', icon:'/wallet.png'},
  {type:'Netbanking', icon:'/bank.png'},
];

export const accordion = [
  {heading:'Account',details:'Login details and communication preferences',image:'/accordion/account.png'},
  {heading:'Alerts',details:'Notification Preferences',image:'/accordion/alert.png'},
  {heading:'My Plan',details:'View or change plans',image:'/accordion/plan.png'},
  {heading:'Activity',details:'User activity and transaction history',image:'/accordion/activity.png'},
  {heading:'Help',details:'Help centre, contact us, privacy policy',image:'/accordion/help.png'},
];

export const navItems = ["Energy Dashboard","Analyse Usage","Compare Bills"];
