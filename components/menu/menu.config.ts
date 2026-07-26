
export interface MenuComponent {
    title: string;
    path?: string;
    children?: MenuComponent[];
}

export const mainMenu: MenuComponent[] = [
    {
        title: "Início",
        path: "/",
    },
    {
        title: "Nossos Serviços",
        children: [
            {
                title: "Serviço 1",
                path: "/",
            },
            {
                title: "Serviço 2",
                path: "/",
            },
        ],
    },
    {
        title: "Últimos Projetos",
        path: "/",
    }
];