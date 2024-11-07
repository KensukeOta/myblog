<script lang="ts">
  let { onToggleMenu } = $props();
</script>

<button onclick={onToggleMenu} type="button" aria-label="ハンバーガーメニューの表示の切り替えをするボタン" class="pr-5 cursor-pointer sm:hidden">
  <span class="block w-10 h-[5px] mb-2.5 bg-orange-300"></span>
  <span class="block w-10 h-[5px] mb-2.5 bg-orange-300"></span>
  <span class="block w-10 h-[5px] mb-2.5 bg-orange-300"></span>
</button>
