<script lang="ts">
	import { BentoGrid, BentoGridItem } from '$lib/BentoGrid';
    import  Icon  from '@iconify/svelte';
    import { Person } from '$lib/skills';

</script>

<BentoGrid className="max-w-4xl mx-auto">
	{#each Person.skills as item, i (i)}
		<BentoGridItem
			title={item.name}
			description={item.description}
			className={item.width === 'large' ? 'md:col-span-2' : ''}
		>

            <div slot="icon" class="h-8 w-max flex flex-row" >
                {#each item.icon as icon}
                <Icon icon="{icon.name}" width="34" height="34" class="mr-2 {icon.color}" />
                {/each}
            </div>
		</BentoGridItem>
	{/each}
</BentoGrid>