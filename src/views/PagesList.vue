<template>
    <h4>Pages</h4>
    <div class="text-end">
        <router-link
            to="/pages/create"
            class="btn btn-primary btn-sm"
        >New Page</router-link>
    </div>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>Link Text</th>
                <th>Is Published</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="page, index in $pages.getAllPages()"
                :key="index"
            >
                <td>{{ page.pageTitle }}</td>
                <td>{{ page.link.text }}</td>
                <td>{{ page.published ? 'yes' : 'no'}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { reactive, ref, inject} from 'vue';

//const counter = ref(0);
const data =reactive({counter: 0})
const $pages = inject('$pages');


</script>