<script>
import {
    page
} from "$app/stores";

const navs = [{
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Services",
        href: "/services",
    },
    {
        title: "Contact",
        href: "/contact",
    },
    {
        title: "Blog",
        href: "/blog",
    },
];

$: url = $page.url.href;
$: routeId = $page.url.pathname;
//   $: console.log($page); // 페이지 변경될 때마다 라우팅
</script>

<nav>
    <div class="container">
        <h1>YJ</h1>
        <ul>
            {#each navs as { title, href }}
            <li>
                <a
                    {href}
                    class:active={href === "/" ? routeId === "/" : url.includes(href)}
                    {title}>{title}</a
                    >
                    </li>
                    {/each}
                    </ul>
                    </div>
                    </nav>

<style>
nav {
    padding: 0.5em;
    background-color: #fff;
    color: #000;
}

.container {
    display: flex;
    align-items: center;
}

ul {
    display: flex;
    margin: 0;
    margin-left: auto;
    list-style: none;
    font-size: 1em;
}

li {
    margin-right: 20px;
}

h1 {
    margin: 0;
    font-size: 1.3em;
    font-weight: normal;
}

a {
    text-decoration: none;
    color: #aaa;
}

.logo {
    color: #000;
}

.active {
    color: var(--primary-color);
    font-weight: 500;
}
</style>
