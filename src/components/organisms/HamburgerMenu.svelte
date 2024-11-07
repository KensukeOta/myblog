<script lang="ts">
  import Hamburger from "../molecules/Hamburger.svelte";
  import Navigation from "../molecules/Navigation.svelte";

  let isOpen = $state(false);

  const handleToggleMenu = () => {
    isOpen = !isOpen;
  };
</script>

<div class="block sm:hidden">
  <Hamburger onToggleMenu={handleToggleMenu} />

  <Navigation isOpen={isOpen} />
</div>
