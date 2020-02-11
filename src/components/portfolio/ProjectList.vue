<template>
    <div>
    <h2>Project List</h2>
        <div v-for="project in projects" v-bind:key="project.id">
            <project v-bind:project="project"/>
        </div>
    </div>
</template>
<script>
    import Project from './Project'

    export default {
        name: 'ProjectList',
        data() {
            return {
                projects: [
                    {
                        id: 0,
                        name: 'test'
                    }
                ]
            }
        },
        components: {
            Project
        }
    }
</script>