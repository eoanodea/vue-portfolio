<template>
    <div>
        <h2>Project {{project.id}}:</h2>
        {{project.name}}
    </div>
</template>
<script>
    export default {
        props: ['project'],
        name: 'Project'   
    }
</script>