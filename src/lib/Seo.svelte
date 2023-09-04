<!-- Brower Header 부분 -->

<script>
  import { page } from "$app/stores";

  export let title;
  export let description;
  export let type;

  $: url = $page.url.href;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {@html `<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "${type}",
      "name": "${title}",
      "description": "${description}",
      "url": "${url}",
    }
  </script>`}
</svelte:head>

<!-- <svelte:head>
    <title>YJ - Home</title>
    <meta name='description' content='YJ Front Page'>
    <script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "name": "My Website Name",
        "url": "https://example.com",
    }
    </script>
</svelte:head> -->