<template>
	<div
		:class="[
			'kt-navbar__quick-link',
			{ 'kt-navbar__quick-link--narrow': isNarrow },
		]"
		:style="{ 'border-color': themeColor.borderColor }"
	>
		<div
			v-if="!isNarrow"
			class="kt-navbar__quick-link__title"
			:style="{ color: themeColor.textColor }"
			v-text="title"
		/>
		<a
			v-for="(item, index) in links"
			:key="index"
			:href="item.link"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div
				:class="[
					'kt-navbar__quick-link__links',
					{ 'kt-navbar__quick-link__links--narrow': isNarrow },
				]"
				:style="{ color: themeColor.textColor }"
			>
				<span v-text="item.title" v-if="!isNarrow" /> <i class="yoco">link</i>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	name: 'KtNavbarQuickLink',
	props: {
		title: { type: String, default: 'Quick Links' },
		links: { type: Array, default: [] },
	},
	inject: {
		themeColor: {
			from: 'KtNavbarTheme',
		},
	},
	computed: {
		isNarrow() {
			return this.$KtNavbar.isNarrow
		},
	},
}
</script>

<style lang="scss" scoped>
.kt-navbar__quick-link {
	border-top: 1px solid #fff;
	padding: 0.8rem 1.2rem;
	&--narrow {
		text-align: center;
		padding: 0.8rem 0;
	}
}
.kt-navbar__quick-link__title {
	font-size: 0.6rem;
	font-weight: 700;
	opacity: 0.64;
	text-transform: uppercase;
}
.kt-navbar__quick-link__links {
	display: flex;
	font-size: 0.75rem;
	padding: 0.3rem 0;
	justify-content: space-between;
	align-items: center;
	&--narrow {
		display: block;
	}
	i {
		font-size: 0.8rem;
	}
}
</style>
