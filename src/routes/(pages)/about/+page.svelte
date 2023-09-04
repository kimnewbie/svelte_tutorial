<script>
import Contact from "$lib/Contact.svelte";
import Seo from "$lib/Seo.svelte";
</script>

<div class="container grid">
    <div class="about">
        <h3>About us</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque
            tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel,
            porro, soluta unde debitis aliquam laboriosam. Repellat explicabo,
            maiores!
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio
            neque consectetur consequatur magni in nisi, natus beatae quidem quam odit
            commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.
        </p>
    </div>
    <Contact />
</div>

<style>
.grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
}

.about {
    grid-column: span 8;
}

h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 500;
    border-bottom: 1px solid var(--right-color);
}
</style>

<!-- Brower name part : app.html에서 %sveltekit.head% 부분-->
<Seo title='YJ | About' description='About' type='WebPage'/>
