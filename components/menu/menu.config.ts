
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
        title: "Nossos Produtos",
        path: "/",
    },
    {
        title: "Nossos Serviços",
        path: "/nossos-servicos"
    },
    {
        title: "Últimos Projetos",
        path: "/ultimos-projetos",
    },
];