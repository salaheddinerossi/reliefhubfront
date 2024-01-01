export const environment = {

  apiUrl: 'http://143.244.199.239/',

  defaultNavLinks: [
    { title: 'Home', path: '/' },
    { title: 'Relief Request', path: '/relief-request' },
    { title: 'Report a Disaster', path: '/report-disaster' },
    { title: 'Organizations', path: '/organizations' }
  ],

  defaultZoneText:{
    header:"Disaster Relief Hub",
    text:"A platform to connect victims, volunteers, and organizations for effective disaster relief efforts",
    greenButtonText:"Partner with us",
    greenButtonLink:"text1",
    yellowButtonText:"Explore disasters",
    yellowButtonLink:"text1",
  },

  cardsContent:{
    header:"How We Make a Difference",
    paragraph:"At Disadter Relief Hub, We’re commiteted to making disaster relief effort more efficient and effective. Here’s how  we empower you to make a fdiggerence:",
    cardsContent:{
      header:"How We Make a Difference",
      paragraph:"At Disadter Relief Hub, We’re commiteted to making disaster relief effort more efficient and effective. Here’s how  we empower you to make a fdiggerence:",
      card:[{
        title:"Connecting Victims with Assistance",
        text:"Seemlessly request essentiel help during a crises and connect with willing volunteers and organization ready to provide immediate aid",
        link:"/assets/images/card-icons/community.png"

        },
        {
          title:"Matching Resources to needs",
          text:"Offer your assistance or resources to those in need. our platform ensure a seamless match between volunteers, organizations, and the specific needs  of victims.",
          link:"/assets/images/card-icons/partnership.png"

        },
        {
          title:"Empowering Aid Organizations",
          text:"If you represent an Organization, Sign up to coordinate and deliver aid effectively. Register your organizations to play a vital role in disaster relief efforts.",
          link:"/assets/images/card-icons/social-care.png"

        },
        {
          title:"Join Our Community Of Helpers",
          text:"Join our community of dedicated volunteers. Register to offer your time, skills, and expertise to assist disaster victims.",
          link:"/assets/images/card-icons/network.png"

        }

      ]
    }

  },

  helpAnnouncementHeader:{
    imageLink:'/assets/images/header-images/small-header/smallHeader1.png',
    title:"Help announcement"
  }

};
