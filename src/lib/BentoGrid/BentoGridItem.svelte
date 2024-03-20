<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let className: string | undefined = undefined;
	export let title: string | HTMLElement | undefined = undefined;
	export let description: string | HTMLElement | undefined = undefined;
</script>

<div
	class={cn(
		'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border p-4 shadow-input transition duration-200 hover:shadow-xl border-white/[0.2] bg-black shadow-none',
		className
	)}
>
	<div class="transition duration-200 group-hover/bento:translate-x-2 overflow-hidden" style="scrollbar-width: none;">
        <div class="flex flex-row">
            <slot name="icon" />

            <p class="m-2 font-sans font-bold text-neutral-200">
                {title}
            </p>
    
        </div>
		<div class="font-sans text-sm font-normal text-neutral-300">
			{@html description}
		</div>
	</div>
</div>