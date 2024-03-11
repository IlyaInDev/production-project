import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleBlockType, ArticleType } from '../../model/types/article';
import { ArticleDitails } from './ArticleDitails';

const meta: Meta<typeof ArticleDitails> = {
    title: 'entities/Article/ArticleDitails',
    component: ArticleDitails,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDitails>;

const article = {
    id: '1',
    title: 'JavaScript news',
    subtitle: 'Что нового в JavaScript в 2024?',
    img: 'https://cdn.eventil.com/uploads/event/header_image/291302/highres_436702483.jpg',
    views: 1020,
    createdAt: '13.01.2024',
    user: {
        id: '1',
        username: 'Vasyan',
    },
    type: [
        ArticleType.IT,
    ],
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
            src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/111/81b/7fd/11181b7fdace85437dd164a9af39b786.jpeg',
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
            src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/111/81b/7fd/11181b7fdace85437dd164a9af39b786.jpeg',
            title: 'Рисунок 1 - Скриншот сайта',
        },
    ],
};

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDitailes: {
                data: article,
            },
        }),
    ],
};

export const IsLoading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDitailes: {
                isLoading: true,
            },
        }),
    ],
};

export const Error: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDitailes: {
                error: 'error',
            },
        }),
    ],
};