<nav>
    <div class="container">
        <h1>YJ</h1>
        <ul>
            <li>
                <a href="/">HOME</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/services">Services</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </div>
</nav>

<slot />

<style>
nav {
    padding: 0.5em;
    background-color: #343a40;
    color: white;
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
    color: white;
}

.active {
    color: white;
}
</style>
