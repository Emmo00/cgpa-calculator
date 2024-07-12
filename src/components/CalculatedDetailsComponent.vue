<script setup>
import { ref, watch } from 'vue';

const cgpa = ref(0.00)
const props = defineProps(['courseList'])

let totalUnits = ref(0)
let totalGradePoints = ref(0)
watch(props.courseList, (courses) => {
    courses.forEach(({ units, grade }) => {
        totalUnits.value += units;
        totalGradePoints.value += units * Number(grade);
    })
    console.log(courses);
    cgpa.value = (totalGradePoints.value / totalUnits.value).toFixed(2);
})
</script>
<template>
    <div class=" grid gap-2">
        <div class="flex items-center justify-between">
            <h3 class="text-slate-500 text-xs">Total Unit Load</h3>
            <div class="text-sm font-bold">{{ totalUnits }}</div>
        </div>
        <div class="flex items-center justify-between">
            <h3 class="text-slate-500 text-xs">Total Grade Points</h3>
            <div class="text-sm font-bold">{{ totalGradePoints }}</div>
        </div>
        <div class="flex items-center justify-between">
            <h3 class="font-semibold">CGPA</h3>
            <div class="text-2xl font-bold">{{ cgpa || "0.00" }}</div>
        </div>
        <p class="text-muted-foreground">Your cumulative GPA based on the courses added.</p>
    </div>
</template>