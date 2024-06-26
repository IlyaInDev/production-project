import type { Meta, StoryObj } from '@storybook/react';
import { Article } from '../../model/types/article';
import {
    ArticleType,
    ArticleBlockType,
    ArticleView,
} from '../../model/consts/articleConsts';
import { ArticleListItem } from './ArticleListItem';

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

const article = {
    id: '1',
    title: 'JavaScript news',
    subtitle: 'Что нового в JavaScript в 2024?',
    img: 'article-avatar.jpg',
    views: 1020,
    createdAt: '13.01.2024',
    user: {
        id: '1',
        username: 'Vasyan',
        avatar: '/avatar.jpg',
    },
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Сегодня я хочу поделиться не столько пошаговым руководством, сколько представлением одной интересной идеи, которая может помочь разработчикам, столкнувшимся с задачей интеграции приложений на Angular и React. Мой фокус сегодня — на использовании Module Federation для решения этой проблемы. Хотя это и не может считаться абсолютно идеальным решением, оно тем не менее работает и может стать тем самым толчком для кого-то, кто сейчас ищет способы объединения этих двух миров.',
                'Однако, концепция "микрофронтендов" предполагает существенное изменение этой парадигмы. Суть микрофронтендного подхода заключается в том, что в рамках одного приложения запускаются несколько фронтенд проектов (или модулей), которые между собой слабо связаны. Это означает, что каждый из этих микрофронтендов может быть разработан, протестирован, собран и развернут независимо от остальных, при этом все они совместно формируют единое приложение.',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: "new ModuleFederationPlugin({\n    name: 'react-app',\n    library: { type: 'global', name: 'react-app' },\n    filename: 'remoteEntry.js',\n    exposes: {\n        angularIntegration: './src/angularIntegration.ts',\n    },\n}),",
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Сложность архитектуры: Управление микрофронтендами влечет за собой более сложную архитектуру с множеством точек соприкосновения, что увеличивает риск возникновения ошибок и повышает стоимость тестирования.',
                'Высокий порог входа: Разработка и поддержка микрофронтендной архитектуры требуют глубокого понимания специфических технологий и подходов, а также поиска специалистов, желающих и способных работать в такой среде.',
                'Вопросы производительности: Интеграция множества независимых приложений может привести к увеличению общего объема загружаемого кода и, как следствие, к снижению производительности, особенно если одни и те же библиотеки (например, Lodash) используются в разных приложениях. Однако, использование таких механизмов, как Module Federation, может помочь решить эту проблему, позволяя делиться зависимостями между микрофронтендами, тем самым уменьшая общий объем загружаемого кода.',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'article-image.jpeg',
            title: 'Рисунок 1 - Скриншот сайта',
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: "new ModuleFederationPlugin({\n    name: 'react-app',\n    library: { type: 'global', name: 'react-app' },\n    filename: 'remoteEntry.js',\n    exposes: {\n        angularIntegration: './src/angularIntegration.ts',\n    },\n}),",
        },
        {
            id: '6',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Сложность архитектуры: Управление микрофронтендами влечет за собой более сложную архитектуру с множеством точек соприкосновения, что увеличивает риск возникновения ошибок и повышает стоимость тестирования.',
                'Вопросы производительности: Интеграция множества независимых приложений может привести к увеличению общего объема загружаемого кода и, как следствие, к снижению производительности, особенно если одни и те же библиотеки (например, Lodash) используются в разных приложениях. Однако, использование таких механизмов, как Module Federation, может помочь решить эту проблему, позволяя делиться зависимостями между микрофронтендами, тем самым уменьшая общий объем загружаемого кода.',
            ],
        },
        {
            id: '7',
            type: ArticleBlockType.CODE,
            code: "new ModuleFederationPlugin({\n    name: 'react-app',\n    library: { type: 'global', name: 'react-app' },\n    filename: 'remoteEntry.js',\n    exposes: {\n        angularIntegration: './src/angularIntegration.ts',\n    },\n}),",
        },
        {
            id: '8',
            type: ArticleBlockType.IMAGE,
            src: 'article-image.jpeg',
            title: 'Рисунок 1 - Скриншот сайта',
        },
    ],
} as Article;

export const ArticleBig: Story = {
    args: {
        article,
        view: ArticleView.BIG,
    },
};

export const ArticleSmall: Story = {
    args: {
        article,
        view: ArticleView.SMALL,
    },
};
