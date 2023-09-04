<script>
import Seo from "$lib/Seo.svelte"; 
  import What from "$lib/What.svelte"; 

export let data;

const {
    posts
} = data;
</script>

<What />

<div class="container">
    <div class='grid'>
        {#each posts as { id, title, image, body}}
        <div>
            <h2>{title.substring(0, 20)}</h2>
            <img src={image} alt={title}>
            <p>{body.substring(0, 80)}</p>
        </div>
        {/each}
    </div>
</div>

<Seo title='YJ | Home' description='Home' type='WebPage'/>

<style>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
    padding: 2em 0;
}

img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    object-position: center;
}
</style>

<!-- Brower name part : app.html에서 %sveltekit.head% 부분-->
<!-- lib > Seo.svelte 로 이동 -->