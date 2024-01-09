import {HelpForms} from "./app/features/forms/models/form-models";


export const environment = {

  apiUrl: 'http://143.244.199.239/',

  defaultNavLinks: [
    { title: 'Home', path: '/' },
    { title: 'Relief Request', path: '/relief' },
    { title: 'Report a Disaster', path: '/declaration' },
    { title: 'Organizations', path: '/login' }
  ],

  organizationNavLinks: [
    { title: 'Home', path: '/organization' },
    { title: 'Profile', path: '/organization/profile' },
    { title: 'create announcement', path: '/organization/create-announcement' },
    { title: 'log out', path: '/logout' },
  ],

  adminNavLinks: [
    { title: 'Home', path: '/admin' },
    { title: 'Disasters', path: '/admin/create-disaster' },
    { title: 'organizations', path: '/admin/organizations' },
    { title: 'Disaster Alerts', path: '/admin/declarations' },
    { title: 'Log out', path: '/logout' },
  ],

  defaultZoneText:{
    header:"Disaster Relief Hub",
    text:"A platform to connect victims, volunteers, and organizations for effective disaster relief efforts",
    greenButtonText:"Partner with us",
    greenButtonLink:"/register",
    yellowButtonText:"Explore disasters",
    yellowButtonLink:"text1",
  },

  organizationZoneText:{
    header:"Disaster Relief Hub",
    text:"Dive into the heart of disaster zones and craft compelling announcements to recruit and activate your forces",
    greenButtonText:"view profile",
    greenButtonLink:"/organization/profile",
    yellowButtonText:"start helping",
    yellowButtonLink:"/organization/create-announcement",
  },

  adminZoneText:{
    header:"Disaster Relief Hub",
    text:"Together, we're Building the Bridge: One hand, one step, one act of kindness at a time.",
    greenButtonText:"Organizations",
    greenButtonLink:"admin/organizations",
    yellowButtonText:"view declarations",
    yellowButtonLink:"/admin/declarations",
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
    imageLink:'/assets/images/header-images/small-header/header1.png',
    title:"Help announcement",
    title2:"Be the Change You Want to See"
  },
  submitHelp2:{
    imageLink:'/assets/images/header-images/small-header/header1.png',
    title:"Start your journey of making a difference right here",
    title2:"Be the Change You Want to See"
  },
  form1:{
    imageLink:'/assets/images/header-images/small-header/formHeader.png',
    title:"Lend Your Strength and Join the Relief Effort",
    title2:"Be the Change You Want to See"
  },
  form2:{
    imageLink:'/assets/images/header-images/small-header/formHeader.png',
    title:"Share Critical Information to Save Lives",
    title2:"Be the Change You Want to See"
  },
  form3:{
    imageLink:'/assets/images/header-images/small-header/formHeader.png',
    title:"Tell Us How We Can Help: Together, We'll Get Through This",
    title2:"Be the Change You Want to See"
  },

  organization1:{
    imageLink:'/assets/images/header-images/small-header/headerOrganization.png',
    title:"Visualize Impact Areas, Target Your Response",
    title2:"Be the Change You Want to See"
  },
  organization2:{
    imageLink:'/assets/images/header-images/small-header/headerOrganization.png',
    title:"Craft an Announcement and Unleash the Power of Help",
    title2:"Be the Change You Want to See"
  },

  organization3:{
    imageLink:'/assets/images/header-images/small-header/headerOrganization.png',
    title:"Unified View of Ongoing Relief Efforts",
    title2:"Be the Change You Want to See"
  },

  organization4:{
    imageLink:'/assets/images/header-images/small-header/headerOrganization.png',
    title:"Connect the Right Volunteers with the Right Needs",
    title2:"Be the Change You Want to See"
  },

  admin1:{
    imageLink:'/assets/images/header-images/small-header/adminHeader1.png',
    title:"Add Disaster Pins to Spark Collective Action",
    title2:"Be the Change You Want to See"
  },

  admin2:{
    imageLink:'/assets/images/header-images/small-header/adminHeader1.png',
    title:"Greenlighting Goodwill: Validating Credentials and Empowering Action",
    title2:"Be the Change You Want to See"
  },
  admin3:{
    imageLink:'/assets/images/header-images/small-header/adminHeader1.png',
    title:"Organization Details ",
    title2:"Be the Change You Want to See"
  },

  admin4:{
    imageLink:'/assets/images/header-images/small-header/adminHeader1.png',
    title:"Responding to Urgent Calls for Help",
    title2:"Be the Change You Want to See"
  },

  admin5:{
    imageLink:'/assets/images/header-images/small-header/adminHeader1.png',
    title:"Disaster Alerts",
    title2:"Be the Change You Want to See"
  },

  login:{
    imageLink:'/assets/images/header-images/small-header/headerOrganization.png',
    title:"Log in to Make a Difference",
    title2:"Be the Change You Want to See"
  },

  signup:{
    imageLink:'/assets/images/header-images/small-header/headerOrganization.png',
    title:"Sign Up to Help Those in Need",
    title2:"Be the Change You Want to See"
  },






  mapText:{
    title:"Visualize Areas in Need",
    subTitle:"Explore our interactive map to see real-time update on areas requering assistance.",
    additionalSubtitle:"Every Pin represents lives that need your help"
  },
  authorizationSelect:[
    {label: 'All', value: 100},
    {label: 'authorization1', value: 1},
    {label: 'authorization2', value: 2},
    {label: 'authorization3', value: 3},
    {label: 'authorization4', value: 4},
  ],
  helpForms: {

    '1': [
      { placeholder: 'Full name', type: 'text', name:"fullName"  },
      { placeholder: 'Phone', type: 'text'  ,name:"phone" },
      { placeholder: 'Address', type: 'text',name:"address" },
      { placeholder: 'Blood type', type: 'text' , name:"bloodType"},

    ],
    '4': [
      { placeholder: 'Full name', type: 'text',name:"fullName" },
      { placeholder: 'Phone', type: 'text', name:"phone"},
      { placeholder: 'Address', type: 'text',name:"address" },
      { placeholder: 'Sex', type: 'text',name:"sex"},
      { placeholder: 'Describe how can you help?', type: 'textarea',name:"description" }
    ],
    '3': [
      { placeholder: 'Full name', type: 'text',name:"fullName" },
      { placeholder: 'Phone', type: 'text' ,name:"phone"},
      { placeholder: 'Number', type: 'number',name:"number" },
      { placeholder: 'Address', type: 'text' ,name:"address"}
    ],
    '2': [
      { placeholder: 'Full name', type: 'text',name:"fullName" },
      { placeholder: 'Phone', type: 'text', name:"phone" },
      { placeholder: 'Address', type: 'text' ,name:"address"},
      { placeholder: 'Number', type: 'number' , name:"number" },
      { placeholder: 'Card number', type: 'number',name:"cardNumber" },
      { placeholder: 'Date expiration', type: 'text',name:"dateExpiration" },
      { placeholder: 'CVC', type: 'number',name:"cvc" }
    ]
  } as HelpForms,

  storageFile:"https://reliefhub.ams3.digitaloceanspaces.com",




};
