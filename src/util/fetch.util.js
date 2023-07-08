import _ from "underscore";
import core from "../core";

const initialResources = {
    menuItems: [
        {
            friendlyURL: '/',
            title: 'Home'
        },
        {
            friendlyURL: 'dro',
            title: 'Dro'
        },
        {
            friendlyURL: 'bro',
            title: 'Bro'
        }
    ],
    translations: {
        'language.ru_RU': 'Русский',
        'language.en_US': 'English',
        'footer.ad.text': 'Продам {0} за {1}',
        'login.field.username.placeholder': 'Username',
        'login.field.username.error.required': 'Username is required',
        'login.field.username.error.length': 'Username should be 5-15 characters',
        'login.field.username.error.regexp': 'Username should contain only letters and digits',
        'login.field.password.placeholder': 'Password',
        'login.field.password.error.required': 'Password is required',
        'login.field.password.error.length': 'Password should be 5-10 characters',
        'login.field.password.error.regexp': 'Password should contain only letters and digits',
        'login.field.password.error.equalToUsername': 'Password should not be equal username',
        'login.actions.login': 'Sign in'
    }
};

const pages = [
    {
        friendlyURL: '/',
        layoutType: 'common',
        portlets: [
            {
                portletDropzone: '1',
                config: {
                    timeToDisplay: 2000,
                    autoplay: true,
                    pagination: {
                        arrows: false,
                        bullets: false
                    },
                    banners: [
                        'images/banner/1.png',
                        'images/banner/2.png',
                        'images/banner/3.png',
                        'images/banner/4.png',
                        'images/banner/5.png'
                    ]
                },
                portletType: 'banner'
            },
            {
                portletDropzone: '1',
                config: {
                    id: 'LOREM_IPSUM_2'
                },
                portletType: 'content'
            },
            {
                portletDropzone: '1',
                config: {
                    id: 'LOREM_IPSUM_3'
                },
                portletType: 'content',
                title: 'The standard Lorem Ipsum passage, used since the 1500s'
            }
        ],
        title: 'Eminem'
    },
    {
        friendlyURL: 'dro',
        layoutType: '30-70',
        portlets: [
            {
                portletDropzone: '1',
                config: {
                    timeToDisplay: 2000,
                    autoplay: true,
                    pagination: {
                        arrows: false,
                        bullets: false
                    },
                    banners: [
                        'images/banner/1.png',
                        'images/banner/2.png',
                        'images/banner/3.png',
                        'images/banner/4.png',
                        'images/banner/5.png'
                    ]
                },
                portletType: 'banner'
            },
            {
                portletDropzone: '2',
                config: {
                    timeToDisplay: 2000,
                    autoplay: false,
                    pagination: {
                        arrows: true,
                        bullets: true
                    },
                    banners: [
                        'images/banner/1.png',
                        'images/banner/2.png',
                        'images/banner/3.png',
                        'images/banner/4.png',
                        'images/banner/5.png'
                    ]
                },
                portletType: 'banner'
            },
            {
                portletDropzone: '1',
                config: {
                    id: 'LOREM_IPSUM_1'
                },
                portletType: 'content'
            },
            {
                portletDropzone: '2',
                config: {
                    id: 'LOREM_IPSUM_5'
                },
                portletType: 'content',
                title: 'The standard Lorem Ipsum passage, used since the 1500s'
            }
        ],
        title: 'Eminem 2'
    },
    {
        friendlyURL: 'bro',
        layoutType: '33-33-33',
        portlets: [
            {
                portletDropzone: '1',
                config: {
                    timeToDisplay: 2000,
                    autoplay: true,
                    pagination: {
                        arrows: false,
                        bullets: false
                    },
                    banners: [
                        'images/banner/1.png',
                        'images/banner/2.png',
                        'images/banner/3.png',
                        'images/banner/4.png',
                        'images/banner/5.png'
                    ]
                },
                portletType: 'banner'
            },
            {
                portletDropzone: '3',
                config: {
                    timeToDisplay: 2000,
                    autoplay: false,
                    pagination: {
                        arrows: true,
                        bullets: true
                    },
                    banners: [
                        'images/banner/1.png',
                        'images/banner/2.png',
                        'images/banner/3.png',
                        'images/banner/4.png',
                        'images/banner/5.png'
                    ]
                },
                portletType: 'banner',
                title: 'Banner'
            },
            {
                portletDropzone: '1',
                config: {
                    id: 'LOREM_IPSUM_2'
                },
                portletType: 'content'
            },
            {
                portletDropzone: '2',
                config: {
                    id: 'LOREM_IPSUM_3'
                },
                portletType: 'content',
                title: 'Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'
            },
            {
                portletDropzone: '3',
                config: {
                    id: 'LOREM_IPSUM_4'
                },
                portletType: 'content'
            },
            {
                portletDropzone: '2',
                config: {
                    id: 'LOGIN'
                },
                portletType: 'content',
                title: 'Login'
            },
            {
                portletDropzone: '1',
                config: {
                    id: 'LOREM_IPSUM_5'
                },
                portletType: 'content',
                title: '1914 translation by H. Rackham'
            }
        ],
        title: 'Eminem'
    }
];

const contents = [
    {
        id: 'LOREM_IPSUM_1',
        content: `
            Lorem <b>ipsum</b> dolor sit amet, consectetur [CLOCK] adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `
    },
    {
        id: 'LOREM_IPSUM_2',
        content: `
            Sed ut perspiciatis <b>unde</b> omnis iste natus error sit [CLOCK] voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        `
    },
    {
        id: 'LOREM_IPSUM_3',
        content: `
            But I must <b>explain</b> to you how all <b>this</b> mistaken idea [CLOCK] of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
        `
    },
    {
        id: 'LOREM_IPSUM_4',
        content: `
            At vero eos et <b>accusamus</b> et iusto odio dignissimos [CLOCK] ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        `
    },
    {
        id: 'LOREM_IPSUM_5',
        content: `
            On the other hand, we <b>denounce</b> with righteous [CLOCK] indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
        `
    },
    {
        id: 'LOGIN',
        content: `
            <div>[LOGIN]</div>
        `
    },
    {
        id: 'FOOTER',
        content: `
            <a href="#" class="fn-popup-open" data-title="О нас" data-article-id="LOREM_IPSUM_5">О нас</a>
            Блог
            Контакты
            Конфиденциальность
            Доставка
            Гарантия
            Публичная оферта
            Партнерская программа
        `
    }
];

const fetchUtil = {
    getInitialResources(lang) {
        core.message('request', {
            description: 'Get initial resources'
        });

        core.message('response', {
            description: 'Get initial resources',
            data: initialResources
        });

        return initialResources;
    },

    getPageInfo(friendlyURL, lang) {
        const pageInfo = _.findWhere(pages, {friendlyURL: friendlyURL});

        core.message('request', {
            description: 'Get page info',
            data: {friendlyURL: friendlyURL}
        });

        core.message('response', {
            description: 'Get page info',
            data: pageInfo
        });

        return pageInfo;
    },

    getContentById(contentId, lang) {
        const content = _.findWhere(contents, {id: contentId}) || {};

        core.message('request', {
            description: 'Get content',
            data: {contentId: contentId}
        });

        core.message('response', {
            description: 'Get content',
            data: content
        });

        return content.content || '';
    }
};

export default fetchUtil;