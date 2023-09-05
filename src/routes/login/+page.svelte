<script>
  export let form; 
</script>
<div class="container">
  <h2>Login</h2>
  <form method="POST">
    <div>
      <input type="email" name='email' placeholder='enter your email' value={form?.email || ""}/>
    </div>
    <div>
      <input type="password" name='password'placeholder='enter your password'>
    </div>    
    {#if form?.message}
      <p class="red">{form.message}</p>
    {/if}
    <button>Login</button>
  </form>
</div>
<style>
  .red {
    color: red;
  }
</style>