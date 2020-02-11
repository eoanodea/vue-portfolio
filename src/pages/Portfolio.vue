/*
 * File: Portfolio.vue
 * Project: vue-portfolio
 * Version: 0.1.0
 * File Created: Tuesday, 11th February 2020 2:09:24 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Portfolio page displays a list of portfolio items
 * Last Modified: Tuesday, 11th February 2020 2:09:28 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */



<template>
    <div>
        <h1>Portfolio</h1>
        <project-list />
    </div>
</template>
<script>
    import ProjectList from './../components/portfolio/ProjectList'

    export default {
        name: 'Portfolio',
        components: {
            ProjectList
        }
    }
</script>