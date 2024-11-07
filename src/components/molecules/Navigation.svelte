<script lang="ts">
  let { isOpen } = $props();
</script>

<div
  class={`w-full top-20 left-12 hidden m-0 ${isOpen && "expanded"} sm:block sm:ml-[5em] sm:static sm:w-auto sm:bg-transparent`}
>
  <a
    href="/"
    class="block text-center py-2.5 no-underline text-[1.2rem] font-bold uppercase hover:bg-orange-300 focus:bg-orange-300 sm:inline-block sm:px-5 sm:py-[15px]"
  >
    ホーム
  </a>
  <a
    href="/about/"
    class="block text-center py-2.5 no-underline text-[1.2rem] font-bold uppercase hover:bg-orange-300 focus:bg-orange-300 sm:inline-block sm:px-5 sm:py-[15px]"
  >
    概要
  </a>
  <a
    href="/blog/"
    class="block text-center py-2.5 no-underline text-[1.2rem] font-bold uppercase hover:bg-orange-300 focus:bg-orange-300 sm:inline-block sm:px-5 sm:py-[15px]"
  >
    ブログ
  </a>
  <a
    href="/tags/"
    class="block text-center py-2.5 no-underline text-[1.2rem] font-bold uppercase hover:bg-orange-300 focus:bg-orange-300 sm:inline-block sm:px-5 sm:py-[15px]"
  >
    タグ
  </a>
</div>
