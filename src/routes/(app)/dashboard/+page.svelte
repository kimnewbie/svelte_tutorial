<script>
  import { goto } from "$app/navigation";
  import {
      onMount
  } from "svelte";

  let user = {};

  /** 밑에 소스가 없어도 +page.js 또는 +page.server.js 만들어서 하면 바로 연결된다. */
  onMount(async () => {
      // setTimeout(() => {
      //     user = {
      //         id: "ewrwerw"
      //     };
      // }, 1000);

      // if(!user.id){
      //   goto("/login");
      // }
  });
</script>

<div class="container">
    <h1>Dashboard</h1>
</div>
