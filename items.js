/* My data 
 * 
 * This will be a JSON object so I can easily populate different fields.
 * Eventually this will move to a separate file.
 * It may be useful to develop certain types of schema.
 */

/* Some Constants */
const READ_FULL_TEXT = "Read Full Text";
const VIEW_DEVPOST = "View DevPost Submission";
const VIEW_GITHUB = "Source on GitHub";
const VIEW_EVENT = "View Event Page";
const VIEW_WEBSITE = "Visit Website";
const READ_ARTICLE = "Read Article";
const WATCH_VIDEO = "Watch the Video";
const REVISE = 'https://medium.com/@cnguynminh/fake-m%E1%BB%99t-th%C6%B0-vi%E1%BB%87n-gi%E1%BB%91ng-react-v%E1%BB%9Bi-g%E1%BA%A7n-200-d%C3%B2ng-javascript-bdb367fbcd76'
me = [
    {
        type: "Articles",
        name: "Viết lại react ",
        link: REVISE,
        linkText: "Read on medium",
        date: "February 5 2019",
    }, {
        type: "Articles",
        name: "Viết lại medium mini ",
        link: "https://kipalog.com/posts/Tao-Single-Page-App-giong-Medium-bang-Reactjs-Redux-ket-hop-voi-Nodejs",
        linkText: "Read on Kipalog",
        description: "Viết clone lại medium mini, có đầy đủ các chức năng CRUD và front end dùng react render",
        date: "November 27 2018",
    }, {
        type: "Articles",
        name: "Xử lý text và viết thư viện tạo ra richtext",
        link: "https://kipalog.com/posts/Xu-ly-Text-trong-javascript--basic-concept-ve-Range--selection--document-execCommand",
        linkText: "Read on Kipalog",
        date: "October 2 2018"
    }, {
        type: "Articles",
        name: "Viết tiểu sử về leonardo ",
        link: "https://medium.com/@cnguynminh/leonardo-da-vinci-ph%E1%BA%A7n-1-th%C3%B3i-quen-f93be3f9aa44?source=your_stories_page---------------------------",
        linkText: "Read on Medium",
        date: "June 13 2018"
    }, {
        type: "Projects",
        name: "Front end App clone facebook",
        description: "Front end viết bằng react, store dùng unState, app có chat, viết bài(có thể giống medium), xếp rank, view project ng khác",
        link: "https://github.com/ducga1998/FrontEndMediumDuc",
        linkText: VIEW_GITHUB,
        date: "February 2019"
    }, {
        type: "Projects",
        name: "Backend end App clone facebook",
        description: "Backend cho app ở trên, dùng nodejs, graphql",
        link: "https://github.com/ducga1998/backendMediumDuc",
        linkText: VIEW_GITHUB,
        date: "August 2018"
    }, {
        type: "Projects",
        name: "Fake react",
        description: "Fake thư viện react, sử dụng đc lifecycle, render đc kiểu cấu trúc như react",
        link: "https://github.com/ducga1998/FakeReact",
        linkText: VIEW_GITHUB,
        date: "January 2018"
    }, {
        type: "Projects",
        name: "Learn canvas",
        description: "dùng js vẽ ra canvas , tạo ra hiệu ứng khói",
        link: "https://trello.com/b/neBVWGH2/mars",
        linkText: VIEW_GITHUB,
        date: "July 2018"
    },{
        type : 'Background',
        name : 'Transport and communication',
        description: "Infomation technology",
        date : '2016-2018'
    },
    {
        type : 'Background',
        name : 'Front end development',
        description: "Front end development tại shinetheme<br> Chuyên là về workpres, theme",
        date : '2017-2018'
    },
    {
        type : 'Background',
        name : 'Javascript developer',
        description: "Javascript developer tại bravebits <br /> Làm mọi thứ với javscript, viết app realtime, frontend , backend cho pagefly ",
        date : 'Cuối năm 2018-2019'
    }
]
