<script setup>
const props = defineProps(['courseList'])
console.log(props.courseList)

const gradeMapping = {
    '5': 'A',
    '4': 'B',
    '3': 'C',
    '2': 'D',
    '1': 'E',
    '0': 'F',
}
</script>

<template>
    <div class="grid gap-2">
        <div class="flex items-center justify-between">
            <h3 class="font-semibold">Courses</h3>
            <div class="text-muted-foreground">{{ courseList.length }}<!-- --> courses added</div>
        </div>
        <div class="grid gap-2">
            <div v-for="course in courseList" :key="course.courseCode" class="flex justify-between">
                <span>{{ course.courseCode }}</span>
                <span class="font-bold">{{ gradeMapping[course.grade] }}</span>
            </div>
        </div>
    </div>
</template>