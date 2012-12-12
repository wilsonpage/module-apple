{{#items}}
<a class='module-apple js-flexlock js-link{{#extraClasses}} {{.}}{{/extraClasses}}' {{> fruit/module[articlelinkdata]}}>
	{{> image}}
	<h1 class='module-apple_head'>{{title}}</h1>
	<h2 class='module-apple_sub-head'>{{subheading}}</h2>
	<div class='module-apple_body ellipsis js-flexlock'>
		<h4 class='module-apple_byline'>{{byline}}</h4>
		{{{body}}}
	</div>
</a>
{{/items}}